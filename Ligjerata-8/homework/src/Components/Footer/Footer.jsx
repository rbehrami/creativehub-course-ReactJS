// src/Components/Footer/Footer.jsx
import React from 'react';
import { FiInstagram} from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";



const Footer = ({ menus }) => {
  return (
    <footer className="bg-[#FFF6F3] text-[#0F1656] text-sm border-t border-[#0F1656]">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Dynamic Menu Columns */}
        {menus.map((menu, index) => (
          <div key={index}>
            <h3 className="font-bold mb-3">{menu.title}</h3>
            <ul className="space-y-2">
              {menu.links.map((link, i) => (
                <li key={i}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter Section */}
        <div>
          <h3 className="font-bold mb-3">Join The Pink Moon Galaxy</h3>
          <p className="text-sm mb-3">
            Weekly Pink Moon Notes For Self-Nourishment Tips, Product Updates, And Galaxy Insider-Only Offers.
          </p>
          <form className="flex mb-4">
            <input type="email" placeholder="Your email" className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none"/>
            <button type="submit" className="bg-[#4F5BA6] text-white px-4 py-2 ms-2 rounded-sm">
              SUBSCRIBE
            </button>
          </form>

          <p className="font-bold mb-2">Let’s Connect</p>
          <div className="flex space-x-4 text-xl">
            <a href="#"><FiInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTiktok /></a>
            <a href="#"><FaSpotify /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#0F1656] text-center py-4 text-xs px-4 md:flex md:justify-between md:items-center">
        <p className="mb-2 md:mb-0">© 2025 Pink Moon. All rights reserved</p>
        <div className="space-x-4">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
