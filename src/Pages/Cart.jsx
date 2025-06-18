import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import api, { setAuthToken } from '../libs/apiCall';
import { toast } from 'sonner';
import { RxCross1 } from "react-icons/rx";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [address, setAddress] = useState({
    fullName: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    phone: ''
  });

  const fetchCart = async () => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      toast.error('Please log in first.');
      return;
    }

    setAuthToken(token);

    try {
      const { data } = await api.get('/cart/fetch');
      setCart(data.data || []);
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message ||
        'Something unexpected happened. Try again later.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const subtotal = cart.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );
  const delivery = 30;
  const total = subtotal + delivery;

  const handleQuantityChange = async (cartItemId, newQuantity) => {
    try {
      if (newQuantity < 0) return;
      
      const token = localStorage.getItem('auth_token');
      if (!token) {
        toast.error('Please log in first.');
        return;
      }

      const res = await api.put(`/cart/${cartItemId}`, { quantity: newQuantity });
      toast.success(res.data.message || 'Cart updated');
      fetchCart();
    } catch (error) {
      console.error('Quantity update error:', error);
      toast.error(error?.response?.data?.message || 'Failed to update cart');
    }
  };

  const deleteItem = async (cartItemId) => {
    try {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        toast.error('Please log in first.');
        return;
      }

      await api.delete(`/cart/delete/${cartItemId}`);
      toast.success('Item removed from cart');
      fetchCart();
    } catch (error) {
      console.error('Delete error:', error);
      toast.error(error?.response?.data?.message || 'Failed to remove item');
    }
  };

  const handlePayment = async () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    // Validate address fields
    if (!Object.values(address).every(field => field.trim())) {
      toast.error('Please fill all address fields');
      return;
    }

    try {
      setIsProcessing(true);
      
      // Create Razorpay order
      const orderRes = await api.post('/createRazorpayOrder', {
        amount: total
      });

      // Load Razorpay script
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        const options = {
          key: process.env.RAZORPAY_KEY_ID,
          amount: orderRes.data.order.amount,
          currency: 'INR',
          name: 'Your Store Name',
          order_id: orderRes.data.order.id,
          handler: async function(response) {
            try {
              // Confirm order after successful payment
              const confirmRes = await api.post('/confirmOrder', {
                address: JSON.stringify(address),
                payment_id: response.razorpay_payment_id,
                order_id: response.razorpay_order_id,
                total_amount: total,
                items: cart.map(item => ({
                  product_id: item.product_id,
                  product_variant_id: item.product_variant_id,
                  quantity: item.quantity,
                  price: item.price
                }))
              });

              toast.success('Order placed successfully!');
              window.location.href = `/orders/${confirmRes.data.order_id}`;
            } catch (err) {
              console.error('Confirmation error:', err);
              toast.error('Order confirmation failed');
            }
          },
          prefill: {
            name: address.fullName,
            contact: address.phone,
            email: 'customer@example.com'
          },
          theme: {
            color: '#b96e8f'
          }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      };
    } catch (err) {
      console.error('Payment error:', err);
      toast.error('Payment initialization failed');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center bg-[#c8a2c8] p-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Address Form */}
          <div className="bg-[#b96e8f] p-6 rounded-2xl shadow-md text-[#fff]">
            <h2 className="text-2xl font-semibold mb-4 text-[#ffff]">Delivery Address</h2>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                value={address.fullName}
                onChange={(e) => setAddress(prev => ({...prev, fullName: e.target.value}))}
                className="w-full border p-3 rounded-lg"
              />
              <input 
                type="text" 
                placeholder="Street Address" 
                value={address.street}
                onChange={(e) => setAddress(prev => ({...prev, street: e.target.value}))}
                className="w-full border p-3 rounded-lg"
              />
              <input 
                type="text" 
                placeholder="City" 
                value={address.city}
                onChange={(e) => setAddress(prev => ({...prev, city: e.target.value}))}
                className="w-full border p-3 rounded-lg"
              />
              <div className="flex gap-4">
                <input 
                  type="text" 
                  placeholder="State" 
                  value={address.state}
                  onChange={(e) => setAddress(prev => ({...prev, state: e.target.value}))}
                  className="w-1/2 border p-3 rounded-lg"
                />
                <input 
                  type="text" 
                  placeholder="Pincode" 
                  value={address.pincode}
                  onChange={(e) => setAddress(prev => ({...prev, pincode: e.target.value}))}
                  className="w-1/2 border p-3 rounded-lg"
                />
              </div>
              <input 
                type="text" 
                placeholder="Phone Number" 
                value={address.phone}
                onChange={(e) => setAddress(prev => ({...prev, phone: e.target.value}))}
                className="w-full border p-3 rounded-lg"
              />
            </form>
          </div>

          {/* Right: Cart Items & Checkout */}
          <div className="bg-[#b96e8f] p-6 rounded-2xl shadow-md text-[#fff]">
            <h2 className="text-2xl font-semibold mb-4 text-[#c8a2c8]">Your Cart</h2>

            <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
              {cart.length === 0 && !isLoading && (
                <p className="text-gray-500">Your cart is empty.</p>
              )}

              {cart.map((item) => (
                <div key={item.cart_item_id} className="flex items-center gap-4 rounded-xl border p-4 pb-4">
                  <img
                    src={item.image_url}
                    alt={item.product_name}
                    className="w-20 h-20 object-cover rounded-xl shadow-xl"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.product_name}</h3>
                    <p className="text-sm text-[#ffffffcd]">{item.weight}g</p>
                    <div className="flex items-center mt-2 gap-3">
                      <button  
                        onClick={() => handleQuantityChange(item.cart_item_id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="px-2 flex justify-center items-center bg-[#000] rounded-full text-xl font-semibold"
                      >
                        -
                      </button>
                      <span className="font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(item.cart_item_id, item.quantity + 1)}
                        className="px-2 flex justify-center items-center bg-[#000] rounded-full text-xl font-semibold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-center flex flex-col gap-4 justify-between items-center cursor-pointer">
                    <RxCross1 
                      onClick={() => deleteItem(item.cart_item_id)} 
                      className='text-xl text-[#000] hover:text-red-500 transition-colors'
                    />
                    <p className="font-semibold text-lg">₹{parseFloat(item.price).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout Section */}
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Delivery</span>
                <span>₹{delivery.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <button 
                onClick={handlePayment}
                disabled={isProcessing || cart.length === 0}
                className={`mt-6 w-full bg-[#000] text-[#c8a2c8] py-3 rounded-xl transition
                  ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}`}
              >
                {isProcessing ? 'Processing...' : 'Proceed to Payment'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
