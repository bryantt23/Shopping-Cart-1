import React from 'react'
import { Link } from "react-router-dom"

const Cart = () => {
  return (
    <div>
      <div>
        <h1>Hello from the cart page!</h1>
        <p>what now?</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home page</Link>
              <Link to="shop">Shop page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Cart;
