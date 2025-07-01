import React from 'react'
import products from '../products'
import Product from '../components/Product'


const Landing = () => {
  return (
    <div className='flex flex-wrap justify-center gap-4 p-4'>
      {products.map(product => (
        <Product product={product}/>
      ))}
    </div>
  )
}

export default Landing