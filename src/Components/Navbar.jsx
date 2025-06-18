import React, { useEffect, useState } from 'react';
import { FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate, Link } from 'react-router-dom';
import api from '../libs/apiCall';

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const fetchCategories = async () => {
    const URL = "/categories/fetch";
    try {
      const { data } = await api.get(URL);
      setCategories(data.data);
    } catch (error) {
      // Handle error if needed
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchCategories();
  }, []);

  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigation
  const handleNavigate = (to) => {
    setMenuOpen(false);
    navigate(to);
  };

  return (
    <nav className={`w-[100vw] fixed z-100 px-6 md:px-12 py-4 flex items-center font-light  text-xl justify-between transition-all duration-300 
      ${isScrolled ? 'bg-[#c8a2c8] shadow-md' : 'bg-transparent'}
    `}>
      {/* Logo */}
      <div className=' flex flex-row justify-between  md:w-fit w-[100vw]'>

   
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-12 w-12 object-contain rounded-full"
        />
      </div>

      {/* Hamburger for mobile/tablet */}
      <button
        className="md:hidden text-2xl text-black focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
   </div>




      {/* Nav Links for desktop */}
      <div className="hidden md:flex gap-8 text-xl font-light text-black relative">
        <Link to="/" className="hover:text-[#b3533b]">Home</Link>

        {/* Dropdown Menu */}
        <div
          className="relative group"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button onClick={()=>navigate('/shop')} className="hover:text-[#b3533b] flex items-center gap-1">
            Shop <MdKeyboardArrowDown />
          </button>
          <div className={`absolute top-full left-0 bg-[#c8a2c8bd] shadow-xl rounded-md py-2 w-56 z-100 text-black transition-all
            ${dropdownOpen ? 'block' : 'hidden'}`}>
            {categories.map((cat) => (
              <Link
                to={`/shop`}
                key={cat.id}
                className="block px-4 py-2 text-lg hover:bg-white hover:text-[#e8bbe8] whitespace-nowrap"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>

        <Link to="/contact" className="hover:text-[#b3533b]">Contact</Link>
      </div>

      {/* Right Icons */}
      <div className=" hidden md:flex items-center gap-6">
        <FaUser className="text-black text-lg cursor-pointer" />
        <Link to="/cart" className="relative cursor-pointer">
          <FaShoppingCart className="text-black text-lg" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </Link>
      </div>

      {/* Mobile/Tablet Menu */}
      <div
        className={`fixed md:hidden top-0 left-0 w-full h-full bg-[#c8a2c8e6] z-40 transition-all duration-300
        ${menuOpen ? 'block' : 'hidden'}`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-xl p-6 flex flex-col gap-6 text-black"
          onClick={e => e.stopPropagation()}
        >
          <button
            className="self-end text-2xl mb-4"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          <Link to="/" onClick={() => handleNavigate('/')} className="hover:text-[#b3533b]">Home</Link>
          <div>
            <button
              className="flex items-center gap-1 hover:text-[#b3533b] w-full"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Shop <MdKeyboardArrowDown />
            </button>
            {dropdownOpen && (
              <div className="pl-4 mt-2 flex flex-col gap-2">
                {categories.map((cat) => (
                  <Link
                    to={`/shop`}
                    key={cat.id}
                    onClick={() => handleNavigate('/shop')}
                    className="block py-1 text-lg hover:text-[#e8bbe8]"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/contact" onClick={() => handleNavigate('/contact')} className="hover:text-[#b3533b]">Contact</Link>
          <Link to="/cart" onClick={() => handleNavigate('/cart')} className="flex items-center gap-2 hover:text-[#b3533b]">
            <FaShoppingCart /> Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
