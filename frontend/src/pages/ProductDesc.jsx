import React from "react";
import products from "../products";
import { useParams } from "react-router-dom";

const ProductDesc = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  return (
    <div className="px-10 mt-10">
      <div className="flex  items-start justify-between  w-full ">
        <img src={product.image} className="w-[50%]" />
        <div className="w-[50%] ml-10">
          <div>Product name : {product.title}</div>
          <div>₹ {product.price}</div>
          <div>{product.desc}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
