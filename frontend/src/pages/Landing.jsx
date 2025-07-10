import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../actions/productAction';
import Product from '../components/Product';
import Spinner from '../components/Spinner';
import Filter from '../components/Filter';

const Landing = () => {
  const dispatch = useDispatch();

  // Get both: all products and filtered products
  const allProductsState = useSelector((state) => state.getAllProductsReducer);
  const filteredProductsState = useSelector((state) => state.filterProductsReducer);

  const allProducts = allProductsState.products || [];
  const filteredProducts = filteredProductsState.products || [];

  const loading = filteredProductsState.loading || allProductsState.loading;
  const error = filteredProductsState.error || allProductsState.error;

  // Only fetch all products once
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // Decide which list to show
  const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : allProducts;

  return (
    <>
      <Filter />
      <div className='flex flex-wrap justify-center gap-4 p-4'>
        {loading ? (
          <Spinner />
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : productsToDisplay.length === 0 ? (
          <h2>No products found</h2>
        ) : (
          productsToDisplay.map((product) => (
            <div key={product._id}>
              <Product product={product} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Landing;
