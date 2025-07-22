import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Import phone and envelope icons
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'; // Import social media icons

const Topbar: React.FC = () => {
  return (
    <div className="bg-[var(--neutral-07)] text-white py-2 flex justify-between items-center px-[var(--content-padding)]">
      <div className="flex items-center gap-4">
        <a href="tel:+14148570107" className="flex items-center hover:text-blue-400 transition-colors">
          <FaPhone className="mr-2" size={20} />
          +1 (414) 857 - 0107
        </a>
        <a href="mailto:yummy@bistrobliss.com" className="flex items-center hover:text-blue-400 transition-colors">
          <FaEnvelope className="mr-2" size={20} />
          yummy@bistrobliss.com
        </a>
      </div>
      <div className="flex items-center gap-2">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <FaTwitter size={20} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <FaFacebookF size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <FaInstagram size={20} />
        </a>
      </div>
    </div>
  );
};

export default Topbar;