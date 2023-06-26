export const initialState = {
  products: [],
  cart: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.setupProduct };

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    
      case "REMOVE_FROM_CART":
        return { ...state, cart: state.cart.filter((p)=>p.id !== action.payload.id) };
    default:
      return state;
  }
};
