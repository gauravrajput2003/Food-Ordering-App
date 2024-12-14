import React from 'react';
import { IMG_URL } from '../Utils/EssenstialLink';
import { addItem } from '../Utils/cartSlice';
import { useDispatch } from 'react-redux';

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAdditems = (item) => {
    dispatch(addItem(item)); // Pass the actual item to the dispatch
  };

  return (
    <div>
      {items.map((item) => (
        item.card && item.card.info ? (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 flex justify-between items-start"
          >
            {/* Text Content */}
            <div className="w-9/12">
              <div className="py-2">
                <span className="text-red-500">{item.card.info.name}</span>
                <span>
                  {" "} -₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultprice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>

            {/* Image Content */}
            <div className="w-3/12 p-4 flex justify-end">
              <img
                src={IMG_URL + item.card.info.imageId}
                className="w-full object-cover"
                alt={item.card.info.name}
              />
              <button
                className="p-1 text-black bg-white shadow-lg absolute m-auto bg-transparent hover:bg-blue-500 font-semibold hover:text-black font-bold text-sm py-1  px-2 border border-blue-500"
                onClick={() => handleAdditems(item)}
              >
                Add+
              </button>
            </div>
          </div>
        ) : (
          <div key={item.id} className="p-2 m-2 border-gray-200 border-b-2 flex justify-between items-start">
            <span>Item information is unavailable</span>
          </div>
        )
      ))}
    </div>
  );
};

export default ItemList;
