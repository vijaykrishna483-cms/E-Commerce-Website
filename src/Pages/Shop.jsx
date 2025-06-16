import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories, productsByCategory } from '../data/categories';
import Card from '../Components/card/Card';
import Navbar from '../Components/Navbar';

 const ShopSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className='flex flex-col bg-[#fff0] '>
  
      <div  className=' bg-[#fff0]'>
 <Navbar/>
      </div>
    <div className="flex ">
      {/* Fixed Sidebar */}
    
     
      <aside className="w-64 fixed h-screen font-light text-white pt-[13vh]  bg-[#b96e8f] p-4">
        <h2 className="text-xl font-normal mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map(category => (
            <li key={category}>
              <button
                className={`w-full text-left p-2 rounded ${
                  selectedCategory === category 
                    ? 'bg-[#c8a2c8] text-white'
                    : 'hover:bg-[#c8a2c8]'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8 flex-1 bg-[#c8a2c8] pt-[13vh] min-h-screen">
        <h1 className="text-3xl font-light mb-6">{selectedCategory}</h1>
        
        <div className="grid grid-cols-1 font-light md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsByCategory[selectedCategory].map(product => (
            <Card
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.img}
              stars={product.stars}
            />
          ))}
        </div>
      </main>
    </div>
      </div>
  );
};


export default ShopSection

