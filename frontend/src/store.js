import { filterProductsReducer, getAllProductsReducer, getProductByIdReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";


import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import { loginUserReducer, registerNewUserReducer } from "./reducers/userReducer";


const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  cartReducer: cartReducer,
  registerNewUserReducer: registerNewUserReducer,
  loginUserReducer : loginUserReducer,
  filterProductsReducer :filterProductsReducer,
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

let currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
  cartReducer: { cartItems: cartItems },
  loginUserReducer : {currentUser: currentUser}
}


const store = createStore( finalReducer, initialState, composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;