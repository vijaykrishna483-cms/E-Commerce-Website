import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ContactPage from './Pages/ContactUs';
import ShopSection from './Pages/Shop';
import Cart from './Pages/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
                <Route path="/shop" element={<ShopSection />} />
 <Route path="/cart/:id" element={<Cart />} />

      </Routes>
    </Router>
  );
}

export default App;
