import React, { useEffect, useState } from "react";
// import products from "../products";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../actions/productAction";
import { addToCart } from "../actions/cartActions"; // <-- Import the Redux action

const ProductDesc = () => {
  // const [products, setProducts] = useState([]) // empty array to remove errors temproraily
  const { id: productId } = useParams(); // use 'id' instead of '_id' because it is the variable name in the url
  // const product = products.find((p) => p._id === productId);
  const getProductByIdState = useSelector((state => state.getProductByIdReducer));
  const { product, error, loading } = getProductByIdState;
  // Use quantityOptions from product, fallback to default if not loaded or empty
  const quantityOptions = (product?.quantityOptions && product.quantityOptions.length > 0)
    ? product.quantityOptions
    : [99, 98, 97, 96, 95];
  const [quantity, setQuantity] = useState(quantityOptions[0]);

  // Update quantity when quantityOptions changes (e.g., when product loads)
  useEffect(() => {
    setQuantity(quantityOptions[0]);
  }, [quantityOptions]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductById(productId));
  }, [])

  // if (!product) {
  //   return (
  //     <div className="px-10 mt-10">
  //       <div className="text-2xl text-gray-600">
  //         {products.length === 0 ? "Something went wrong..." : "Product not found."}
  //       </div>
  //     </div>
  //   );
  // }

  // Rename the local handler to avoid conflict
  function handleAddToCart() {
    dispatch(addToCart(product, quantity));
    alert(`Added ${quantity} cards to cart`);
  }

  return (
    <>


      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Something went wrong</h1>
      ) : (



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
                  <button className="bg-black text-white px-4 py-1 rounded hover:bg-gray-600 cursor-pointer   " onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDesc;
