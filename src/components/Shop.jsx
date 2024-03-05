import React , { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Shop = () => {
    const [coffeeData, setCoffeeData] = useState([]);
    
    useEffect(async function () {
        async function getData(items=20){
            let data =await fetch(`https://fake-coffee-api.vercel.app/api?limit=${items}`);
            let pureData= await data.json();
            return pureData;
          } 
          const data = await getData(6)
          console.log(data)
    }, []);

  return (
    <div>
      <h1>Hello from the shop page!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <a href="cart">Cart page</a>
          </li>
        </ul>
      </nav>
      {coffeeData ? (
        <ul>
          {coffeeData.map((coffee) => (
            <li key={coffee.id}>
              <h2>{coffee.name}</h2>
              <p>{coffee.description}</p>
              <p>Price: ${coffee.price}</p>
              <p>Region: {coffee.region}</p>
              <p>Weight: {coffee.weight}</p>
              <p>Roast Level: {coffee.roast_level}</p>
              <p>Flavor Profil: {coffee.flavor_profile}</p>
              <p>Grind Option: {coffee.grind_options}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading coffees...</p>
      )}
    </div>
  );
};

export default Shop;
