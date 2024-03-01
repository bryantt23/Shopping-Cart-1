import React from "react";
import { Link } from "react-router-dom";

const Beet = () => {
  return (
    <>
      <h1>BEETS</h1>
      <Link to="shop">Back to shop</Link>
      console.log("HELLO BEET")
    </>
  );
};

export default Beet;
