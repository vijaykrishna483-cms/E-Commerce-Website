import React from 'react';

const Awards = () => {
  return (
    <div className='h-full bg-[#c8a2c8] flex flex-col items-center justify-center gap-6 p-6 sm:p-10 px-[6vw]'>
      <h1 className='text-3xl sm:text-4xl font-semibold text-center'>Awards and Achievements</h1>

      <div className='flex flex-wrap justify-center items-center gap-6 mt-4'>
        <img
          src='/award1.png'
          alt='Award 1'
          className='w-[70vw] sm:w-[40vw] md:w-[25vw] lg:w-[20vw] h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'
        />
        <img
          src='/award3.png'
          alt='Award 3'
          className='w-[70vw] sm:w-[40vw] md:w-[25vw] lg:w-[20vw] h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'
        />
        <img
          src='/award2.png'
          alt='Award 2'
          className='w-[70vw] sm:w-[40vw] md:w-[25vw] lg:w-[20vw] h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'
        />
      </div>
    </div>
  );
};

export default Awards;
