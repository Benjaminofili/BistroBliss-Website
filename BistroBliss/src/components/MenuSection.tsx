import React from 'react';
import CategoryCard from './CategoryCard';

// Import your icons
import breakfastIcon from '../assets/svg/coffee.svg';
import mainDishIcon from '../assets/svg/Rice.svg';
import drinksIcon from '../assets/svg/Glass.svg';
import dessertsIcon from '../assets/svg/Cake.svg';

const MenuSection: React.FC = () => {
  const categories = [
    {
      icon: breakfastIcon,
      title: 'Breakfast',
      onClick: () => console.log('Breakfast clicked')
    },
    {
      icon: mainDishIcon,
      title: 'Main Dishes',
      onClick: () => console.log('Main Dishes clicked')
    },
    {
      icon: drinksIcon,
      title: 'Drinks',
      onClick: () => console.log('Drinks clicked')
    },
    {
      icon: dessertsIcon,
      title: 'Desserts',
      onClick: () => console.log('Desserts clicked')
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 text-center">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold  mb-12" style={{ fontFamily: '"Playfair Display", serif',color: '#2c2f24',  }}>
          Browse Our Menu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              onClick={category.onClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;