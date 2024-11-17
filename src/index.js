//we are fetching data from API now
//useEFFect() learned


import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

// Header Component


// Resturantcard Component


// Restaurant data for "Rominus Pizza And Burger"


// Body Component


// AppLayout Component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
