import React from 'react';
import Button from './Button';
import type { CategoryCardProps } from './ui';


const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, onClick }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      {/* Icon with circular background */}
      <div className="flex justify-center mb-4">
        <div className="bg-[#f3f3f0] rounded-full p-4 w-20 h-20 flex items-center justify-center">
          <img 
            src={icon} 
            alt={title} 
            className="w-12 h-12 object-contain" // Reduced size to fit within circle
          />
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold  text-center mb-4" style={{color: '#2c2f24',}}>
        {title}
      </h3>
      
      {/* Description */}
      <p className=" text-center mb-6" style={{ fontFamily: '"Georgia", serif', color: '#2c2f24',}}>
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