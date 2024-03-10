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
              <Link to="/">
                <img src="../images/homeIcon.png" alt="Home" className="home-icon" />
              BRITT'S BREWS</Link>
            </li>
            <li>
              <Link to="shop">SHOP</Link>
            </li>
            <li>
              <a href="cart">Cart page</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Cart;
