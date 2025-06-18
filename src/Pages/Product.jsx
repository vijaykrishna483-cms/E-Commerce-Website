import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLocation, useParams } from 'react-router-dom';
const Cart = () => {

      const { id } = useParams();
  const location = useLocation();
  const product = location.state;

  if (!product) return <div>No product selected.</div>;
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);

  const decrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1); // Prevent going below 1
  };
  return (
    <>  
    
    <Navbar/>
    <div className="max-w-6xl pt-[18vh] mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Left Side - Product Images */}
      <div className="flex flex-col items-center lg:items-start lg:w-1/2">
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnail images */}
          <div className="flex flex-row md:flex-col gap-2">
            <img             src={product.image}
 alt="thumb1" className="w-12 h-12 object-cover rounded" />
            <img             src={product.image}
 alt="thumb2" className="w-12 h-12 object-cover rounded" />
            <img             src={product.image}
 alt="thumb3" className="w-12 h-12 object-cover rounded" />
          </div>
          {/* Main Image */}
          <img
            src={product.image}
            alt="Gongura Thokku"
            className=" h-auto object-contain"
          />
        </div>
      </div>

      {/* Right Side - Product Info */}
      <div className="lg:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-red-600 text-sm font-semibold">🔥 15 sold in last 15 hours</p>
        <p className="text-xl font-semibold text-gray-800">Price: Rs. {product.price}</p>
        <p className="text-gray-600 text-sm">👁️ 12 peoples are viewing this right now</p>

        <div className="mt-2">
          <p className="text-gray-700 font-medium">Weight: <span className="font-bold">Weight: {product.weight}</span></p>
          <button className="mt-1 px-3 py-1 border border-black rounded bg-black text-white">Weight: {product.weight}</button>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <button
        onClick={decrement}
        className="px-3 py-1 border border-gray-400 rounded"
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={increment}
        className="px-3 py-1 border border-gray-400 rounded"
      >
        +
      </button>
        </div>

        <button className="mt-4 w-full bg-black text-white py-3 rounded-lg text-lg font-semibold">
          Add to Cart
        </button>

        {/* Delivery info */}
        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <p>🚚 Estimate delivery time: <span className="font-semibold">2-7 days</span></p>
          <p>🎁 First-time users get <span className="font-bold">Rs.50</span> off on all orders above <span className="font-bold">Rs.699</span>!</p>
          <p>📦 Free shipping: <span className="font-bold">On all orders over Rs.999</span>.</p>
        </div>
      </div>
    </div>
<Footer/>
    </>
  );
};

export default Cart;
