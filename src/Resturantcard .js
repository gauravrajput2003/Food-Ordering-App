import { IMG_URL } from "./Utils/EssenstialLink";

const Resturantcard = (props) => {
    const { resData } = props;
    const{
  cloudinaryImageId,
  name,
  areaName,
  avgRatingString,
  costForTwo,
  lastMileTravelString,
    }=resData?.info;
    
    return (
      <div className="res-card">
        <img className="res-logo" alt="img-logo" src={IMG_URL+cloudinaryImageId }/>
        <h3>{resData.info.name}</h3>
        <h3>{resData?.info.cuisines?.join(",") || "Cuisines not available"}</h3>
        <h4>{areaName}</h4>
        <h4>{avgRatingString+"⭐"}</h4>
        <h4>{costForTwo}</h4>
        <h4>{lastMileTravelString}</h4>
      </div>
    );
  };
  export default Resturantcard;