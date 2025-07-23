import React from 'react';
import Button from './Button';
import herobg from '../assets/herobg.webp';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[var(--neutral-07)]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ 
          backgroundImage: `url(${herobg})`,
          backgroundColor: '#f9f9f9'
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 w-full px-6 sm:px-8 flex flex-col items-center justify-center py-12">
        {/* Headline - Fixed line breaks */}
        <h1 
          className="text-center mb-4 md:mb-6 font-sans font-bold"
          style={{
            color: '#2c2f24',
            fontSize: 'clamp(2rem, 6vw, 3.5rem)', // 32px-56px
            lineHeight: '1.2',
            letterSpacing: '-0.5px',
            whiteSpace: 'pre-line'
          }}
        >
          {"Best food\nfor your taste."}
        </h1>
        
        {/* Body text - Proper spacing */}
        <p 
          className="text-center mb-6 sm:mb-8 max-w-[90%] md:max-w-[537px] font-sans font-normal"
          style={{
            color: '#2c2f24',
            fontSize: 'clamp(0.875rem, 1.1vw, 1.25rem)', // 14px-20px
            lineHeight: '1.6'
          }}
        >
          Discover delectable cuisine and unforgettable moments{"\n"}
          in our welcoming, culinary haven.
        </p>
        
        {/* Buttons - Responsive sizing */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Button
            label="Book A Table"
            variant="secondary"
            className="min-w-[160px] sm:min-w-[180px] h-[48px] sm:h-[56px] text-sm sm:text-base"
            
          />
          <Button
            label="Explore Menu"
            variant="primary"
            className="min-w-[160px] sm:min-w-[180px] h-[48px] sm:h-[56px] text-sm sm:text-base"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;