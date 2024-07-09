import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NewProduct from './components/NewProduct';
import Products from './components/Products';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import EditProduct from './components/EditProduct';
import { AppContext, useAppState } from './app/app';

function App() {
  const [currentRoute, setCurrentRoute] = useState()
  useEffect(() =>{
    setCurrentRoute(window.location.pathname.split('/')[1].toLocaleLowerCase())
  })
  return (
    <AppContext.Provider value={useAppState()} >
    
    <BrowserRouter>
    <nav className='m-1 p-1 border border-info' >
      <ul className="nav nav-pills">
        <li>
          <Link 
          onClick={() => setCurrentRoute('home')}
          className={currentRoute =='home' ? 'btn btn-info ms-1' : 'btn btn-outline-info ms-1'}
           to={"/home"}>Home</Link>
        </li>

        <li>
          <Link
          onClick={() => setCurrentRoute('products')}
          className={currentRoute =='products'? 'btn btn-info ms-1' : 'btn btn-outline-info ms-1'}
           to={"/products"}>Products</Link>
          </li>

        <li>
          <Link
          onClick={() => setCurrentRoute('new-product')}
          className={currentRoute =='new-product'? 'btn btn-info ms-1' : 'btn btn-outline-info ms-1'}
           to={"/new-product"}>New Product</Link>
          </li>
      </ul>
      </nav>
    <Routes>
      <Route path="/home" element={<Home />} /> 
      <Route path="/new-product" element={<NewProduct />} />
      <Route path="/products" element={<Products />} />
      <Route path="/editProduct/:id" element={<EditProduct />} />
    </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
