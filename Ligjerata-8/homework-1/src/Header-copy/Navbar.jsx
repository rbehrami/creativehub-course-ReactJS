import React from 'react';
import logoIcon from '../assets/icon.svg';
import KategoritDropDown from '../Components/KategoritDropDown';
import { FcGoogle } from "react-icons/fc";

const Navbar = () => {
  return (
    
    <header className="sticky top-0 z-50 bg-white ">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 border-b border-gray-300">
        {/* Left side: Logo & Search */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-gray-800 hover:text-black">
            <img src={logoIcon} alt="Merrfal logo" className="w-6 h-6" />
            <span className="text-2xl font-semibold">Merrfal</span>
          </a>

          {/* Search bar */}
          <input
            type="text"
            placeholder="Kërko produktet"
            className="py-1 px-3 w-205 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Right side: Links / Buttons */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-black"><KategoritDropDown /></a>
          <button className="flex flex-row items-center gap-2 bg-gray-200 text-black px-4 py-1.5 rounded-xl text-sm hover:bg-blue-700">
            <FcGoogle />Kyçu me Google
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
