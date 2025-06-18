import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import { setAuthToken } from '../libs/apiCall';
import api from '../libs/apiCall';



const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
const [formData, setFormData] = useState({
  email: "",
  password: "",
  name: ""
});
function handleChange(event) {
  const { name, value } = event.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
}
      const navigate=useNavigate()


 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.email || !formData.password || (!isLogin && !formData.name)) {
    alert('Please fill all required fields.');
    return;
  }

  try {
    if (isLogin) {
      const { data: res } = await api.post(`auth/login`, {
        email: formData.email,
        password: formData.password
      });
        if (res?.status === "success" && res?.data) {
        toast.success(res?.message || "Login successful.");
  
        // Ensure you're storing the token correctly
        const userInfo = { ...res?.data, token: res.data.token };
        localStorage.setItem("user", JSON.stringify(userInfo));  // Save the user data along with token
        localStorage.setItem("auth_token", res.data.token);  // Explicitly store token
  
        // Set the token in the Axios header for future requests
        setAuthToken(res.token);

      } else {
        toast.error(res?.message || "Login failed.");
      }


      // Handle login success
      alert("Succesfully logged in")
      navigate('/');
    } else {
      const res = await api.post(`auth/register`, {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      // Handle signup success
        alert("Succesfully sign up")
        setIsLogin(true);
    }
  } catch (error) {
    alert('Error: ' + (error.response?.data?.message || error.message));
  }
};


  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? 'Login' : 'Signup'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-black transition"
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-black underline"
          >
            {isLogin ? 'Signup' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
