import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import ShopCategory from './Components/ShopCategory';
import Product from './Components/Product';
import Card from './Components/Card';
import LoginSignup from './Components/LoginSignup';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/category/:categoryId" element={<ShopCategory />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/card" element={<Card />} />
          <Route path="/login-signup" element={<LoginSignup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
