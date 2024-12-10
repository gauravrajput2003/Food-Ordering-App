import { IMG_URL } from "../Utils/EssenstialLink";

const Resturantcard = (props) => {
    const { resData } = props;//param in fxn
    const{
  cloudinaryImageId,
  name,
  areaName,
  avgRatingString,
  costForTwo,
  lastMileTravelString,
    }=resData?.info;
 
    return (
      <div className="res-container flex flex-wrap justify-evenly">
      <div className="res-card w-[300px] p-3 m-2 shadow-lg bg-pink-100 ">
        <img className="res-logo" alt="img-logo" src={IMG_URL+cloudinaryImageId }/>
        <h3 className="font-bold text-xl">{resData.info.name}</h3>
        <h3>{resData?.info.cuisines?.join(",") || "Cuisines not available"}</h3>
        <h4>{areaName}</h4>
        <h3 color="green">{avgRatingString+"⭐"}</h3>
        <h4 style={{ fontWeight: 800 }}>{costForTwo}</h4>

        <h4>{lastMileTravelString}</h4>
      </div>
      </div>
    );
  };
  export const withPromoted = (WrappedComponent) => {
    return (props) => (
      <div style={{ border: "2px solid gold", padding: "10px", margin: "10px" }}>
        <label className="text-white rounded-sm  font-bold bg-black shadow-md">Promoted</label>
        <WrappedComponent {...props} />
      </div>
    );
  };
  
  export default Resturantcard;