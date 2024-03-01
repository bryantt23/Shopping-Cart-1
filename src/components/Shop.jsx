import React from 'react'
import { Link } from "react-router-dom"

const Shop = () => {
  return (
    <div>
      <h1>Hello from the shop page!</h1>
      <p>Buy something?</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home page</Link>
            <Link to="cart">Cart page</Link>
          </li>
          <li>
            <Link to="berry">Berry Juice</Link>
          </li>
          <li>
          <Link to="beet">Beet Juice</Link>
          </li>
          <li>
          <Link to="dragonfruit">Dragonfruit Juice</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Shop;
