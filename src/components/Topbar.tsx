import React from 'react';
import SocialIcon from './SocialIcon';
import twitterIcon from '../assets/svg/twitter.svg';
import facebookIcon from '../assets/svg/facebook.svg';
import instagramIcon from '../assets/svg/instagram.svg';
import githubIcon from '../assets/svg/github2.svg';
import phoneIcon from '../assets/svg/phone.svg';
import mailIcon from '../assets/svg/mail.svg';

const Topbar: React.FC = () => {
  return (
    <div className="bg-[#2C2F24] text-white py-3 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 max-w-7xl mx-auto">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <a 
            href="tel:+14148570107" 
            className="flex items-center hover:opacity-80 transition-opacity text-sm whitespace-nowrap"
          >
            <img src={phoneIcon} alt="Phone" className="mr-2 w-4 h-4 filter brightness-0 invert" />
            (414) 857 - 0107
          </a>
          <a 
            href="mailto:yummy@bistrobliss.com" 
            className="flex items-center hover:opacity-80 transition-opacity text-sm whitespace-nowrap"
          >
            <img src={mailIcon} alt="Email" className="mr-2 w-4 h-4 filter brightness-0 invert" />
            yummy@bistrobliss
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2">
          <SocialIcon 
            href="https://twitter.com" 
            icon={<img src={twitterIcon} alt="Twitter" className="w-4 h-4 filter brightness-0 invert" />} 
            color="#5A5A5A"
          />
          <SocialIcon 
            href="https://facebook.com" 
            icon={<img src={facebookIcon} alt="Facebook" className="w-4 h-4 filter brightness-0 invert" />} 
            color="#5A5A5A"
          />
          <SocialIcon 
            href="https://instagram.com" 
            icon={<img src={instagramIcon} alt="Instagram" className="w-4 h-4 filter brightness-0 invert" />} 
            color="#5A5A5A"
          />
          <SocialIcon 
            href="https://github.com" 
            icon={<img src={githubIcon} alt="GitHub" className="w-4 h-4 filter brightness-0 invert" />} 
            color="#5A5A5A"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;