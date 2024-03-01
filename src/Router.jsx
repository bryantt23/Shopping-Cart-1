import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from './components/Shop.jsx'
import Cart from './components/Cart.jsx'
import App from './App.jsx'
import Error from './Error.jsx'
import Berry from './components/Berry.jsx'
import Beet from './components/Beet.jsx'
import Dragonfruit from './components/Dragonfruit.jsx'

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
    children: [
        { path: "beet", element: <Beet /> },
        { path: "berry", element: <Berry /> },
        { path: "dragonfruit", element: <Dragonfruit /> },
      ],
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);
return <RouterProvider router={router} />;
};

export default Router;