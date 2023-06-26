import React, { useContext, useState } from "react";
import CartContext from "../context/Context";
import toast from 'react-hot-toast';


const SingleProduct = ({ prod }) => {
  const [state, dispatch] = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="w-80 bg-white cursor-pointer shadow hover:shadow-md rounded"
        onClick={() => setShowModal(true)}
      >
        <div className="h-48 w-full bg-gray-200 flex flex-col justify-between p-2 bg-cover bg-center">
          <img
            className="w-full h-full"
            alt={`${prod.title}`}
            src={`${prod.thumbnail}`}
          />
        </div>
        <div className="p-4 flex flex-col items-center">
          <h1 className="text-gray-800 text-center mt-1">{prod.title}</h1>{" "}
          <p className="text-center text-gray-800 mt-1">€{prod.price}</p>
          {state.cart.some((p) => p.id === prod.id) ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toast.error('Removed from Cart');
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
              </svg>
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toast.success('Added to Cart');

                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                });
              }}
              className="py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-800 active:bg-gray-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
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

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
                    <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                      <img
                        className="w-full"
                        alt={`${prod.title}`}
                        src={`${prod.thumbnail}`}
                      />
                    </div>
                    <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                      <div className="border-b border-gray-200 pb-6">
                        <h1
                          className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                        >
                          {prod.title}
                        </h1>
                      </div>
                      <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">
                          Price
                        </p>
                        <div className="flex items-center justify-center">
                          <p className="text-sm leading-none text-gray-600 mr-3">
                            {prod.price}
                          </p>
                          <svg
                            className="cursor-pointer"
                            width="6"
                            height="10"
                            viewBox="0 0 6 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1L5 5L1 9"
                              stroke="#4B5563"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">
                          Rating
                        </p>
                        <div className="flex items-center justify-center">
                          <p className="text-sm leading-none text-gray-600 mr-3">
                            {prod.rating}
                          </p>
                          <svg
                            className="cursor-pointer"
                            width="6"
                            height="10"
                            viewBox="0 0 6 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1L5 5L1 9"
                              stroke="#4B5563"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
                          {prod.description}
                        </p>
                        <p className="text-base leading-4 mt-7 text-gray-600">
                          Category: {prod.category}
                        </p>
                        <p className="text-base leading-4 mt-4 text-gray-600">
                          Discount: {prod.discountPercentage}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default SingleProduct;
