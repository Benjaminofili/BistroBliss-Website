import React from 'react';
import type { ServicesProps } from './ui';
import cateringImg from '../assets/services/catering.webp';
import birthdayImg from '../assets/services/birthday.webp';
import weddingImg from '../assets/services/wedding.webp';
import eventImg from '../assets/services/event.webp';

const Services: React.FC<ServicesProps> = ({
  title = "We also offer unique services for your events",
  services = [
    {
      id: '1',
      title: 'Caterings',
      description: 'In the new era of technology we look in the future with certainty for life.',
      image: cateringImg
    },
    {
      id: '2',
      title: 'Birthdays',
      description: 'In the new era of technology we look in the future with certainty for life.',
      image: birthdayImg
    },
    {
      id: '3',
      title: 'Weddings',
      description: 'In the new era of technology we look in the future with certainty for life.',
      image: weddingImg
    },
    {
      id: '4',
      title: 'Events',
      description: 'In the new era of technology we look in the future with certainty for life.',
      image: eventImg
    }
  ]
}) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Title */}
        <div className="mb-12 md:mb-16 lg:mb-20 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] lg:text-5xl font-semibold text-[#2C2F24] leading-tight text-left font-['Inter']">
            {title}
          </h2>
        </div>
        
        {/* Services Grid - Now fully responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group flex flex-col"
            >
              {/* Service Image - Responsive with consistent aspect ratio */}
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-4 sm:mb-6">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              {/* Service Content */}
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#2C2F24] mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-[#414536] text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;