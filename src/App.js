import { useState } from 'react';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
function App() {

  /* const count=useSelector( state =>state.counter.value )
  const dispatch = useDispatch()
 */

  return (
    <div className="container ">
      <Header/>
      <ProductList/>
    </div>
  );
}

export default App;
