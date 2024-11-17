import { useEffect, useState } from "react";
import Resturantcard from "../Resturantcard ";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListofResturant, setListofResturant] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=28.6227656&lng=77.05626649999999"
      );
      const json = await data.json();
  
      // Log the data structure to debug
      console.log(json);
  
      // Extract restaurants
      const restaurants =
        json?.data?.success?.cards?.[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants || [];
      console.log("Fetched Restaurants:", restaurants);
      setListofResturant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  if (ListofResturant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const FilterList = ListofResturant.filter(
              (res) => res.info.avgRating > 4
            );
            console.log("Filtered List:", FilterList);
            setListofResturant(FilterList);
          }}
        >
          Top-Rated
        </button>
      </div>
      <div className="res-cont">
        {ListofResturant.map((resData, index) => (
          <Resturantcard key={resData.info.id || index} resData={resData} />
        ))}
      </div>
    </div>
  );
};
export default Body;
