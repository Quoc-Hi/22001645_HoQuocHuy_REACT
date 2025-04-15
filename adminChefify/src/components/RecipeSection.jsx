import React from 'react';

const recipes = [
  { title: 'Italian-style tomato', time: '12 minutes', image: '../src/assets/3_Data/Lab_02_b/Italian-style tomato.png' },
  { title: 'Spaghetti with vegetables and shrimp', time: '15 minutes', image: '../src/assets/3_Data/Lab_02_b/Vegetable and shrimp spaghetti.png' },
  { title: 'Lotus delight salad', time: '20 minutes', image: '../src/assets/3_Data/Lab_02_b/Lotus delight salad.png' },
  { title: 'Snack cakes', time: '25 minutes', image: '../src/assets/3_Data/Lab_02_b/Snack cakes.png' },
];

const videoRecipes = [
  { title: 'Salad with cabbage and shrimp', time: '12 minutes', image: '../src/assets/3_Data/Lab_02_b/Salad with cabbage.png' },
  { title: 'Salad of cove beans, shrimp and potatoes', time: '20 minutes', image: '../src/assets/3_Data/Lab_02_b/Bean, shrimp, and potato salad.png' },
  { title: 'Sunny-side up fried egg', time: '15 minutes', image: '../src/assets/3_Data/Lab_02_b/Sunny-side up fried eggs.png' },
  { title: 'Lotus delight salad', time: '20 minutes', image: '../src/assets/3_Data/Lab_02_b/Lotus delight salad_01.png' },
];

const RecipeCard = ({ title, time, image }) => (
  <div className="bg-white rounded-lg shadow p-3 text-left">
    <img src={image} alt={title} className="w-full h-32 object-cover rounded-md" />
    <div className="mt-3">
      <h4 className="font-semibold text-sm text-gray-800">{title}</h4>
      <div className="flex justify-between items-center text-xs text-gray-500 mt-1">
        <span>{time}</span>
        <span className="text-pink-500 font-bold text-lg">
            <img src="../src/assets/3_Data/Lab_02_b/Icon Button 73.png" alt="" className="w-4 h-4" />   
        </span>
      </div>
    </div>
  </div>
);

const RecipeSection = () => {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="mb-10">
        <h2 className="text-center text-pink-600 text-2xl font-bold">This Summer Recipes</h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          We have all your Independence Day sweets covered.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recipes.map((recipe, idx) => <RecipeCard key={idx} {...recipe} />)}
        </div>
      </div>
      <div>
        <h2 className="text-center text-pink-600 text-2xl font-bold">Recipes With Videos</h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Cooking Up Culinary Creations with Step-by-Step Videos
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {videoRecipes.map((recipe, idx) => <RecipeCard key={idx} {...recipe} />)}
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;