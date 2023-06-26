import React, { useContext } from "react";
import CartContext from "../context/Context";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const [{ products }, dispatch] = useContext(CartContext);

  return (
    <div className="container mx-auto">
      <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
        {products.map((prod) => (
          <SingleProduct key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default Home;
