import React from 'react';

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  color: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, color }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mx-2"
    >
      <div
        className="flex items-center justify-center w-10 h-10 rounded-full transition-opacity duration-300"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
    </a>
  );
};

export default SocialIcon;