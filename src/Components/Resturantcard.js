import { IMG_URL } from "../Utils/EssenstialLink";

const Resturantcard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRatingString,
    costForTwo,
    lastMileTravelString,
  } = resData?.info;

  return (
    <div className="p-2 m-2 ">
      <div className=" bg-white shadow-lg rounded-lg transition-all duration-300 ease-out hover:shadow-[0_10px_20px_rgba(255,165,0,0.6)] hover:scale-105">
        <img
          className="h-60 w-full object-cover rounded-t-lg"
          alt="img-logo"g
          src={IMG_URL + cloudinaryImageId}
        />
        <div className="p-4">
          <h3 className="font-semibold text-2xl text-gray-800">{name}</h3>
          <h4 className="text-gray-600 text-lg">{areaName}</h4>
          <h4 className="text-sm text-gray-500">
            {resData?.info.cuisines?.join(", ") || "Cuisines not available"}
          </h4>
          <div className="flex items-center justify-between text-gray-700 mt-2">
            <h3 className="text-lg font-semibold text-green-500">
              {avgRatingString + "⭐"}
            </h3>
            <h4 className="font-bold text-lg">{costForTwo}</h4>
          </div>
          <h4 className="text-sm text-gray-500 mt-2">{lastMileTravelString}</h4>
        </div>
      </div>
    </div>
  );
};

export const withPromoted = (WrappedComponent) => {
  return (props) => (
    <div className="relative">
      <div
        className="border-2 border-gold p-3 m-3 rounded-lg"
        style={{
          borderColor: "gold",
        }}
      >
        <label className="absolute top-2 left-2 text-white rounded-sm font-bold bg-black py-1 px-3 shadow-md">
          Promoted
        </label>
        <WrappedComponent {...props} />
      </div>
    </div>
  );
};

export default Resturantcard;
