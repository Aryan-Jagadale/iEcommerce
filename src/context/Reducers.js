export const initialState = {
    products: [],
    cart: [],
}


export const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
      default:
        return state;
    }
  };


  export const productReducer = (state, action) => {
    switch (action.type) {
      case "SET_PRODUCTS":
        return { ...state, products:action.setupProduct};
      default:
        return state;
    }
  };  