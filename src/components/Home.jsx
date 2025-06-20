import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

function Home() {
  const {productsList} = useSelector(state => state.products)

  return (
    <>
    <h1 className='text-2xl text-black font-bold mt-30 ml-4 mb-2' >All Products</h1>
      <ul className='bg-amber-100 flex flex-wrap justify-center list-none m-2 rounded mt-2 p-4'>
          {productsList.map( productItem => (
            
            <ProductCard 
            key={productItem.id}
            cardDetails = {productItem}
            />

          ))}
      </ul>
    </>
  )
}

export default Home