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


export const getProductById = (productId) => dispatch => {

    dispatch({ type: 'GET_PRODUCTBYID_REQUEST' })
    axios.post('http://localhost:3000/api/products/getProductById', { productId }).then(res => {

        dispatch({ type: 'GET_PRODUCTBYID_SUCCESS', payload: res.data })
    }).catch(err => {
        console.log(err)
        dispatch({ type: 'GET_PRODUCTBYID_FAILED', payload: err })
    })


}

export const filterProducts = (searchKey, sort, category) => (dispatch) => {

    dispatch({ type: 'GET_PRODUCTS_REQUEST' })
    axios.get('http://localhost:3000/api/products/getAllProducts').then(res => {
        let filteredProduct;

        filteredProduct = res.data

        if (searchKey) {
                filteredProduct = filteredProduct.filter((product) =>
                    product.title.toLowerCase().includes(searchKey.toLowerCase())
                );
            }
        if (sort !== 'popular') {
            if (sort === 'htl') {
                filteredProduct.sort((a, b) => b.price - a.price);
            } else if (sort === 'lth') {
                filteredProduct.sort((a, b) => a.price - b.price);
            }
        }

        if (category !== 'all') {
                filteredProduct = filteredProduct.filter((product) =>
                    product.category.toLowerCase().includes(category.toLowerCase())
                );
            }

        dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: filteredProduct })

    }) .catch((err) => {
            console.error('API Error:', err.response?.data || err.message);
            dispatch({ type: 'GET_PRODUCTS_FAILED', payload: err });
        });
}