import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import CartContext from "./context/Context";
import { useEffect, useReducer } from "react";
import { initialState, productReducer } from "./context/Reducers";
import { Toaster } from "react-hot-toast";


function App() {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=10");
    const data = await res.json();
    if (data && data.products) {
      dispatch({
        type: "SET_PRODUCTS",
        setupProduct: data.products,
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="App">
        <Header />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </CartContext.Provider>
  );
}

export default App;
