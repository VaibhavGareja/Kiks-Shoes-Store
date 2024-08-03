import React from 'react';
import CategoryCard from './CategoriesCard';
import Shoes from "/Categories/Shoes.png";
import Ball from "/Categories/Ball.png";
import Volly from "/Categories/Volly.png";

const Categories = () => {
  const categories = [
    {
      id: 'cat-1',
      title: 'Sneakers Collection',
      color: 'orange',
      image: Shoes,
      products: 120,
    },
    {
      id: 'cat-2',
      title: 'Football Collection',
      color: 'blue',
      image: Ball,
      products: 120,
    },
    {
      id: 'cat-3',
      title: 'Volleyball Collection',
      color: 'pink',
      image: Volly,
      products: 120,
    },
  ];

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8  md:py-20">
      <div className="cat-head mb-12">
        <h1 id="cat-header" className="text-center font-bold text-3xl md:text-4xl mb-4">
          Choose Categories
        </h1>
        <p id="cat-pera" className="text-center max-w-3xl mx-auto text-sm md:text-base">
          For explosive events (sprints up to 400 metres, long jump, triple jump) the reduction in atmospheric pressure means there is less resistance from the atmosphere.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
