import React from 'react';

const Category = () => {
  const images = [
    '/image 4.png',
    '/image 5.png',
    '/image 6.png',
    '/image 7.png',
    '/image 8.png',
    '/image 9.png',
    '/image 10.png',
    '/image 11.png',
    '/image 12.png',
    '/image 13.png',
    '/image 6.png',
    '/image 8.png',
  ];

  return (
    <div className="min-h-screen bg-[#c8a2c8] flex flex-col items-center justify-center gap-6 p-6 sm:p-10 px-[5vw]">
      <h1 className="font-semibold text-3xl sm:text-4xl text-center">Category Highlights</h1>
      <p className="text-base sm:text-lg font-light text-center max-w-3xl mt-2 sm:mt-4">
        Explore the rich tapestry of Tamil Nadu's culinary heritage. From spicy chutneys to tangy pickles, each dish tells a story of tradition and flavor.
        <br />Enhance your taste with our authentic collection—tradition meets flavor.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-6">
        {images.map((img, idx) => (
          <div key={idx} className="w-full overflow-hidden rounded-lg shadow-md">
            <img
              src={img}
              alt={`Category ${idx + 1}`}
              className="w-full h-[160px] sm:h-[180px] md:h-[200px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
