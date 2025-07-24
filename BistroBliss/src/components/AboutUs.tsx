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
    <section className="py-16 md:py-24 lg:py-32 bg-[#F9F9F7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Image Section with overlay */}
          <div className="relative w-full lg:w-[599px] h-[566px]">
            <img
              src={aboutImg}
              alt="Restaurant dish"
              className="w-full h-full object-cover rounded-lg"
            />
            
            {/* Contact Card Overlay - positioned to extend beyond image */}
            <div className="absolute -bottom-8 -right-8 bg-[#474747] text-white p-[50px] rounded-[5%] shadow-xl" 
                 style={{ width: '441px', height: '321px' }}>
              <h3 className="text-xl font-semibold mb-[45px] text-white">Come and visit us</h3>
              
              <div className="space-y-4 mb-[25px]">
                <div className="flex items-center">
                   <img src={phoneIcon} alt="Phone" className="mr-5 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm">{contactInfo.phone}</span>
                </div>
                
                <div className="flex items-center">
                   <img src={mailIcon} alt="Phone" className="mr-5 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                
                <div className="flex items-start">
                   <img src={locationIcon} alt="Phone" className="mr-5 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 lg:max-w-[600px] lg:ml-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2F24] mb-6 leading-tight">
              {title}
            </h2>

            <div className="space-y-6">
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#414536] text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <button className="mt-8 px-8 py-4 border-2 border-[#2C2F24] text-[#2C2F24] rounded-full font-medium hover:bg-[#2C2F24] hover:text-white transition-all duration-300">
              More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;