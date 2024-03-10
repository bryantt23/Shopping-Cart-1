import { Link } from "react-router-dom";
import "../styles/App.css";

const App = () => {
  return (
    <>
    <header className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="shop">SHOP</Link>
          </li>
          <li>
            <Link to="cart">Cart page</Link>
          </li>
        </ul>
      </nav>
    </header>
    <div className="homeContainer">
    <h1 className="coffeeMessage">WE HAVE THE BREW FOR YOU</h1>
    <Link to="shop" className="shopNow">SHOP NOW</Link>
    </div>
  </>
  );
};

export default App;