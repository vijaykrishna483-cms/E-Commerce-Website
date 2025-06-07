import React from 'react'
import { FaStar } from 'react-icons/fa';
const BestSellers = () => {
  return (
    <div  className='h-full bg-[#c8a2c8] flex flex-col items-center justify-center p-10'>
      <div className='md:w-[80%] w-[90vw] rounded-3xl bg-black h-full py-2 gap-2'>
          <h1 className='text-3xl font-bold text-white text-center'>Best Sellers</h1>
          <p className='text-white font-light w-[100%] text-center'>Customer favorites loved for their bold flavors, perfect blends, and unbeatable taste — these are our top picks!</p>
        <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
      <div className="flex flex-row justify-center items-center mt-4">
      {/* Image */}
      <img 
        src="/number1.png" 
        alt="Gongura Thokku" 
        className="md:w-[120px] w-[90px] object-contain"
      />

      {/* Details */}
      <div className="flex bg-white flex-col rounded-br-2xl rounded-tr-2xl justify-between p-1 md:p-3">
        <div>
          <h2 className="font-semibold text-lg">Gongura Thokku</h2>
          <div className="flex text-yellow-500 mt-1">
            {Array(5).fill().map((_, i) => (
              <FaStar key={i} className="text-sm" />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <button className="bg-black text-white px-3 py-1 text-sm rounded-lg">
            Add to cart
          </button>
          <span className="ml-3 text-lg font-medium">299/-</span>
        </div>
      </div>
    </div>
    

     <div className="flex flex-row justify-center items-center">
      {/* Image */}
      <img 
        src="/number1.png" 
        alt="Gongura Thokku" 
        className="md:w-[120px] w-[90px]  object-contain"
      />

      {/* Details */}
      <div className="flex bg-white flex-col rounded-br-2xl rounded-tr-2xl justify-between p-1 md:p-3">
        <div>
          <h2 className="font-semibold text-lg">Gongura Thokku</h2>
          <div className="flex text-yellow-500 mt-1">
            {Array(5).fill().map((_, i) => (
              <FaStar key={i} className="text-sm" />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <button className="bg-black text-white px-3 py-1 text-sm rounded-lg">
            Add to cart
          </button>
          <span className="ml-3 text-lg font-medium">299/-</span>
        </div>
      </div>
    </div>

     <div className="flex flex-row justify-center items-center">
      {/* Image */}
      <img 
        src="/number1.png" 
        alt="Gongura Thokku" 
        className="md:w-[120px] w-[90px]  object-contain"
      />

      {/* Details */}
      <div className="flex bg-white flex-col rounded-br-2xl rounded-tr-2xl justify-between p-1 md:p-3">
        <div>
          <h2 className="font-semibold text-lg">Gongura Thokku</h2>
          <div className="flex text-yellow-500 mt-1">
            {Array(5).fill().map((_, i) => (
              <FaStar key={i} className="text-sm" />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <button className="bg-black text-white px-3 py-1 text-sm rounded-lg">
            Add to cart
          </button>
          <span className="ml-3 text-lg font-medium">299/-</span>
        </div>
      </div>
    </div>


    </div>
      </div>


    </div>
  )
}

export default BestSellers
