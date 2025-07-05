import { getAllProductsReducer, getProductByIdReducer } from "./reducers/productReducer";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';


const finalReducer = combineReducers({ 
    getAllProductsReducer : getAllProductsReducer,
    getProductByIdReducer : getProductByIdReducer
})

const store = createStore(
  finalReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;