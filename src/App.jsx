import { Link } from "react-router-dom"
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Hello from the home page!</h1>
      <p>Here are your other links</p>
      <nav>
        <ul>
          <li>
            <Link to="shop">Shop page</Link>
            <Link to="cart">Cart page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
