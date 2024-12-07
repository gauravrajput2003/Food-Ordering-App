import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantcardMenu from "../Utils/useRestrantcardmenu";

const Resturantcardmenu = () => {
  const { resId } = useParams();
  const resInfo=useResturantcardMenu(resId);
  if (!resInfo) return <Shimmer />;
  // Safely extract data using optional chaining
  const {name,cuisines,avgRating,totalRatingsString,costForTwoMessage}= resInfo?.cards?.[2]?.card?.card?.info || "No Name Available";
  const itemCards =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
  
  <span style={{ color: "green" }}>{avgRating + "⭐"}</span>
  {" (" + totalRatingsString + ")"}
</h3>

      <p>
        {cuisines.length > 0 ? cuisines.join(", ") : "Cuisines not available"} - {costForTwoMessage}
      </p>
      <h2 >😋Menu😋</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Resturantcardmenu;
