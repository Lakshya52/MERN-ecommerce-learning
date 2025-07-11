export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {

        case 'ADD_TO_CART':
            const alreadyExists = state.cartItems.find(item => item._id === action.payload._id);
            if (alreadyExists) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item._id === action.payload._id ? action.payload : item)
                }
            } else {


                return {

                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }

        case 'UPDATE_CART_ITEM_QUANTITY':
            const updatedCart = state.cartItems.map(item =>
                item._id === action.payload._id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );

            // ✅ Update localStorage
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));

            return {
                ...state,
                cartItems: updatedCart
            };

        // case 'DELETE_FROM_CART':
        //     return {
        //         ...state,
        //         cartItems: state.cartItems.filter(item => { return item._id != action.paylode._id })
        //     }

        case 'DELETE_FROM_CART':
            const filteredCart = state.cartItems.filter(item => item._id !== action.payload);

            // 🔁 Update localStorage
            localStorage.setItem('cartItems', JSON.stringify(filteredCart));

            return {
                ...state,
                cartItems: filteredCart
            }


        default:
            return state;
    }
}