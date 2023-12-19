import React from 'react';
import ProductItem from './ProductItem';

import products from './Product';

export default function ProductList() {
  return (
    <div className='row my-4'>
      {/* Map through the 'products' array and render a 'ProductItem' component for each product */}
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}

      {/* Example: Rendering a 'ProductItem' without providing a 'product' prop */}
      <ProductItem />
    </div>
  );
}
