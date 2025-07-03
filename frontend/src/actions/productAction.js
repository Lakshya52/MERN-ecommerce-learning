import axios from 'axios';
// import { useDispatch } from 'react-redux';

export const getAllProducts = () => dispatch => {

    dispatch({ type: 'GET_ALL_PRODUCTS_REQUEST' })
    axios.get('http://localhost:3000/api/products/getAllProducts').then(res => {
        // If you see HTML here, your backend route is not returning JSON.
        // Double logs can happen in React Strict Mode (development only).
        // console.log(res.data)
        // setProducts(res.data)
        dispatch({ type: 'GET_ALL_PRODUCTS_SUCCESS', payload: res.data })
    }).catch(err => {
        console.log(err)
        dispatch({ type: 'GET_ALL_PRODUCTS_FAILED', payload: err })
    })


}