import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { productsByCategory } from "../data/categories";
import Card from "../Components/card/Card";
import Navbar from "../Components/Navbar";
import api, { setAuthToken } from '../libs/apiCall';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { toast } from "sonner";
const ShopSection = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

const [open,setOpen]=useState(false)

  const fetchCategories = async () => {
    const URL = "/categories/fetch";
    try {
      const { data } = await api.get(URL);
      // console.log("Dashboard data:", data);
      setCategories(data.data);
      console.log(data);
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message ||
          "Something unexpected happened. Try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchCategories();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const getbyCategory = async (category_id) => {
    try {
          setOpen(false)
 const catObj = categories.find(cat => cat.id === category_id);
    setSelectedCategory(catObj);
          const { data } = await api.get(`/categories/${category_id}/fetch`);
      setProducts(data.data);
      console.log(data);
    } catch (error) {}
  };





  // utils/api.js

const addToCart = async (product) => {
  const token = localStorage.getItem('auth_token'); // ✅
  if (!token) {
    alert('Please log in first.');
    return;
  }

  setAuthToken(token); // ✅ ACTUALLY SET THE TOKEN in Axios headers

  try {
    const res = await api.post('/cart/add', {
      product_id: product.id,
      product_variant_id: product.variants[0].id,
      quantity: 1,
    });

    alert('Added to cart');
    console.log('Add to cart response:', res.data);
  } catch (error) {
    console.error('Error adding to cart:', error);
    toast.error(
      error?.response?.data?.message || 'Could not add to cart'
    );
  }
};
const navigate=useNavigate()

const goToProduct = (product) => {
  navigate(`/product/${product.id}`);
}

const sidebarClick=()=>{

  setOpen(true)
}
const onClose=()=>{
    setOpen(false)
}

  return (
    <div className="flex flex-col bg-[#fff0] ">
      <div className=" bg-[#c8a2c8]">
        <Navbar />
      </div>
      <div className="flex ">
        {/* Fixed Sidebar */}

        <aside
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE and Edge
          }}
          className="w-64 scrollbar-none fixed hidden md:block overflow-y-auto h-screen font-light text-white pt-[13vh]  bg-[#b96e8f] p-4"
        >
          <h2 className="text-xl font-normal mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  className={`w-full text-left p-2 rounded ${
                    selectedCategory === category
                      ? "bg-[#c8a2c8] text-white"
                      : "hover:bg-[#c8a2c8]"
                  }`}
                  onClick={() => getbyCategory(category.id)}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>


  <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
        style={{ background: open ? "rgba(0,0,0,0.4)" : "transparent" }}
        onClick={onClose} 
      >
        <aside
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className={`w-64 h-full bg-[#b96e8f] p-4 font-light text-white fixed left-0 top-0 pt-[13vh] shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={e => e.stopPropagation()} // prevent closing when clicking inside sidebar
        >
          {/* <button
            className="mb-4 text-white text-2xl font-bold"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            &times;
          </button> */}
          <h2 className="text-xl font-normal mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  className={`w-full text-left p-2 rounded ${
                    selectedCategory === category
                      ? "bg-[#c8a2c8] text-white"
                      : "hover:bg-[#c8a2c8]"
                  }`}
                  onClick={() => getbyCategory(category.id)}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>


        {/* Main Content */}
        <main className="md:ml-64 p-8 flex-1 bg-[#c8a2c8] pt-[13vh] min-h-screen">
          {open?
        <> </> : 
        
        
        <>
        <MdKeyboardDoubleArrowRight onClick={sidebarClick} className="fixed md:hidden left-0 top-[20vh] text-3xl bg-[#ffffff77] rounded-br-full rounded-tr-full "/>

        </>}
          



<h1 className="text-3xl font-light mb-6">
  {selectedCategory ? selectedCategory.name : ''}
</h1>
          <div className="grid grid-cols-1 font-light md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          
            {products.map((product) => (
              <Card
onClick={() => goToProduct(product)}
               onAddtoCart={()=>addToCart(product)}
                key={product.id}
                name={product.name}
                price={
                  product.variants && product.variants[0]
                    ? product.variants[0].price
                    : "N/A"
                }
                image={product.image_url}
                stars={product.stars}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ShopSection;
