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
import useOnlinestatus from "./useonlinestatus";
 import Game from "./Game";

const Body = () => {
  // State variables
  const [ListofResturant,setListofResturant] = useState(resList); // Original unfiltered list
  const [FilteredRest, setFilteredRest] = useState(resList); // Currently filtered list
  const [searchText, setsearchText] = useState(""); // Search text state
  const onlinestatus=useOnlinestatus();
  if (!onlinestatus) {
    return <Game/>
  }
  return (
    <div className="body">
      <div className="filter p-6 bg-pink-50 my-2 flex items-center justify-start">
        <div className=" search p-6 bg-pink-50 my-2 ">
          <input 
            type="text"
            placeholder="Search..."
            className="search-box focus:bg-green-50 font-semibold"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 ml-1 text-white bg-sky-500 rounded-md hover:bg-sky-700 h-7 " 
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
          className="px-4 ml-1 text-white rounded-md h-7 bg-green-600 hover:bg-green-400 active:bg-green-950 focus:outline-none focus:ring focus:ring-violet-300 ..."
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
     
    
      <div className=" flex flex-wrap px-10 rounded-md">
      {FilteredRest.map((resData, index) => (
  <Link style={{textDecoration: 'none'}}
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
