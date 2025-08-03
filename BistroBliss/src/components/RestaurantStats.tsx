import React from 'react';
import Cooking from '../assets/Aboutpage/Cooking.webp';

interface Stat {
  value: string;
  label: string;
}

interface RestaurantStatsProps {
  title?: string;
  description?: string;
  stats?: Stat[];
  image?: string;
  imageAlt?: string;
}

const RestaurantStats: React.FC<RestaurantStatsProps> = ({
  title = "A little information for our valuable guest",
  description = "At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.",
  stats = [
    { value: "3", label: "Locations" },
    { value: "1995", label: "Founded" },
    { value: "65+", label: "Staff Members" },
    { value: "100%", label: "Satisfied Customers" }
  ],
  image = Cooking,
  imageAlt = "Chef preparing fresh vegetables and ingredients"
}) => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[var(--neutral-02)]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Content - Takes 6 columns */}
          <div className="lg:col-span-6 space-y-6">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-[#2C2F24] leading-[1.1] font-serif max-w-md">
              {title}
            </h2>
            
            {/* Description */}
            <p className="text-[#414536] text-base leading-relaxed max-w-sm">
              {description}
            </p>
            
            {/* Stats Grid - 2x2 layout exactly like the image */}
            <div className="grid grid-cols-2 gap-4 pt-4 max-w-sm">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 text-left min-h-[120px] flex flex-col justify-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#2C2F24] mb-2 font-serif leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[#5C5C5C] font-normal text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Image - Takes 6 columns */}
          <div className="lg:col-span-6">
            <div className="relative">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantStats;