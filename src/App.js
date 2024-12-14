import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Cart from "./Components/Cart";
import Resturantcardmenu from "./Components/ResturantcardMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./Utils/appstore";

// Lazy loaded component
const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
  const [username, setusername] = useState(""); // Default value as an empty string

  useEffect(() => {
    const data = {
      name: "Gaurav",
    };
    setusername(data.name); // Properly setting state inside useEffect
  }, []);

  return (
    <Provider store ={appStore}> 
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

const Approut = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:resId",
        element: <Resturantcardmenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

// Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approut} />);
