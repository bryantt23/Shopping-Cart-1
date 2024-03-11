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
              <Link to="/" className="home">
                <img
                  src="../images/homeIcon.png"
                  alt="Home"
                  className="home-icon"
                />
                BRITT'S BREWS
              </Link>
            </li>
            <li>
              <Link to="shop" className="shop">SHOP</Link>
            </li>
            <li>
              <Link to="cart" className="cart">
              <img
                  src="../images/cart.png"
                  alt="cart"
                  className="cart-icon"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Cart;
