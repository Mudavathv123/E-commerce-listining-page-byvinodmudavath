
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductListing from './components/ProductListing/ProductListing';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import ViewProduct from './components/ViewProducts/ViewProduct';
import { createContext, useState } from 'react';
import './App.css'

export const context = createContext();

function App() {

  const [cartProducts, setCartProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false)

  const handleAddProducts = (product) => {
    const existProduct = cartProducts.find(eachProduct => eachProduct.uniqueId === product.uniqueId);
    if (existProduct) {
      setCartProducts(prevProducts => prevProducts.map(eachProduct => {
        if (eachProduct.uniqueId === existProduct.uniqueId) {
          return { ...eachProduct, quantity: eachProduct.quantity + 1 }
        }
        return eachProduct
      }))
    } else {
      setCartProducts(prevProducts => [...prevProducts, { ...product, quantity: 1 }])
    }


  }

  const handleIsOpen = (value) => {
    setIsOpen(value)
  }

  console.log(isOpen)

  return (
    <div className={`${isOpen ? 'isopen' : 'isclose'}`}>
      <context.Provider value={{ cartProducts, handleAddCart: handleAddProducts, isOpen, handleIsOpen }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plants-and-pots" element={<ProductListing />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/view-product/:id" element={<ViewProduct />} />
          </Routes>
        </Router>
      </context.Provider>
    </div>
  );
}

export default App;
