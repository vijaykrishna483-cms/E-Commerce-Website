import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Us Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">CONTACT US</h2>
          <img src="/logo.png" alt="Logo" className="w-16 h-16 mb-4 rounded-full" />
          <p className="text-sm">GST: 33CDNPR9122E1ZF</p>
          <p className="text-sm mb-4">FSSAI: 22422072000319</p>
          <p className="text-sm">#6 kakkanji street, Tharapakkam, TAMIL NADU 600128</p>
          <p className="text-sm mt-2 text-blue-400">+91-7395951666 | +91-8056217504</p>
          <p className="text-sm text-blue-400">ammasamayalfoods09@gmail.com</p>
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fas fa-phone-alt"></i></a>
            <a href="#"><i className="fas fa-envelope"></i></a>
          </div>
        </div>

        {/* General Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">General</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">My Cart</a></li>
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Shop Categories */}
        <div>
          <h2 className="text-lg font-bold mb-4">Shop Categories</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-400">Masala</a></li>
            <li><a href="#" className="hover:text-gray-400">Malt</a></li>
            <li><a href="#" className="hover:text-gray-400">Pickle</a></li>
            <li><a href="#" className="hover:text-gray-400">Pooja & Devotional</a></li>
            <li><a href="#" className="hover:text-gray-400">10 Minute Mix</a></li>
            <li><a href="#" className="hover:text-gray-400">Vadagam and vathal</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
