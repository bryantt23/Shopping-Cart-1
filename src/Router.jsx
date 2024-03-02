import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop.jsx";
import Cart from "./components/Cart.jsx";
import App from "./App.jsx";
import Error from "./Error.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
    },
    {
      path: "shop",
      element: <Shop />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
