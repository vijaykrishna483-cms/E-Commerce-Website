import React from 'react';
import { FaStar } from 'react-icons/fa';
import Card from './card/Card';

const PopularPicks = () => {
  const products = [
    { img: '/demo.png', name: 'Item', price: '299/-', stars: 4 },
    { img: '/demo.png', name: 'Item', price: '299/-', stars: 4 },
    { img: '/demo.png', name: 'Item', price: '299/-', stars: 4 },

  ];

  return (
    <div className="min-h-screen bg-[#c8a2c8]  flex flex-col items-center justify-center gap-4 p-6 sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center">
        Today&rsquo;s Popular Picks
      </h1>
      <p className="text-base sm:text-lg font-light text-center max-w-2xl">
        Authentic flavors crafted with tradition—ultimate satisfaction in every bite.
      </p>

      {/* Wrap grid + poster */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:w-[100vw]">
        {/* Card grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {products.map((p, i) => (
           <Card
           key={i}
        name={p.name}
        image={p.img}
        stars={p.stars}
        price={p.price} 
           />
          ))}
        </div>

        {/* Poster image */}
        <img
          src="/poster.png"
          alt="Poster"
          className="w-full max-w-xs md:max-w-sm object-cover rounded-tr-[25%] rounded-bl-[25%] shadow-lg"
        />
      </div>
    </div>
  );
};

export default PopularPicks;
