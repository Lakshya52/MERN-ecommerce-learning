export const getAllProductsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS_REQUEST':
            return {
                loading: true,
                // ...state
            };
        case 'GET_ALL_PRODUCTS_SUCCESS':
            return {
                loading: false,
                products: action.payload
            };
        case 'GET_ALL_PRODUCTS_FAILED':
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}