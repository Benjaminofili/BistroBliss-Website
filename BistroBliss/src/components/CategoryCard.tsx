import React from 'react';
import Button from './Button';

import type { CategoryCardProps } from './ui';


const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, onClick }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <img 
          src={icon} 
          alt={title} 
          className="w-16 h-16 object-contain"
        />
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 text-center mb-6" style={{ fontFamily: '"Georgia", serif' }}>
        In the new era of technology we look in the future with certainty and pride for our life.
      </p>
      
      {/* Button */}
      <div className="text-center">
        <Button
          label="Explore Menu"
          variant="ghost"
          onClick={onClick}
          className="w-full max-w-[160px] mx-auto outline-none text-[var(--red1)] hover:bg-[var(--red1)] hover:text-[var(--neutral-01)]"
        />
      </div>
    </div>
  );
};

export default CategoryCard;