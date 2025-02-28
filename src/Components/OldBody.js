import { useState } from "react";
import Resturantcard from "../Resturantcard ";
import resList from "../Utils/RawData";
const Body = () => {
    //local sttae variables- super powerful variable
    const [ListofResturant,setListofResturant]=useState(resList);
    //passed default value []
    //normal js variable
   // let reslist=[];

    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                 //filter logic here
const FilterList=ListofResturant.filter((res)=>res.info.avgRating>4);
setListofResturant(FilterList);
            }}>Top-Rated</button>
        </div>
        {/* <div className="res-cont">
          <Resturantcard resData={resList[0]} />
          <Resturantcard resData={resList[1]} />
          <Resturantcard resData={resList[2]} />
          <Resturantcard resData={resList[3]} />
          <Resturantcard resData={resList[7]} />
          <Resturantcard resData={resList[5]} />
          <Resturantcard resData={resList[8]} />
          <Resturantcard resData={resList[9]} />
          <Resturantcard resData={resList[10]} />
          <Resturantcard resData={resList[11]} />
          <Resturantcard resData={resList[12]} />
          <Resturantcard resData={resList[13]} />
          <Resturantcard resData={resList[14]} />
          <Resturantcard resData={resList[15]} />
          
   
      
        </div> */}  
        <div className="res-cont">
    {ListofResturant.map((resData) => (
      <Resturantcard key={resData.id} resData={resData} />
    ))}
  </div>
  
      </div>
    );
  };
  export default Body;