import { getAllProductsReducer, getProductByIdReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";


import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import { registerNewUserReducer } from "./reducers/userReducer";


const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  cartReducer: cartReducer,
  registerNewUserReducer: registerNewUserReducer
})
let cartItems = [];
try {
  const stored = localStorage.getItem('cartItems');
  if (stored && stored !== 'undefined') {
    cartItems = JSON.parse(stored);
  }
} catch (e) {
  console.log(e)
  cartItems = [];
}

const initialState = {
  cartReducer: { cartItems: cartItems }
}

const store = createStore( finalReducer, initialState, composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;