import { useState } from "react";
 //import { LOGO_URL } from "../Utils/EssenstialLink";
import { Link } from "react-router-dom";
import LOGO_URL from "../Utils/Red and Yellow Catering Flat Illustrative Food Place Logo.png"; 


const Header = () => {

const[btnNameReact,setbtnNameReact]=useState("Login");
    return (
      <div className="header">
        <div className="logo-cont">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-item">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link> </li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{
if(btnNameReact=="Login"){
  setbtnNameReact("Logout")
}
else{
  setbtnNameReact("Login")
}
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;