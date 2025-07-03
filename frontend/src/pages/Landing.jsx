import React, { useEffect, useState } from 'react'
// import products from '../products'
import Product from '../components/Product'
import axios from 'axios'


const Landing = () => {

  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/api/products/getAllProducts').then(res => {
      // If you see HTML here, your backend route is not returning JSON.
      // Double logs can happen in React Strict Mode (development only).
      console.log(res.data)
      setProducts(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (


    <div className='flex flex-wrap justify-center gap-4 p-4'>
      {products.length && (products.map(product => {
        return <div key={product._id}><Product product={product} /></div>
      }))}
    </div>
  )
}

export default Landing