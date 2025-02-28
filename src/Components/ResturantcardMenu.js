import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantcardMenu from "./useRestrantcardmenu";
import ResturantCategory from "./ResturantCategory";

const Resturantcardmenu = () => {
  const { resId } = useParams();
  const resInfo=useResturantcardMenu(resId);
  const [showindex,setshowindex]=useState(null);
  if (!resInfo) return <Shimmer />;
  // Safely extract data using optional chaining
  const {name,cuisines,avgRating,totalRatingsString,costForTwoMessage}= resInfo?.cards?.[2]?.card?.card?.info || "No Name Available";
  const itemCards =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
    // console.log(resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
    console.log(categories);
  return (
    <div className="menu text-center">
      <h1 className="font-extrabold my-10 text-2xl" >{name}</h1>
      <h3 className="font-medium">
  
  <span style={{ color: "green" }} className="text-green-600 font-bold">{avgRating + "⭐"}</span>
  {" (" + totalRatingsString + ")"}
</h3>

      <p className="font-semibold text-lg text-blue-900">
        {cuisines.length > 0 ? cuisines.join(", ") : "Cuisines not available"} - {costForTwoMessage}
      </p>
      {/* <h2 >😋Menu😋</h2> */}
      {/* { <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> } */}
    {categories.map((category, index) => (
  <ResturantCategory key={index} data={category?.card?.card}
  showitems={index===showindex?true:false}
  setshowindex={()=>setshowindex(index)}//diffrent all the times
  />
))}

    </div>
  );
};
export default Resturantcardmenu;
