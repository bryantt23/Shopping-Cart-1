import { Link } from "react-router-dom";
import "../styles/App.css";

const App = () => {
  return (
    <>
      <header className="navbar">
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
      <div className="homeContainer">
        <h1 className="coffeeMessage">WE HAVE THE BREW FOR YOU</h1>
        <Link to="shop" className="shopNow">
          SHOP NOW
        </Link>
      </div>
    </>
  );
};

export default App;
