import React, { use, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [count, setCount] = useState(1);
  const products = [
    { id: '1', title: 'Mango Juice', price: 138, image: '/ghee.png', weight: '250gms', sold: 15 },
    { id: '2', title: 'Strawberry Juice', price: 138, image: '/burger.png', weight: '250gms', sold: 15 },
      { id: '3', title: 'Pineapple Juice', price: 138, image: '/flour.png', weight: '250gms', sold: 15 },

  ];
const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentProduct = products[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.5 }
    })
  };

  return (
    <div className='flex flex-col-reverse lg:flex-row justify-between items-center min-h-screen pt-[4vh] px-[6vw] gap-10'>
      {/* Text Content */}
      <div className='lg:w-1/2 w-full flex flex-col justify-center items-start gap-5'>
        <h1 style={{ fontFamily: "Poppins, serif" }} className='text-3xl md:text-4xl lg:text-5xl font-bold'>
         Satisfy Your Hunger<br /> Spoil Your Senses
        </h1>
        <p className='text-base md:text-lg lg:text-xl font-light max-w-[90%]'>
 Welcome to [Store Name], your one-stop shop for fresh, high-quality food products. From organic fruits and vegetables to pantry essentials, snacks, and gourmet treats, we offer a wide selection to satisfy every taste and lifestyle.

Committed to quality and customer satisfaction, we carefully source products from trusted suppliers to bring you the best at affordable prices. 
        </p>
        <div className='flex flex-col sm:flex-row gap-4 sm:items-center'>
          <button onClick={()=>navigate('/shop')} className='bg-black w-full sm:w-[190px]  md:text-xl py-3 rounded-full flex justify-center items-center text-white'>
            <span className='text-black mr-3 text-xl md:text-3xl bg-yellow-400 p-2 rounded-full'>
              <FaShoppingCart className='md:text-3xl' />
            </span>
            Add to Cart
          </button>
          <div className="flex items-center gap-4">
            <button onClick={decrement} className="bg-white px-4 py-2 text-2xl rounded-full shadow hover:bg-gray-200">−</button>
            <span className="text-2xl font-semibold w-8 text-center">{count}</span>
            <button onClick={increment} className="bg-white px-4 py-2 text-2xl rounded-full shadow hover:bg-gray-200">+</button>
          </div>
        </div>
      </div>

      {/* Image & Arrows */}
      <div className='relative lg:w-1/2 w-full flex flex-col mt-[10vh] md:mt-[] items-center'>
        <div className="flex items-center justify-center relative w-full">
          <MdArrowBackIosNew
            onClick={handlePrev}
            className='absolute left-0 z-10 text-3xl md:text-5xl hover:bg-amber-300 shadow-2xl rounded-lg p-2 cursor-pointer'
          />
          <div className="relative w-full h-full flex justify-center items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={currentProduct.id}
                src={currentProduct.image}
                alt='Product'
                className='w-full max-w-[500px] object-contain'
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
              />
            </AnimatePresence>
          </div>
          <MdArrowForwardIos
            onClick={handleNext}
            className='absolute right-0 z-10 text-3xl md:text-5xl hover:bg-amber-300 shadow-2xl rounded-lg p-2 cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
