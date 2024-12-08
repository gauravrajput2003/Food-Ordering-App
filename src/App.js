//we are fetching data from API now
//useEFFect() learned


import { React,lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Resturantcardmenu from "./Components/ResturantcardMenu";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

// Restaurant data for "Rominus Pizza And Burger"
// Body Component
// AppLayout Component
const Grocery=lazy(()=>import("./Components/Grocery"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const Approut=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
     
      },
      {
        path:"/about",
        element:<About/>,
     
      },
      {
        path:"/grocery",
        element:(<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>),
     
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/resturant/:resId",
        element:<Resturantcardmenu/>,
      },
      
    ],
    errorElement:<Error/>,
  
  },
 
]);

// Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approut}/>);
