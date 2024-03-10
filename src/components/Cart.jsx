import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Cart.css";

const Cart = () => {
  return (
    <div>
      <header className='navbar'>
        <nav>
          <ul>
            <li>
              <Link to="/">Home page</Link>
            </li>
            <li>
              <a href="shop">Shop page</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Cart;
