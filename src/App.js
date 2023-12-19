import { useState } from 'react';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import products from './Components/Product';
function App() {

  return (
    <div className="container ">
      <Header/>
      
      <ProductList products={products}/>
    </div>
  );
}

export default App;
