import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/Context";

const Header = () => {
  const [{ cart }, dispatch] = useContext(CartContext);

  return (
    <div>
      <Link to={"/cart"}>
        <button>Cart {cart.length}</button>
      </Link>
    </div>
  );
};

export default Header;
