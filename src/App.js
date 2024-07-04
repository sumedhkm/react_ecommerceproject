import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import ShopCategory from './Components/ShopCategory';
import Product from './Components/Product';
import Card from './Components/Card';
import LoginSignup from './Components/LoginSignup';
import './App.css';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/category/kids" element={<ShopCategory />} />
          <Route path="/shop/category/mens" element={<ShopCategory  />} />
          <Route path="/shop/category/women" element={<ShopCategory />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/card" element={<Card />} />
          <Route path="/login-signup" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
