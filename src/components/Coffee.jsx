import React from "react";
import { useParams } from "react-router-dom";

const Coffee = () => {
    const { id } = useParams();
    console.log(id)

  return (
    <div>
        <h1>COFFEE PAGE</h1>
    
          
    </div>
  );
};

export default Coffee;