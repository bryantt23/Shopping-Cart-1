import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Shop = () => {
  const [coffeeData, setCoffeeData] = useState(null);
  const [chosenCoffee, setChosenCoffee] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    async function getData(items = 20) {
      let data = await fetch(
        `https://fake-coffee-api.vercel.app/api?limit=${items}`
      );
      let pureData = await data.json();
      setCoffeeData(pureData);
    }
    getData(6);
  }, []);

  useEffect(() => {
    if (id) { // Check if ID exists in the URL
      const chosenCoffee = coffeeData?.find((coffee) => coffee.id === Number(id));
      setChosenCoffee(chosenCoffee);
    }
  }, [coffeeData, id]);

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
              <Link to={`/shop/${coffee.id}`}>{coffee.name}</Link>
              <p>{coffee.description}</p>
              <p>Price: ${coffee.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading coffees...</p>
      )}
      {chosenCoffee && ( // Conditionally render detailed information
        <div>
          <h1>{chosenCoffee.name}</h1>
          <p>{chosenCoffee.description}</p>
          <p>Price: ${chosenCoffee.price}</p>
          <p>Region: {chosenCoffee.region}</p>
          <p>Weight: {chosenCoffee.weight}</p>
          <p>Roast Level: {chosenCoffee.roast_level}</p>
          <p>Flavor Profil: {chosenCoffee.flavor_profile}</p>
        </div>
      )}
    </div>
  );
};

export default Shop;
