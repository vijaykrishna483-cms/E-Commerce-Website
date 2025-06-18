import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Card from './card/Card';
import api from '../libs/apiCall';

const PopularPicks = () => {
  const products = [
    { img: '/demo.png', name: 'Item', price: '299/-', stars: 4 },
    { img: '/demo.png', name: 'Item', price: '299/-', stars: 4 },
    { img: '/demo.png', name: 'Item', price: '299/-', stars: 4 },

  ];


    const [categories, setCategories] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      const res = await api.get('/categories/fetch');
      setCategories(res.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchPopularProducts = async () => {
    try {
      const allPopularProducts = [];

      for (const category of categories) {
        const res = await api.get(`/categories/${category.id}/fetch`);
        const categoryProducts = res.data.data;

        const popular = categoryProducts.filter(
          (product) => product.is_popular === true
        );

        allPopularProducts.push(...popular);
      }

      setPopularProducts(allPopularProducts);
    } catch (error) {
      console.error("Error fetching popular products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await fetchCategories();
    };
    loadData();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      fetchPopularProducts();
    }
  }, [categories]);



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
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
         {popularProducts.map((product)=>(
           <Card
            key={product.id}
        name={product.name}
        image={product.image_url}
        stars={product.stars}
        price={product.variants?.[0]?.price} 
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
