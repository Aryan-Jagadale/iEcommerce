import React, { useContext } from "react";
import CartContext from "../context/Context";

const SingleProduct = ({ prod }) => {
  const [state, dispatch] = useContext(CartContext);

  //console.log(prod);
  return (
    <div className="w-80 bg-white shadow rounded">
      {" "}
      <div
        className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
        style={{
          backgroundImage:
            `${prod.thumbnail}` ||
            "url('https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
        }}
      ></div>{" "}
      <div className="p-4 flex flex-col items-center">
        {" "}
        <p className="text-gray-400 font-light text-xs text-center">
          {" "}
          Hammond robotics{" "}
        </p>{" "}
        <h1 className="text-gray-800 text-center mt-1">{prod.title}</h1>{" "}
        <p className="text-center text-gray-800 mt-1">€{prod.price}</p>
        {state.cart.some((p) => p.id === prod.id) ? (
          <button
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod,
              });
            }}
            className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 active:bg-red-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
          >
            {" "}
            Remove from Cart{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />{" "}
            </svg>{" "}
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: prod,
              });
            }}
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
          >
            {" "}
            Add to order{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />{" "}
            </svg>{" "}
          </button>
        )}
      </div>{" "}
    </div>
  );
};

export default SingleProduct;
