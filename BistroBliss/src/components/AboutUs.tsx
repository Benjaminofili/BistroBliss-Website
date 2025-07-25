import React from 'react';
import type { AboutUsProps } from './ui';
import aboutImg from '../assets/aboutimg.webp';
import phoneIcon from '../assets/svg/phone.svg';
import mailIcon from '../assets/svg/mail.svg';
import locationIcon from '../assets/svg/location.svg';

const AboutUs: React.FC<AboutUsProps> = ({
  title = "We provide healthy food for your family.",
  description = [
    "Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.",
    "At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event."
  ],
  contactInfo = {
    phone: "(414) 857 - 0107",
    email: "happytummy@restaurant.com",
    address: "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
  }
}) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-[#F9F9F7]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12">
          {/* Image Section */}
          <div className="relative w-full lg:w-[55%] xl:w-[599px] h-[400px] sm:h-[450px] md:h-[500px] lg:h-[566px]">
            <img
              src={aboutImg}
              alt="Restaurant dish"
              className="w-full h-full object-cover rounded-lg"
            />
            
            {/* Compact Contact Card Overlay */}
            <div className="absolute bottom-4 right-4 bg-[#474747] text-white p-4 sm:p-5 rounded-lg shadow-md" 
                 style={{ 
                   width: '280px',
                   maxWidth: '90%'
                 }}>
              <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-white">Come and visit us</h3>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center">
                  <img src={phoneIcon} alt="Phone" className="mr-3 w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">{contactInfo.phone}</span>
                </div>
                
                <div className="flex items-center">
                  <img src={mailIcon} alt="Email" className="mr-3 w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">{contactInfo.email}</span>
                </div>
                
                <div className="flex items-start">
                  <img src={locationIcon} alt="Location" className="mr-3 w-3 h-3 sm:w-4 sm:h-4 mt-0.5" />
                  <span className="text-xs sm:text-sm leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 lg:max-w-[45%] xl:max-w-[600px] lg:ml-8 xl:ml-16 mt-8 sm:mt-10 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl md:text-[2.8rem] lg:text-5xl font-bold text-[#2C2F24] mb-4 sm:mb-6 leading-tight">
              {title}
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#414536] text-base sm:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#2C2F24] text-[#2C2F24] rounded-full font-medium hover:bg-[#2C2F24] hover:text-white transition-all duration-300 text-sm sm:text-base">
              More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;