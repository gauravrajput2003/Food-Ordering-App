// src/App.js
import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Cart from "./Components/Cart";
import LoginPage from "./Components/LoginPage";
import Resturantcardmenu from "./Components/ResturantcardMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./Utils/appstore";
import Footer from "./Components/Footer";
import RegisterPage from "./Components/RegisterPage"; // Import RegisterPage
import { AuthProvider } from "./Components/AuthContext";

// Lazy loaded component
const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
  return (
    <AuthProvider>
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
    </AuthProvider>
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
      {
        path: "/login", // Add the login route
        element: <LoginPage/>,
      },
      {
        path: "/register", // New route for the Register Page
        element: <RegisterPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

// Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approut} />);
