import { useState } from "react";
import { NavLink } from "react-router-dom";
import LOGO_URL from "../Utils/Red and Yellow Catering Flat Illustrative Food Place Logo.png"; 
import useOnlinestatus from "./useonlinestatus";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const online = useOnlinestatus();
const cartItems=useSelector((store)=>store.cart.items);
  return (
    <div className="flex justify-between items-center bg-pink-100 shadow-lg px-4">
      {/* Logo Section */}
      <div className="logo-cont">
        <img className="h-20 p-2" src={LOGO_URL} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="nav-item">
        <ul className="flex space-x-6">
          <li className="px-2 font-bold">
            Online: {online ? "✅" : "🚨"}
          </li>
          <li className="px-2 font-bold transition-all duration-300 ease-out hover:text-xl">
            <NavLink 
              className={(e) => (e.isActive ? "text-red-500" : "")} 
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="px-2 font-bold transition-all duration-300 ease-out hover:text-xl">
            <NavLink 
              className={(e) => (e.isActive ? "text-red-500" : "")} 
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="px-2 font-bold transition-all duration-300 ease-out hover:text-xl">
            <NavLink 
              className={(e) => (e.isActive ? "text-red-500" : "")} 
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="px-2 font-bold transition-all duration-300 ease-out hover:text-xl">
            <NavLink 
              className={(e) => (e.isActive ? "text-red-500" : "")} 
              to="/grocery"
            >
              Grocery
            </NavLink>
          </li>
          <li className="px-2 font-bold transition-all duration-300 ease-out hover:text-xl ">
            <NavLink 
              className={(e) => (e.isActive ? "text-red-500" : "")} 
              to="/cart"
            >
              <FontAwesomeIcon icon={faCartPlus} className="text-3xl" />({cartItems.length} )
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Login Button */}
      <div>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 px-2 font-bold transition-all duration-300 ease-out hover:text-xl"
          onClick={() => {
            setbtnNameReact((prevState) => (prevState === "Login" ? "Logout" : "Login"));
          }}
        >  
          {btnNameReact}
        </button>
      </div>
    </div>
  );
};

export default Header;
