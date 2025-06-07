import React from 'react';
import { FaStar } from 'react-icons/fa';

const PopularPicks = () => {
  const products = [
    { img: '/card1.png', name: 'Item', price: '299/-', rating: 4 },
    { img: '/card1.png', name: 'Item', price: '299/-', rating: 4 },
    { img: '/card1.png', name: 'Item', price: '299/-', rating: 4 },
    { img: '/card1.png', name: 'Item', price: '299/-', rating: 4 },
    { img: '/card1.png', name: 'Item', price: '299/-', rating: 4 },
    { img: '/card1.png', name: 'Item', price: '299/-', rating: 4 },
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
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full">
        {/* Card grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white w-full max-w-[220px] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-md"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-[100px] object-cover"
              />
              <div className="p-3">
                <div className="flex justify-between items-center">
                  <h2 className="text-base sm:text-lg font-semibold">{p.name}</h2>
                  <p className="text-base sm:text-lg font-semibold">{p.price}</p>
                </div>
                <div className="flex text-yellow-400 mt-1 text-sm">
                  {Array(p.rating)
                    .fill()
                    .map((_, idx) => (
                      <FaStar key={idx} />
                    ))}
                </div>
              </div>
            </div>
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
