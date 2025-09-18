// src/components/OrderApps.tsx
import React from 'react';
import UberEatsLogo from '../assets/Menupage/Brand/uberEat.svg';
import GrubhubLogo from '../assets/MenuPage/Brand/GrubHub.svg';
import PostmatesLogo from '../assets/MenuPage/Brand/postmates.svg';
import DoorDashLogo from '../assets/MenuPage/Brand/Doordash.svg';
import FoodPandaLogo from '../assets/MenuPage/Brand/foodpanda.svg';
import DeliverooLogo from '../assets/MenuPage/Brand/deliveroo.svg';
import InstacartLogo from '../assets/MenuPage/Brand/instacart.png';
import JustEatLogo from '../assets/MenuPage/Brand/justeat.webp';
import DiDiFoodLogo from '../assets/MenuPage/Brand/didi-food.svg';

export interface AppItem {
  name: string;
  logo: string;
}

export interface OrderAppsProps {
  appItems?: AppItem[];
  variant?: 'grid3x3' | 'staggered'; // Add variant prop to switch between layouts
}

const defaultAppItems: AppItem[] = [
  { name: 'Uber Eats', logo: UberEatsLogo },
  { name: 'GRUBHUB', logo: GrubhubLogo },
  { name: 'Postmates', logo: PostmatesLogo },
  { name: 'DoorDash', logo: DoorDashLogo },
  { name: 'foodpanda', logo: FoodPandaLogo },
  { name: 'deliveroo', logo: DeliverooLogo },
  { name: 'Instacart', logo: InstacartLogo },
  { name: 'JUST EAT', logo: JustEatLogo },
  { name: 'DiDi Food', logo: DiDiFoodLogo },
];

const OrderApps: React.FC<OrderAppsProps> = ({ 
  appItems = defaultAppItems, 
  variant = 'grid3x3' 
}) => {
  const renderGrid3x3 = () => (
    <div className="flex flex-col gap-4 ">
      {/* First row - 3 items */}
      <div className="grid grid-cols-3 gap-4">
        {appItems.slice(0, 3).map((app) => (
          <div
            key={app.name}
            className="bg-white shadow-sm rounded-xl px-6 py-4 flex items-center justify-center h-16 w-40"
          >
            <img
              src={app.logo}
              alt={`${app.name} Logo`}
              className="h-6 w-auto object-contain max-w-full"
            />
          </div>
        ))}
      </div>
      
      {/* Second row - 3 items offset/indented */}
      <div className="grid grid-cols-3 gap-4 mr-4">
        {appItems.slice(3, 6).map((app) => (
          <div
            key={app.name}
            className="bg-white shadow-sm rounded-xl px-6 py-4 flex items-center justify-center h-16 w-45"
          >
            <img
              src={app.logo}
              alt={`${app.name} Logo`}
              className="h-6 w-auto object-contain max-w-full"
            />
          </div>
        ))}
      </div>
      
      {/* Third row - 3 items */}
      <div className="grid grid-cols-3 gap-4">
        {appItems.slice(6, 9).map((app) => (
          <div
            key={app.name}
            className="bg-white shadow-sm rounded-xl px-6 py-4 flex items-center justify-center h-16 w-40"
          >
            <img
              src={app.logo}
              alt={`${app.name} Logo`}
              className="h-6 w-auto object-contain max-w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderStaggered = () => (
    <div className="flex flex-col gap-4 max-w-2xl">
      {/* First row - 4 items */}
      <div className="grid grid-cols-4 gap-4">
        {appItems.slice(0, 4).map((app) => (
          <div
            key={app.name}
            className="bg-white shadow-sm rounded-xl px-6 py-4 flex items-center justify-center h-16 w-40"
          >
            <img
              src={app.logo}
              alt={`${app.name} Logo`}
              className="h-6 w-auto object-contain max-w-full"
            />
          </div>
        ))}
      </div>
      
      {/* Second row - 4 items */}
      <div className="grid grid-cols-4 gap-4">
        {appItems.slice(4, 8).map((app) => (
          <div
            key={app.name}
            className="bg-white shadow-sm rounded-xl px-6 py-4 flex items-center justify-center h-16 w-40"
          >
            <img
              src={app.logo}
              alt={`${app.name} Logo`}
              className="h-6 w-auto object-contain max-w-full"
            />
          </div>
        ))}
      </div>
      
      {/* Third row - 1 item centered */}
      {appItems[8] && (
        <div className="flex justify-center">
          <div className="bg-white shadow-sm rounded-xl px-6 py-4 flex items-center justify-center h-16 w-40">
            <img
              src={appItems[8].logo}
              alt={`${appItems[8].name} Logo`}
              className="h-6 w-auto object-contain max-w-full"
            />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="bg-neutral-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          {/* Text Section */}
          <div className="flex-1 max-w-md">
            <h2 className="text-4xl lg:text-5xl font-playfair text-gray-800 font-bold mb-6 leading-tight">
              You can order through apps
            </h2>
            <p className="text-gray-600 text-lg font-georgia leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet
              risus tempor semper.
            </p>
          </div>

          {/* Apps Grid Section */}
          <div className="flex-1 flex justify-center lg:justify-end">
            {variant === 'grid3x3' ? renderGrid3x3() : renderStaggered()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderApps;