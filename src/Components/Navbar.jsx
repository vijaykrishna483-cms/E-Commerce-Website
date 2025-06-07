import React, { useState } from 'react';
import { FaShoppingCart, FaSearch, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{ fontFamily: 'Urbanist, sans-serif' }}
      className="w-full fixed top-0 left-0 bg-[#c8a2c8] shadow-md z-[100]"
    >
      <div className="max-w-[90vw] mx-auto flex items-center justify-between py-4 relative">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 object-contain" />
        </div>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 text-black font-normal">
          <li
            onClick={() => handleNavigate('/')}
            className="cursor-pointer hover:text-white text-base"
          >
            Home
          </li>
          <li
            onClick={() => handleNavigate('/shop')}
            className="cursor-pointer hover:text-white text-base flex items-center gap-1"
          >
            Shop
          </li>
          <li
            onClick={() => handleNavigate('/contact')}
            className="cursor-pointer hover:text-white text-base"
          >
            Contact
          </li>
        </ul>

        {/* Desktop Search & Icons */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm text-gray-500 w-[240px]">
            <FaSearch className="text-black" />
            <input
              type="text"
              placeholder="I'm looking for..."
              className="outline-none w-full bg-transparent"
            />
          </div>

          <FaUser className="text-black text-xl cursor-pointer" />

          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-black text-xl" />
            <span className="absolute -top-2 -right-2 text-[10px] bg-red-600 text-white w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className="md:hidden text-black text-2xl cursor-pointer z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#c8a2c8] shadow-lg absolute top-full left-0 w-full z-40 border-t border-gray-300">
          <ul className="flex flex-col items-center gap-6 py-6 text-black font-normal">
            <li
              onClick={() => handleNavigate('/')}
              className="cursor-pointer hover:text-white text-lg"
            >
              Home
            </li>
            <li
              onClick={() => handleNavigate('/shop')}
              className="cursor-pointer hover:text-white text-lg flex items-center gap-1"
            >
              Shop
            </li>
            <li
              onClick={() => handleNavigate('/contact')}
              className="cursor-pointer hover:text-white text-lg"
            >
              Contact
            </li>
          </ul>

          <div className="flex flex-col items-center gap-4 px-6 pb-6">
            <div className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm text-gray-500 w-full">
              <FaSearch className="text-black" />
              <input
                type="text"
                placeholder="I'm looking for..."
                className="outline-none w-full bg-transparent"
              />
            </div>

            <div className="flex items-center gap-8 text-black">
              <FaUser className="text-xl cursor-pointer" />
              <div className="relative cursor-pointer">
                <FaShoppingCart className="text-xl" />
                <span className="absolute -top-2 -right-2 text-[10px] bg-red-600 text-white w-4 h-4 flex items-center justify-center rounded-full">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
