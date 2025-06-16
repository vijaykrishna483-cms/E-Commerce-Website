import React from 'react';
import Card from './card/Card';


const Newlaunch = () => {
 const products = [
    { img: '/demo.png', name: 'Item', price: '299/-', stars: 4 },
    { img: '/demo.png', name: 'Item', price: '299/-', stars: 4 },
    { img: '/demo.png', name: 'Item', price: '299/-', stars: 4 },
    { img: '/demo.png', name: 'Item', price: '299/-', stars: 4 },
    { img: '/demo.png', name: 'Item', price: '299/-', stars: 4 },
    { img: '/demo.png', name: 'Item', price: '299/-', stars: 4 },
        { img: '/demo.png', name: 'Item', price: '299/-', stars: 4 },
    { img: '/demo.png', name: 'Item', price: '299/-', stars: 4 },
  ];
  return (
    <div className="px-6 py-10">
  <h1 className="text-3xl sm:text-4xl pb-8 font-semibold text-center">
       New Product Launches
      </h1>
      <div className="grid md:grid-cols-4 gap-8 px-[5vw]">
       
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
    </div>
  );
};

export default Newlaunch;
