import { useState } from "react";
 //import { LOGO_URL } from "../Utils/EssenstialNavLink";
import { NavLink, NavNavLink } from "react-router-dom";
import LOGO_URL from "../Utils/Red and Yellow Catering Flat Illustrative Food Place Logo.png"; 
import useOnlinestatus from "./useonlinestatus";


const Header = () => {

const[btnNameReact,setbtnNameReact]=useState("Login");
const online=useOnlinestatus();
    return (

      <div className="header">
        <div className="logo-cont">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-item">
          <ul>
            <li>
              Online:{online?"✅":"🚨"}
            </li>
            <li><NavLink className={(e)=>{return e.isActive?"red":""} } to="/">Home</NavLink></li>
            <li><NavLink className={(e)=>{return e.isActive?"red":""} } to="/about">About</NavLink> </li>
            <li><NavLink className={(e)=>{return e.isActive?"red":""} } to="/contact">Contact</NavLink></li>
            <li><NavLink className={(e)=>{return e.isActive?"red":""} } to="/cart">Cart</NavLink></li>
            
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