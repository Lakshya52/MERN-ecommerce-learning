import React from "react";
import { IndianRupee } from "lucide";
import { Link } from "react-router-dom";

const Product = ({product}) => {
  return (
    <Link to={`product/${product._id}`}>
    <div className="h-[400px] w-[300px] border rounded-lg overflow-hidden cursor-pointer">
      <img src={product.image} className="w-full h-[70%]" />
      <div className=" h-[7%] px-5 text-xl">{product.title}</div>
      <div className=" h-[5%] px-5 text-md">₹ {product.price}</div>
      <div className=" h-[15%] px-5">{product.desc}</div>
    </div>
    </Link>
  );
};

export default Product;
