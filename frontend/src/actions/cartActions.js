export const addToCart = (product, quantity) => (dispatch, getState ) => {
    const cartItem = {
        name: product.title,
        _id: product._id,
        price: product.price,
        image: product.image,
        quantity: quantity,
    }
    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
    localStorage.setItem('cartItems', JSON.stringify(getState().addToCartReducer.cartItems))
}