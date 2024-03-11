import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Shop from './Shop.jsx';
import Cart from './Cart.jsx';
import Coffee from './Coffee.jsx';
import Nav from './Nav.jsx';
import Error from './Error.jsx';
import Home from './Home.jsx';
// https://stackoverflow.com/questions/70833727/using-react-router-v6-i-need-a-navbar-to-permanently-be-there-but-cant-display
// Wrapper component that includes the Nav and an Outlet for child routes
const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet /> {/* Child routes will render here */}
    </div>
  );
};

// Updated router configuration to use the Layout component and nested routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> }, // Default path rendering the Home component
      { path: 'shop', element: <Shop /> },
      { path: 'coffee/:id', element: <Coffee /> },
      { path: 'cart', element: <Cart /> },
      // Add more nested routes here if necessary
    ],
    errorElement: <Error />,
  },
  // You can add more top-level routes here if needed
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
