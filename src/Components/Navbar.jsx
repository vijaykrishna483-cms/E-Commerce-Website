import React, { useEffect, useState } from 'react';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate, Link } from 'react-router-dom';

const categories = [
  "10 Minutes Mix", "Bathing Essentials", "Best Sellers", "Cold Pressed Oils",
  "Kitchen Utensils", "Malt", "Masala", "Noodles", "Pickles",
  "Pooja & Devotional", "Special Combo", "Vadagam and Vathal"
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // you can change 10 to any pixel threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed z-50 px-6 md:px-12 py-4 flex items-center font-light text-xl justify-between transition-all duration-300 
      ${isScrolled ? 'bg-[#c8a2c8] shadow-md' : 'bg-transparent'}
    `}>
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-12 w-12 object-contain rounded-full"
        />
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-8 text-xl font-light text-black relative">
        <Link to="/" className="hover:text-[#b3533b]">Home</Link>

        {/* Dropdown Menu */}
        <div className="relative group">
          <button onClick={() => navigate('/shop')} className="hover:text-[#b3533b] flex items-center gap-1">
            Shop <MdKeyboardArrowDown />
          </button>
          <div className="absolute hidden group-hover:block top-full left-0 bg-[#c8a2c8bd] shadow-xl rounded-md py-2 w-56 z-50 text-black">
            {categories.map((cat, idx) => (
              <Link
                to={`/shop/`}
                key={idx}
                className="block px-4 py-2 text-lg hover:bg-white hover:text-[#e8bbe8] whitespace-nowrap"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        <Link to="/contact" className="hover:text-[#b3533b]">Contact</Link>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        <FaUser className="text-black text-lg cursor-pointer" />
        <div className="relative cursor-pointer">
          <FaShoppingCart className="text-black text-lg" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
