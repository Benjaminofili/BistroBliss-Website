import React from 'react';
import IconWithBackground from './IconWithBackground'; // Adjust path as needed

// Your actual imports
import chefImg from '../assets/content/Chefimg.webp';
import foodImg1 from '../assets/content/FoodImg1.webp';
import foodImg2 from '../assets/content/FoodImg2.webp';

interface DeliveryProps {
  title?: string;
  description?: string;
  features?: {
    text: string;
    icon: string;
  }[];
}

const Delivery: React.FC<DeliveryProps> = ({
  title = "Fastest Food Delivery in City",
  description = "Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop.",
  features = [
    { text: "Delivery within 30 minutes", icon: "clock" },
    { text: "Best Offer & Prices", icon: "tag" },
    { text: "Online Services Available", icon: "cart" }
  ]
}) => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#F9F9F7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Images Section */}
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              {/* Large chef image - spans 2 rows */}
              <div className="row-span-2">
                <img
                  src={chefImg}
                  alt="Chef preparing food"
                  className="w-full h-full object-cover rounded-lg"
                  style={{ height: '500px' }}
                />
              </div>
              
              {/* Top right food image */}
              <div>
                <img
                  src={foodImg1}
                  alt="Delicious food"
                  className="w-full h-full object-cover rounded-lg"
                  style={{ height: '240px' }}
                />
              </div>
              
              {/* Bottom right food image */}
              <div>
                <img
                  src={foodImg2}
                  alt="Grilled food"
                  className="w-full h-full object-cover rounded-lg"
                  style={{ height: '240px' }}
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 lg:max-w-[500px]">
            <h2 className="text-4xl lg:text-5xl font-normal text-[#2C2F24] mb-6 leading-tight">
              {title}
            </h2>

            <p className="text-[#414536] text-lg leading-relaxed mb-8">
              {description}
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <IconWithBackground 
                    iconType={feature.icon as 'clock' | 'tag' | 'cart'}
                    backgroundColor="#AD343E"
                    iconColor="#FFFFFF"
                    size="md"
                    className="mr-4"
                  />
                  <span className="text-[#2C2F24] font-medium text-lg">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;