import React, { useState, useEffect } from 'react';
import api from '../libs/apiCall';
import { toast } from 'sonner';

const Admin = () => {
  // Category states
  const [categoryName, setCategoryName] = useState('');
  const [categoryDesc, setCategoryDesc] = useState('');
  const [categories, setCategories] = useState([]);
  
  // Product states
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [productDesc, setProductDesc] = useState('');
  const [productStock, setProductStock] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productStars, setProductStars] = useState(4);
  const [variants, setVariants] = useState([{ weight: '', price: '' }]);
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const { data } = await api.get('/categories/fetch');
      setCategories(data.data);
      console.log(data.data)
    } catch (error) {
      toast.error('Failed to load categories');
    }
  };

  // Fetch products when category changes
  const fetchProducts = async (categoryId) => {
    try {
      const { data } = await api.get(`/categories/${categoryId}/fetch`);
      setProducts(data.data);
    } catch (error) {
      toast.error('Failed to load products');
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle category selection change
  useEffect(() => {
    if (selectedCategory) {
      fetchProducts(selectedCategory);
    }
  }, [selectedCategory]);

  // Category form submission
  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.post('/categories/create', {
        name: categoryName,
        description: categoryDesc
      });
      toast.success(response.data.message);
      setCategoryName('');
      setCategoryDesc('');
      fetchCategories();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create category');
    } finally {
      setIsLoading(false);
    }
  };

  // Product form submission
  const handleProductSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await api.post(`/categories/${selectedCategory}/create`, {
        name: productName,
        description: productDesc,
        stock: productStock,
        image_url: productImage,
        stars: productStars,
        variants: variants.filter(v => v.weight && v.price)
      });
      
      toast.success('Product added successfully');
      setProductName('');
      setProductDesc('');
      setProductStock('');
      setProductImage('');
      setVariants([{ weight: '', price: '' }]);
      fetchProducts(selectedCategory);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create product');
    } finally {
      setIsLoading(false);
    }
  };

  // Variant management
  const addVariant = () => setVariants([...variants, { weight: '', price: '' }]);
  const removeVariant = (index) => setVariants(variants.filter((_, i) => i !== index));
  const updateVariant = (index, field, value) => {
    const newVariants = [...variants];
    newVariants[index][field] = value;
    setVariants(newVariants);
  };



  const deleteCategory = async (categoryId) => {
    if (!window.confirm('Are you sure you want to delete this category?')) return;
    
    try {
      const res = await api.delete(`/categories/${categoryId}`);
      toast.success(res.data.message);
      fetchCategories();
      setSelectedCategory(''); // Clear selected category if deleted
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to delete category');
    }
  };



   const deleteProduct = async (productId) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    
    try {
      const res = await api.delete(`/categories/product/${productId}`);
      toast.success(res.data.message);
      fetchProducts(selectedCategory);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to delete product');
    }
  };




  return (
    <div className="min-h-screen bg-[#c8a2c8] p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className='text-3xl font-bold underline text-[#ffff]'>ADMIN PANEL</h1>
        {/* Category Section */}
        <div className="bg-[#b96e8f] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Category Management</h2>
          <form onSubmit={handleCategorySubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="p-3 rounded-lg bg-[#c8a2c8] text-white placeholder-gray-300"
                required
              />
              <input
                type="text"
                placeholder="Description"
                value={categoryDesc}
                onChange={(e) => setCategoryDesc(e.target.value)}
                className="p-3 rounded-lg bg-[#c8a2c8] text-white placeholder-gray-300"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`px-6 py-2 rounded-lg text-white font-semibold ${
                isLoading ? 'bg-gray-400' : 'bg-[#c8a2c8] hover:bg-[#a882a8]'
              }`}
            >
              {isLoading ? 'Creating...' : 'Create Category'}
            </button>
          </form>
        </div>

  <div className="mt-6">
            <h3 className="text-white text-lg mb-3">Existing Categories</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <div key={category.id} className="flex justify-between items-center bg-[#b96e8f] p-3 rounded">
                  <div>
                    <p className="text-white font-medium">{category.name}</p>
                    <p className="text-gray-200 text-sm">{category.description}</p>
                  </div>
                  <button
                    onClick={() => deleteCategory(category.id)}
                    className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
   



        {/* Product Section */}
        <div className="bg-[#b96e8f] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Product Management</h2>
          
          <div className="mb-6">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#c8a2c8] text-white"
            >
              <option value="">Select Category</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {selectedCategory && (
            <>
              <form onSubmit={handleProductSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="p-3 rounded-lg bg-[#c8a2c8] text-white placeholder-gray-300"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Image URL"
                    value={productImage}
                    onChange={(e) => setProductImage(e.target.value)}
                    className="p-3 rounded-lg bg-[#c8a2c8] text-white placeholder-gray-300"
                  />
                  <input
                    type="number"
                    placeholder="Stock Quantity"
                    value={productStock}
                    onChange={(e) => setProductStock(e.target.value)}
                    className="p-3 rounded-lg bg-[#c8a2c8] text-white placeholder-gray-300"
                  />
                  <textarea
                    placeholder="Product Description"
                    value={productDesc}
                    onChange={(e) => setProductDesc(e.target.value)}
                    className="p-3 rounded-lg bg-[#c8a2c8] text-white placeholder-gray-300"
                    rows="3"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-semibold">Variants</h3>
                  {variants.map((variant, index) => (
                    <div key={index} className="flex gap-4 items-center">
                      <input
                        type="text"
                        placeholder="Weight (g)"
                        value={variant.weight}
                        onChange={(e) => updateVariant(index, 'weight', e.target.value)}
                        className="p-2 rounded-lg bg-[#c8a2c8] text-white placeholder-gray-300 flex-1"
                      />
                      <input
                        type="number"
                        placeholder="Price"
                        value={variant.price}
                        onChange={(e) => updateVariant(index, 'price', e.target.value)}
                        className="p-2 rounded-lg bg-[#c8a2c8] text-white placeholder-gray-300 flex-1"
                      />
                      {variants.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeVariant(index)}
                          className="text-red-400 hover:text-red-300"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addVariant}
                    className="text-white hover:text-[#c8a2c8]"
                  >
                    + Add Variant
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-6 py-2 rounded-lg text-white font-semibold ${
                    isLoading ? 'bg-gray-400' : 'bg-[#c8a2c8] hover:bg-[#a882a8]'
                  }`}
                >
                  {isLoading ? 'Creating...' : 'Create Product'}
                </button>
              </form>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Products in Category</h3>
                <div className="space-y-4">
                  {products.map(product => (
                    <div key={product.id} className="bg-[#c8a2c8] p-4 rounded-lg">
                      <div className="flex items-center gap-4">
                       
                        <img 
                          src={product.image_url} 
                          alt={product.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="text-white font-semibold">{product.name}</h4>
                          <p className="text-gray-200">{product.description}</p>
                             
                             


                          <div className="mt-2 space-y-1">
                            {product.variants.map(variant => (
                              <div key={variant.id} className="text-sm text-gray-200">
                                {variant.weight}g - ₹{variant.price}
                              </div>
                            ))}
                          </div>
                        </div>

                         <button
                    onClick={() => deleteProduct(product.id)}
                    className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white"
                  >
                    Delete
                  </button>



                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
