import React from 'react';
import logo from '../assets/3_Data/Lab_01/Group 9.png';
import search from '../assets/3_Data/Lab_05/Search.png';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow">
      <div className="flex items-center gap-4">
        <div className="flex items-center text-pink-600 font-bold text-xl">
          <img src={logo} alt="" className="w-full" />

        </div>
        <img src={search} alt="" className="w-6 h-6 ml-2" />
        <input
          type="text"
          placeholder="What would you like to cook?"
          className="bg-gray-100 px-4 py-2 rounded-full w-64 focus:outline-none"
        />
      </div>
      <nav className="flex items-center gap-6 text-gray-700 text-sm font-medium">
        <a href="#">What to cook</a>
        <a href="#">Recipes</a>
        <a href="#">Ingredients</a>
        <a href="#">Occasions</a>
        <a href="#">About Us</a>
      </nav>
      <div className="flex items-center gap-3">
        <button className="px-4 py-1 rounded-full text-pink-600 border border-pink-500 hover:bg-pink-50 transition">Login</button>
        <button className="px-4 py-1 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition">Subscribe</button>
      </div>
    </header>
  );
};

export default Header;