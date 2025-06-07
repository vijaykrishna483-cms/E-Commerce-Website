import React from 'react';

const ShoppingCard = ({ image, title, price, onAddToCart }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-xl overflow-hidden text-left shadow-md mx-auto">
      <img
        src={image}
        alt={title}
        className="w-full h-48 sm:h-56 md:h-60 object-cover"
      />
      
      <div className="px-4 py-3">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 px-2">{title}</h2>
        <p className="text-red-600 font-medium mt-1 px-2">Rs. {price}</p>

        <button
          onClick={onAddToCart}
          className="w-full mt-4 bg-[#c8a2c8] text-white font-semibold py-2 rounded-full transition-all hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingCard;
