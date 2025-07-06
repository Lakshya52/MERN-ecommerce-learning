import { getAllProductsReducer, getProductByIdReducer } from "./reducers/productReducer";
import { addToCartReducer } from "./reducers/cartReducer";


import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';


const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  addToCartReducer: addToCartReducer
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
  addToCartReducer: { cartItems: cartItems }
}

const store = createStore( finalReducer, initialState, composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;