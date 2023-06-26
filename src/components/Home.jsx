import React, { useContext, useState } from "react";
import CartContext from "../context/Context";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const [{ products }] = useContext(CartContext);

  const [query, setQuery] = useState("");

  return (
    <div>
    <div className="flex items-center justify-center">
    <input onChange={(e)=>setQuery(e.target.value)} className="shadow appearance-none border rounded-full w-[80%] md:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
      <br />
      <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 inline-flex flex-col items-center md:block">
        {products.filter((item)=>item.title.toLowerCase().includes(query.toLowerCase())).map((prod) => (
          <SingleProduct key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default Home;
