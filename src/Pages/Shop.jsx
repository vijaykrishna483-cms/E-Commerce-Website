import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCard from '../Components/ShoppingCard';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';


const products = [
  {
    id: '1',
    title: 'Mango Juice',
    price: 138,
    image: 'https://i.pinimg.com/736x/29/ab/9d/29ab9d63ca2dc983ca359f8e93d71965.jpg',
    weight: '250gms',
    sold: 15,
  },  {
    id: '2',
    title: 'Strawberry Juice',
    price: 138,
    image: 'https://i.pinimg.com/736x/fe/6f/ff/fe6fffe3c3ae4bf69904a71cfa184e9d.jpg',
    weight: '250gms',
    sold: 15,
  },  {
    id: '3',
    title: 'Berry Juice',
    price: 138,
    image: 'https://i.pinimg.com/736x/4d/d0/33/4dd0335cb31a34f5920edb747b0c66ca.jpg',
    weight: '250gms',
    sold: 15,
  },  {
    id: '4',
    title: 'Guava Juice',
    price: 138,
    image: 'https://i.pinimg.com/736x/cc/f2/a8/ccf2a8e3be7d3ebfa4084144faf0b394.jpg',
    weight: '250gms',
    sold: 15,
  },

];


const products2 = [
  {
    id: '1',
    title: 'Mango Juice',
    price: 138,
    image: 'https://i.pinimg.com/736x/29/ab/9d/29ab9d63ca2dc983ca359f8e93d71965.jpg',
    weight: '250gms',
    sold: 15,
  },  {
    id: '2',
    title: 'Strawberry Juice',
    price: 138,
    image: 'https://i.pinimg.com/736x/4d/d0/33/4dd0335cb31a34f5920edb747b0c66ca.jpg',
    weight: '250gms',
    sold: 15,
  },  {
    id: '3',
    title: 'Berry Juice',
    price: 138,
    image: 'https://i.pinimg.com/736x/29/ab/9d/29ab9d63ca2dc983ca359f8e93d71965.jpg',
    weight: '250gms',
    sold: 15,
  },  {
    id: '4',
    title: 'Guava Juice',
    price: 138,
    image: 'https://i.pinimg.com/736x/4d/d0/33/4dd0335cb31a34f5920edb747b0c66ca.jpg',
    weight: '250gms',
    sold: 15,
  },
  // Add more products if needed
];




const ShopSection = () => {
    const navigate = useNavigate();

  const handleAddToCart = (product) => {
    navigate(`/cart/${product.id}`, { state: product }); // send product info
  };
  return (
    <>
    <Navbar/>    <section className="bg-white py-[16vh] px-4 sm:px-8 md:px-12  lg:px-[8vw] text-center">
      {/* Breadcrumb */}
      <div className="py-4 text-sm text-gray-500 text-left">
        <Link to="/" className="hover:underline">Home</Link>
        <span className="mx-2">•</span>
        <span className="text-black font-medium">Shop</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-black mb-10">Explore Our Collection</h1>

      {/* Category 1 */}
      <div className="mb-16 text-left">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Category 1</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         
            {products.map((product) => (  


          <ShoppingCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>

      {/* Category 2 */}
      <div className="text-left">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 border-b pb-2">Category 2</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products2.map((product) => (  


          <ShoppingCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
        </div>
      </div>

        <div className="text-left mt-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Category 3</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product) => (  


          <ShoppingCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
        </div>
      </div>

        <div className="text-left mt-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Category 4</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products2.map((product) => (  


          <ShoppingCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
        </div>
      </div>


    </section>
<Footer/>
    </>
  );
};

export default ShopSection;
