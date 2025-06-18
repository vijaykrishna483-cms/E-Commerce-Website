import React, { useEffect, useState } from 'react';
import Card from './card/Card';
import api from '../libs/apiCall';


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







  

    const [categories, setCategories] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
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
          (product) => product.is_new === true
        );

        allPopularProducts.push(...popular);
      }

      setNewProducts(allPopularProducts);
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
    <div className="px-6 py-10">
  <h1 className="text-3xl sm:text-4xl pb-8 font-semibold text-center">
       New Product Launches
      </h1>
      <div className="grid md:grid-cols-4 gap-8 px-[5vw]">
       

      

       {newProducts.map((product)=>(
           <Card
            key={product.id}
        name={product.name}
        image={product.image_url}
        stars={product.stars}
        price={product.variants?.[0]?.price} 
           />
          ))}


      </div>
    </div>
  );
};

export default Newlaunch;
