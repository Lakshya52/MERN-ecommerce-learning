import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteFromCart, addToCart } from '../actions/cartActions'


const Cart = () => {
    // const cartItems = localStorage.getItem('cartItems')
    const cartReducerState = useSelector(state => state.cartReducer)

    const { cartItems } = cartReducerState

    const subtotal = cartItems.reduce((acc, item) => acc + (((item.price / 1.18).toFixed(2)) * item.quantity), 0)

    const dispatch = useDispatch();

    const setQuantity = (productId, newQuantity) => {
        dispatch({
            type: 'UPDATE_CART_ITEM_QUANTITY',
            payload: {
                _id: productId,
                quantity: newQuantity
            }
        });
    }

    const deleteProduct = (item) => {
        dispatch({
            type: 'DELETE_FROM_CART',
            payload: item._id,
        });
    };





    return (
        <div className='px-10 mt-10'>
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border border-gray-300">S.no</th>
                            <th className="px-4 py-2 border border-gray-300">Image</th>
                            <th className="px-4 py-2 border border-gray-300">Particulars</th>
                            <th className="px-4 py-2 border border-gray-300">Price</th>
                            <th className="px-4 py-2 border border-gray-300">Quantity</th>
                            <th className="px-4 py-2 border border-gray-300">Total Price</th>
                            <th className="px-4 py-2 border border-gray-300">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item, index) => (
                            <tr key={item._id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border border-gray-300 text-center">{index + 1}</td>
                                <td className="px-4 py-2 border border-gray-300 text-center"><img src={item.image} className="h-10 w-10 object-contain mx-auto" /></td>
                                <td className="px-4 py-2 border border-gray-300 hover:underline"><Link to={`/product/${item._id}`}>{item.name}</Link></td>
                                <td className="px-4 py-2 border border-gray-300 text-center">₹{(item.price / 1.18).toFixed(2)}

                                </td>
                                <td className="px-4 py-2 border border-gray-300 text-center">

                                    <select value={item.quantity} onChange={(e) => setQuantity(item._id, Number(e.target.value))}>

                                        {item.quantityOptions.map((x, i) => {
                                            return <option key={x} value={x}>{x}</option>
                                        })}
                                    </select>
                                </td>
                                <td className="px-4 py-2 border border-gray-300 text-center">{((Number(item.price / 1.18)) * item.quantity).toFixed(2)}</td>
                                <td className="px-4 py-2 border border-gray-300 text-center hover:underline hover:text-red-500 cursor-pointer" onClick={() => deleteProduct(item)}>Delete</td>
                            </tr>
                        ))}


                    </tbody>
                </table>
                <hr className='mt-7 border-gray-300' />
                <h2 className="text-xl  mt-4">Subtotal : ₹{(subtotal).toFixed(2)}</h2>
                <h2 className="text-xl  mt-4">Gst (18%) : ₹{(subtotal * 0.18).toFixed(2)}</h2>
                <h2 className="text-xl  mt-4">Grand total : ₹{((subtotal * 0.18) + subtotal).toFixed(2)}</h2>
                <hr className='mt-5 border-gray-300' />


                <button className='bg-black text-white p-3  rounded-xl mt-5 w-full cursor-pointer hover:bg-gray-500 hover:text-black'>PAY ₹ {((subtotal * 0.18) + subtotal).toFixed(2)} NOW
</button>





            </div>
        </div>
    )
}

export default Cart