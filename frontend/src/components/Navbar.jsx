import React from "react";
import {ShoppingCart} from "lucide"
import { Link } from "react-router-dom";

import { useDispatch, useSelector} from "react-redux";

const Navbar = () => {
  const cartState = useSelector((state) => state.addToCartReducer);
  const { cartItems } = cartState;
  return (
    <>
      <div className="w-screen h-[100px] bg-black text-white flex justify-between items-center px-10">
        <Link to="/" >Logo</Link>
        <span>
          <ul className="type-none flex gap-2">
            <li>
              <Link to="/login" className="hover:text-blue-200 hover:underline">Login</Link>
            </li>
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
