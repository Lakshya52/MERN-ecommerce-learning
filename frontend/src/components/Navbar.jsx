import React from "react";
import { ShoppingCart } from "lucide"
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux"; 
import { logoutUser } from "../actions/userActions";


const currentUser = JSON.parse(localStorage.getItem('currentUser'))



const Navbar = () => {
  const dispatch = useDispatch();

  const cartState = useSelector((state) => state.cartReducer);
  const { cartItems } = cartState;
  return (
    <>
      <div className="w-screen h-[100px] bg-black text-white flex justify-between items-center px-10">
        <Link to="/" >Logo</Link>
        <span>


          <ul className="type-none flex gap-2">

            {currentUser ?
              (
                <div class="relative  text-left group flex flex-col  w-[100px]">
                  <button class="  text-white rounded-md ">
                    {currentUser.name}
                  </button>

                  <div className="absolute  mt-10 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition-all duration-200 ease-out z-10">
                    <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</Link>
                    <Link to="/orders" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Orders</Link>
                    <li onClick={() => { dispatch(logoutUser()); navigate("/");}} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Logout</li>
                  </div>
                </div>

              ) : (
                <div>
                  <li>
                    <Link to="/login" className="hover:text-blue-200 hover:underline">Login</Link>
                  </li>
                </div>
              )
            }

            <li>
              <Link to="/cart" className="hover:text-blue-200 hover:underline">Cart {cartItems.length}</Link>
            </li>
          </ul>
        </span>
      </div>
    </>
  );
};

export default Navbar;
