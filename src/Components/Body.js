// import { useEffect, useState } from "react";
// import ResturantCard from './Resturantcard';
// import Shimmer from "./Shimmer";

// const Body = () => {
//   const [ListofResturant, setListofResturant] = useState([]);
//  const [FilteredRest, setFilteredRest] = useState([]);

//   useEffect(() => {
//     fetchdata();
//   }, []);

//   const fetchdata = async () => {
//     try {
//       const data = await fetch(
//         "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.6302312&lng=77.4349177&carousel=true&third_party_vendor=1"
//       );
//       const json = await data.json();

  
    
//       // Extract restaurants
//       const restaurants =
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//       ;
//       console.log(restaurants);
//       setListofResturant(restaurants);
//       setFilteredRest(restaurants);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
  

//   if (ListofResturant.length === 0) {
//     return <Shimmer />;
//   }

//   return (
//     <div className="body">
//       <div className="filter">
//         <button
//           className="filter-btn"
//           onClick={() => {
//             const FilterList = ListofResturant.filter(
//               (res) => res.info.avgRating > 4
//             );
//             console.log("Filtered List:", FilterList);
//             setListofResturant(FilterList);
//           }}
//         >
//           Top-Rated
//         </button>
//       </div>
//       <div className="res-cont">
//         {FilteredRest.map((resData) => (
//           <ResturantCard key={resData.info.id } resData={resData} />
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Body;
import {useState } from "react";
import Resturantcard from "./Resturantcard";
import resList from "../Utils/RawData";
import Resturantcardmenu from "./ResturantcardMenu";
import { Link } from "react-router-dom";
const Body = () => {
  // State variables
  const [ListofResturant,setListofResturant] = useState(resList); // Original unfiltered list
  const [FilteredRest, setFilteredRest] = useState(resList); // Currently filtered list
  const [searchText, setsearchText] = useState(""); // Search text state

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log("Search Text:", searchText);
              // Filter the current filtered list based on search text
              const FilterSearch = FilteredRest.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRest(FilterSearch);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Applying Top-Rated Filter");
            // Filter the original list for top-rated restaurants
            const FilterList = ListofResturant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRest(FilterList);
          }}
        >
          Top-Rated
        </button>
      </div>
      <div className="res-cont">
      {FilteredRest.map((resData, index) => (
  <Link
    key={`${resData.info.id}-${index}`}
    to={`/resturant/${resData.info.id}`}
  >
    <Resturantcard resData={resData} />
  </Link>
))}

      </div>
    </div>
  );
};

export default Body;
