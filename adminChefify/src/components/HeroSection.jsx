import React from 'react';
import img73 from '../assets/3_Data/Lab_01/Image 73.png'; 
import avt from '../assets/3_Data/Lab_05/Avatar.png';

const HeroSection = () => {
  return (
    <section className="relative h-[400px] flex items-center justify-center">
      {/* Background Image */}
      <img src={img73} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      {/* Overlay card */}
      <div className="bg-white/90 shadow-xl rounded-2xl p-6 w-[350px] text-center relative z-10">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs text-white px-3 py-1 rounded-full shadow">
          Recipe of the day
        </div>

        <h2 className="text-xl font-bold text-pink-600 mt-6">Salad Caprese</h2>
        <p className="text-gray-700 text-sm mt-2">
          Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs,
          olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
        </p>

        {/* Author */}
        <div className="flex items-center justify-center mt-4">
          <img
            src={avt}
            alt="Avatar"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm font-medium text-gray-800">Salad Caprese</span>
        </div>

        {/* Button */}
        <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition">
          View now →
        </button>
      </div>
    </section>
  );
};

export default HeroSection;