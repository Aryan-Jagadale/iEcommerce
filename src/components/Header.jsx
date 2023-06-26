import React, { useContext } from "react";
import CartContext from "../context/Context";
import { Link } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [{ cart }] = useContext(CartContext);
  return (
    <>
      <nav className="relative flex flex-wrap rounded-md items-center justify-between px-2 py-3 bg-gray-800 shadow m-1">
        <div className="container px-4 mx-auto flex items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="font-bold text-lg font-medium leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
              to={"/"}
            >
              iEcomm
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className={"flex flex-col items-center"}>
            <ul className="flex  list-none">
              <li className="nav-item">
                <Link
                  className="py-2 flex flex-row items-center text-base font-bold leading-snug text-white hover:opacity-75"
                  to={"/cart"}
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Cart {cart.length}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
