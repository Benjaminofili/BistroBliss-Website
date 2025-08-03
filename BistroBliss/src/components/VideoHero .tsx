import React, { useState } from 'react';
import IconWithBackground from './IconWithBackground';
import play from '../assets/svg/play.svg';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface VideoHeroProps {
  videoSrc?: string;
  title?: string;
  subtitle?: string;
  features?: Feature[];
  showPlayButton?: boolean;
}

const VideoHero: React.FC<VideoHeroProps> = ({
  videoSrc = "/path/to/your/restaurant-video.mp4",
  title = "Feel the authentic &",
  subtitle = "original taste from us",
  showPlayButton = true,
  features = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2V8H15V2H17V8H20C20.5523 8 21 8.44772 21 9V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9C3 8.44772 3.44772 8 4 8H7V2H9ZM19 10H5V19H19V10ZM11 12H13V17H11V12ZM7 12H9V17H7V12ZM15 12H17V17H15V12Z" fill="currentColor"/>
        </svg>
      ),
      title: "Multi Cuisine",
      description: "In the new era of technology we look in the future with certainty life."
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H2V20C2 21.1046 2.89543 22 4 22H18V20H4V6ZM20 2H8C6.89543 2 6 2.89543 6 4V16C6 17.1046 6.89543 18 8 18H20C21.1046 18 22 17.1046 22 16V4C22 2.89543 21.1046 2 20 2ZM20 16H8V4H20V16ZM10 9H18V11H10V9ZM10 6H14V8H10V6ZM10 12H16V14H10V12Z" fill="currentColor"/>
        </svg>
      ),
      title: "Easy To Order",
      description: "In the new era of technology we look in the future with certainty life."
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 6C12.5523 6 13 6.44772 13 7V11.5858L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V7C11 6.44772 11.4477 6 12 6Z" fill="currentColor"/>
        </svg>
      ),
      title: "Fast Delivery",
      description: "In the new era of technology we look in the future with certainty life."
    }
  ]
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative">
      {/* Video Hero Section */}
      <div className="relative h-[500px] md:h-[600px] bg-gray-900 overflow-hidden">
        {/* Background Video */}
        {!isPlaying ? (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%23000" width="1200" height="600" opacity="0.5"/><text x="50%" y="50%" fill="white" font-size="48" text-anchor="middle" dy="0.3em">Restaurant Video Background</text></svg>')`
            }}
          />
        ) : (
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          {/* Play Button */}
          {showPlayButton && !isPlaying && (
            <button 
              onClick={handlePlayClick}
              className="mb-8 w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 group"
            >
             <IconWithBackground iconSrc={play} iconAlt='Play Icon' size='lg' backgroundColor='#AD343E' iconColor='#AD343E'  />

            </button>
          )}
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight">
            <span className="block">{title}</span>
            <span className="block italic font-serif">{subtitle}</span>
          </h1>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;