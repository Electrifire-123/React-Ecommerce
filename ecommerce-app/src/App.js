import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage'
import OrderPlacement from './pages/OrderPlacement'
import ProductPage from './pages/ProductPage'
import Header from './components/Header';
import AddToCart from './pages/AddToCart';
import { ProductsContextProvider } from './context/producDetailsContext';
function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
     <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/shop' element={<ProductPage/>}/>
          <Route path='/favorites' element={<AddToCart/>}/>
          <Route path='/orders' element={<OrderPlacement/>}/>
        </Routes>
      </BrowserRouter>
      </ProductsContextProvider>

    </div>
  );
}

export default App;
