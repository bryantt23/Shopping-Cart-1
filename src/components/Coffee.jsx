import React,{useEffect} from "react";
import { useParams } from "react-router-dom";

const Coffee = () => {
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        async function getData() {
          let data = await fetch(
            `https://fake-coffee-api.vercel.app/api/${id}`
          );
          let pureData = await data.json();
          //setCoffeeData(pureData);
          console.log(pureData)
        }
        getData();
      }, []);
      

  return (
    <div>
        <h1>COFFEE PAGE</h1>
    
          
    </div>
  );
};

export default Coffee;