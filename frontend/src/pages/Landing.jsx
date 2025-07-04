import React, { useEffect, useState } from 'react'
// import products from '../products'
import Product from '../components/Product'
// import axios from 'axios' 
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../actions/productAction'


const Landing = () => {
  const getAllProductsState = useSelector(state => state.getAllProductsReducer)
  const { products, error, loading } = getAllProductsState
  // const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    // axios.get('http://localhost:3000/api/products/getAllProducts').then(res => {
    //   // If you see HTML here, your backend route is not returning JSON.
    //   // Double logs can happen in React Strict Mode (development only).
    //   // console.log(res.data)
    //   setProducts(res.data)
    // }).catch(err => {
    //   console.log(err)
    // })

    dispatch(getAllProducts())

  }, [])

  return (


    <div className='flex flex-wrap justify-center gap-4 p-4'>

      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Something went wrong</h1>
      ) : (
        products.map(product => (
          <div key={product._id}><Product product={product} /></div>
        ))
      )}



      {/* {products.length && (products.map(product => {
        return <div key={product._id}><Product product={product} /></div>
      }))} */}
    </div>
  )
}

export default Landing