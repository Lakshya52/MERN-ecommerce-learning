import React, { useState } from "react";
// import products from "../products";
import { useParams } from "react-router-dom";

const ProductDesc = () => {
  const products = [];
  const { id: productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const [quantity, setQuantity] = useState(50);
  const quantityOptions = [50, 100, 150, 200, 250, 300, 400, 500];

  return (
    <div className="px-10 mt-10">
      <div className="flex  items-start justify-between  w-full ">
        <img
          src={product.image}
          className="w-[50%] border rounded-xl overflow-hidden"
        />
        <div className="w-[50%] ml-10">
          <div className="text-5xl mb-5 uppercase">{product.title}</div>
          <div className="text-xl mb-2">
            ₹ {product.price} / per card{" "}
            <span className="text-sm text-gray-600">
              {" "}
              Including GST, No Hidden Charges
            </span>
          </div>
          <p className="mb-5 text-green-600 ">Free Delhivery</p>
          Description :<div className="mb-5 text-gray-600">{product.desc}</div>
          <hr />
          {/* Quantity selector */}
          <div className="my-5 flex items-start justify-between">
            <div>
              <label htmlFor="quantity" className="mr-2 font-semibold">
                Quantity:
              </label>
              <select
                id="quantity"
                name="quantity"
                className="border rounded px-2 py-1 cursor-pointer"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              >
                {quantityOptions.map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button className="bg-black text-white px-4 py-1 rounded hover:bg-gray-600 cursor-pointer   ">
                Buy Now
              </button>
              <button className="bg-black text-white px-4 py-1 rounded hover:bg-gray-600 cursor-pointer   ">
                Add to Cart
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
