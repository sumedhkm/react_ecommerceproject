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
import women_banner from './Components/Assets/banner_womens.png';  // Updated to banner_womens.png
import kid_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/category/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/shop/category/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/shop/category/women" element={<ShopCategory banner={women_banner} category="women" />} />
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
