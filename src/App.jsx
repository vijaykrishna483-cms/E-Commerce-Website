import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ContactPage from './Pages/ContactUs';
import ShopSection from './Pages/Shop';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/login';
import ProductDetail from './Pages/ProductDetail';
import Admin from './admin/admin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/shop" element={<ShopSection />} />
            <Route path="/login" element={<LoginSignup />} />
      <Route path="/cart" element={<Cart />} />
  <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart/:id" element={<Cart />} />

            <Route path="/admin" element={<Admin />} />



    </Routes>
  );
}

export default App;
