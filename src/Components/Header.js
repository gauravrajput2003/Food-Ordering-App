// src/Components/Header.js
import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import LOGO_URL from "../Utils/Red and Yellow Catering Flat Illustrative Food Place Logo.png"; 
import useOnlinestatus from "./useonlinestatus";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from "./AuthContext";

const Header = () => {
  const { isLoggedIn, userName, logout } = useAuth();
  const [Greeting, setGreeting] = useState("");

  const online = useOnlinestatus();
  const cartItems = useSelector((store) => store.cart.items);
  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting("Good Morning");
    } else if (hours < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []); // Runs only once when the component mounts


  return (
    <div className="flex justify-between items-center bg-pink-100 shadow-lg px-4 h-40">
      {/* Logo Section */}
      <div className="logo-cont">
        <img className="h-40 p-2" src={LOGO_URL} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="nav-item">
        <ul className="flex space-x-6">
          <li className="px-2 font-bold">
            Online: {online ? "✅" : "🚨"}
          </li>
          <li className="px-2 font-bold transition-all duration-300 ease-out text-2xl hover:text-xl">
            <NavLink className={(e) => (e.isActive ? "text-red-500" : "")} to="/">
              Home
            </NavLink>
          </li>
          <li className="px-2 font-bold transition-all duration-300 ease-out text-2xl hover:text-xl">
            <NavLink className={(e) => (e.isActive ? "text-red-500" : "")} to="/about">
              About
            </NavLink>
          </li>
          <li className="px-2 font-bold transition-all duration-300 ease-out text-2xl hover:text-xl">
            <NavLink className={(e) => (e.isActive ? "text-red-500" : "")} to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="px-2 font-bold transition-all duration-300 ease-out text-2xl hover:text-xl">
            <NavLink className={(e) => (e.isActive ? "text-red-500" : "")} to="/grocery">
              Grocery
            </NavLink>
          </li>
          <li className="px-2 font-bold transition-all duration-300 ease-out text-2xl hover:text-xl ">
            <NavLink className={(e) => (e.isActive ? "text-red-500" : "")} to="/cart">
              <FontAwesomeIcon icon={faCartPlus} className="text-3xl" />({cartItems.length})
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Login/Logout Button */}
      <div>
        {isLoggedIn ? (
    <div className="flex items-center space-x-[5px]">
    <span className="font-bold truncate max-w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">
      
      {Greeting}, {userName}
    </span>
    <button
      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 font-bold transition-all duration-300 ease-out"
      onClick={logout}
    >
      Logout
    </button>
  </div>
  
        ) : (
          <NavLink to="/login">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 px-2 font-bold transition-all duration-300 ease-out">
              Login
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
