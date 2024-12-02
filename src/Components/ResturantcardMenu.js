import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../Utils/EssenstialLink";

const Resturantcardmenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    if (!resId) {
      console.error("Error: resId is undefined. Check your route or URL.");
      return;
    }
    Fetchmenu();
  }, [resId]);

  const Fetchmenu = async () => {
    try {
      const data = await fetch(`${MENU_URL}${resId}&submitAction=ENTER`);
      const json = await data.json();
      console.log("API Response:", json);
      setresInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (!resInfo) return <Shimmer />;

  // Log the restaurant info for debugging
  console.log("Restaurant Info:", resInfo);

  // Safely extract data using optional chaining
  const name = resInfo?.cards?.[2]?.card?.card?.info?.name || "No Name Available";
  const cuisines = resInfo?.cards?.[2]?.card?.card?.info?.cuisines || [];
  const costForTwoMessage =
    resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage || "Cost details not available";
  const itemCards =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.length > 0 ? cuisines.join(", ") : "Cuisines not available"} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
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
