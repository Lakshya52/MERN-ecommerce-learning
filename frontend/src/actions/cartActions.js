export const addToCart = (product, quantity) => (dispatch, getState ) => {
    const cartItem = {
        name: product.title,
        _id: product._id,
        price: product.price,
        image: product.image,
        quantity: quantity,
        quantityOptions: product.quantityOptions
    }
    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems))
}

export const deleteFromCart = (item)=> dispatch =>{
    dispatch({type: "DELETE_FROM_CART", payload:item})
} 