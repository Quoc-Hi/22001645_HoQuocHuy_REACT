import React from 'react';

const editorPicks = [
  { title: 'Stuffed sticky rice ball', description: 'Stuffed sticky rice balls: A delightful Asian treat...', image: '../src/assets/3_Data/Lab_02_b/Italian-style tomato.png', author: 'Jennifer King', time: '34 minutes' },
  { title: 'Strawberry smoothie', description: 'Savor the refreshing delight of a strawberry smoothie...', image: '../src/assets/3_Data/Lab_02_b/Italian-style tomato.png', author: 'Matthew Martinez', time: '40 minutes' },
  { title: 'Latte Art', description: 'Latte art is the skillful craft of creating captivating designs...', image: '../src/assets/3_Data/Lab_02_b/Italian-style tomato.png', author: 'Sarah Hill', time: '19 minutes' },
  { title: 'Butter fried noodles', description: 'Butter fried noodles: Savory noodles cooked in butter...', image: '../src/assets/3_Data/Lab_02_b/Italian-style tomato.png', author: 'Julia Lopez', time: '16 minutes' },
];

const EditorCard = ({ title, description, image, author, time }) => (
  <div className="bg-white rounded-lg shadow p-4 flex gap-4">
    <img src={image} alt={title} className="w-28 h-28 object-cover rounded-md flex-shrink-0" />
    <div className="flex flex-col justify-between w-full">
      <div>
        <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
        <p className="text-xs text-gray-600 mt-1">{description}</p>
      </div>
      <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <span>
            <img src="../src/assets/3_Data/Lab_02_b/Avatar.png" alt="" className="w-4 h-4 rounded-full" />
          </span> {author}
          <span>• {time}</span>
        </div>
        <span className="text-pink-500 text-lg">
            <img src="../src/assets/3_Data/Lab_02_b/Icon Button 73.png" alt="" className="w-4 h-4" />
        </span>
      </div>
    </div>
  </div>
);

const EditorsPickSection = () => {
  return (
    <section className="px-6 py-12 bg-white">
      <h2 className="text-center text-pink-600 text-2xl font-bold mb-1">Editor's pick</h2>
      <p className="text-center text-sm text-gray-600 mb-8">
        Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {editorPicks.map((item, idx) => <EditorCard key={idx} {...item} />)}
      </div>
    </section>
  );
};

export default EditorsPickSection;
