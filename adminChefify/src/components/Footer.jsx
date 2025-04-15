import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-2">About Us</h4>
          <p className="mb-4">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div className="flex">
            <input type="email" placeholder="Enter your email" className="px-3 py-1 rounded-l bg-white text-black w-full text-sm" />
            <button className="px-4 py-1 bg-pink-500 hover:bg-pink-600 rounded-r text-white text-sm">Send</button>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Learn More</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Our Cooks</a></li>
            <li><a href="#" className="hover:underline">See Our Features</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Shop</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Gift Subscription</a></li>
            <li><a href="#" className="hover:underline">Send Us Feedback</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Recipes</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">What to Cook This Week</a></li>
            <li><a href="#" className="hover:underline">Pasta</a></li>
            <li><a href="#" className="hover:underline">Dinner</a></li>
            <li><a href="#" className="hover:underline">Healthy</a></li>
            <li><a href="#" className="hover:underline">Vegetarian</a></li>
            <li><a href="#" className="hover:underline">Vegan</a></li>
            <li><a href="#" className="hover:underline">Christmas</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <span className="text-white font-semibold text-lg">
            <img src="../src/assets/3_Data/Lab_01/Group 9.png" alt="" className="w-full" /> 
          </span>
          <span>© 2025 Chefify Company</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
