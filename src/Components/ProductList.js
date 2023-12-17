import React from 'react'
import ProductItem from './ProductItem'



export default function ProductList({products}) {
  return (
    <div className='row my-4'>
        {
            products.map((product) => <ProductItem key={product.id} product={product}/>)
        }
        
        <ProductItem/>
    </div>
  )
}
