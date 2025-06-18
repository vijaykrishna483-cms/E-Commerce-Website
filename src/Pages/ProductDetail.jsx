import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useParams } from 'react-router-dom';
import api, { setAuthToken } from '../libs/apiCall';

const ProductDetail = () => {
 const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const addToCart = async () => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      alert('Please log in first.');
      return;
    }
    
    if (!selectedVariant) {
      alert('Please select a variant first.');
      return;
    }

    setAuthToken(token);

    try {
      const res = await api.post('/cart/add', {
        product_id: product.id,
        product_variant_id: selectedVariant.id,
        quantity: quantity, // Use current quantity state
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

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/categories/product/${id}`);
        const productData = res.data.data;
        setProduct(productData);
        if (productData.variants?.length > 0) {
          setSelectedVariant(productData.variants[0]);
        }
      } catch (err) {
        console.error('Error fetching product:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  if (isLoading) return <div className="p-6 text-center">Loading...</div>;
  if (!product) return <div className="p-6 text-center">Product not found.</div>;
  return (
    <div className='bg-[#c8a2c8]'>
      <Navbar />
      <div className="max-w-6xl pt-[18vh] mx-auto px-4 bg-[#c8a2c8] py-8 flex flex-col lg:flex-row gap-8">
        {/* Left Side - Product Images */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnail images */}
            <div className="flex flex-row md:flex-col gap-2">
              <img src={product.image_url} alt="thumb1" className="w-12 h-12 object-cover rounded" />
              <img src={product.image_url} alt="thumb2" className="w-12 h-12 object-cover rounded" />
              <img src={product.image_url} alt="thumb3" className="w-12 h-12 object-cover rounded" />
            </div>
            {/* Main Image */}
            <img
              src={product.image_url}
              alt={product.name}
              className="h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-red-600 text-sm font-semibold">🔥 15 sold in last 15 hours</p>
          
          {/* Variant Selection */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Available Variants:</h3>
            <div className="flex flex-wrap gap-2">
              {product.variants?.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedVariant?.id === variant.id
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-800 border-gray-300'
                  }`}
                >
                  {variant.weight}g - ₹{variant.price}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Variant Details */}
          {selectedVariant && (
            <>
              <p className="text-xl font-semibold text-gray-800">
                Price: ₹{selectedVariant.price}
              </p>
              <div className="mt-2">
                <p className="text-gray-700 font-medium">
                  Weight: <span className="font-bold">{selectedVariant.weight}g</span>
                </p>
                <button className="mt-1 px-3 py-1 border border-black rounded bg-black text-white">
                  {selectedVariant.weight}g
                </button>
              </div>
            </>
          )}

          <p className="text-gray-600 text-sm">👁️ 12 peoples are viewing this right now</p>
          
          <div className="flex items-center gap-3 mt-4">
            <button onClick={decrement} className="px-3 py-1 border border-gray-400 rounded">-</button>
            <span>{quantity}</span>
            <button onClick={increment} className="px-3 py-1 border border-gray-400 rounded">+</button>
          </div>
          
          <button   onClick={addToCart}  className="mt-4 w-full bg-black text-white py-3 rounded-xl text-lg font-semibold">
            Add to Cart
          </button>
          
          {/* Delivery info */}
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <p>🚚 Estimate delivery time: <span className="font-semibold">2-7 days</span></p>
            <p>🎁 First-time users get <span className="font-bold">Rs.50</span> off on all orders above <span className="font-bold">Rs.699</span>!</p>
            <p>📦 Free shipping: <span className="font-bold">On all orders over Rs.999</span>.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
