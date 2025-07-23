import React from 'react';
import SocialIcon from './SocialIcon';
import twitterIcon from '../assets/svg/twitter.svg';
import facebookIcon from '../assets/svg/facebook.svg';
import instagramIcon from '../assets/svg/instagram.svg';
import githubIcon from '../assets/svg/github.svg';
import phoneIcon from '../assets/svg/phone.svg';
import mailIcon from '../assets/svg/mail.svg';

const Topbar: React.FC = () => {
  return (
    <div className="bg-[var(--neutral-07)] text-white py-2 px-4 sm:px-6 md:px-[var(--content-padding)]">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 max-w-[1920px] mx-auto">
        {/* Contact Info - stacks on mobile */}
        <div className="flex flex-col xs:flex-row items-center gap-2 sm:gap-4">
          <a 
            href="tel:+14148570107" 
            className="flex items-center hover:text-blue-400 transition-colors text-sm sm:text-base whitespace-nowrap"
          >
            <img src={phoneIcon} alt="Phone" className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            +1 (414) 857 - 0107
          </a>
          <a 
            href="mailto:yummy@bistrobliss.com" 
            className="flex items-center hover:text-blue-400 transition-colors text-sm sm:text-base whitespace-nowrap"
          >
            <img src={mailIcon} alt="Email" className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            yummy@bistrobliss.com
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <SocialIcon 
            href="https://twitter.com" 
            icon={<img src={twitterIcon} alt="Twitter" className="w-4 h-4 sm:w-5 sm:h-5" />} 
            color="#4a4a4a" 
          />
          <SocialIcon 
            href="https://facebook.com" 
            icon={<img src={facebookIcon} alt="Facebook" className="w-4 h-4 sm:w-5 sm:h-5" />} 
            color="#4a4a4a" 
          />
          <SocialIcon 
            href="https://instagram.com" 
            icon={<img src={instagramIcon} alt="Instagram" className="w-4 h-4 sm:w-5 sm:h-5" />} 
            color="#4a4a4a" 
          />
          <SocialIcon 
            href="https://github.com" 
            icon={<img src={githubIcon} alt="GitHub" className="w-4 h-4 sm:w-5 sm:h-5" />} 
            color="#4a4a4a" 
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;