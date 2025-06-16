import React from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';

const Card = ({ name, image, stars, price }) => {
  return (
    <div className="bg-[#b96e8f] w-[250px] rounded-xl p-4 text-white relative font-sans shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer group">
      <img
        src={image}
        alt={name}
        className="w-full h-[260px] object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
      />

      <h3 className="text-lg font-medium mt-2">{name}</h3>

      <div className="flex items-center gap-1 mt-1">
        {Array.from({ length: stars }, (_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>

      <p className="mt-1 font-semibold text-lg">Rs.{price}/-</p>

      <div className="absolute bottom-0 right-0 bg-yellow-400 p-5 rounded-tl-[60%] rounded-br-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-500">
        <FaShoppingCart className="text-white text-3xl" />
      </div>
    </div>
  );
};

export default Card;
