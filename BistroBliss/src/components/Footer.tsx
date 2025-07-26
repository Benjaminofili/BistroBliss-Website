import React from 'react';
import IconWithBackground from './IconWithBackground';

interface FooterProps {
  companyName?: string;
  companyDescription?: string;
  instagramImages?: string[];
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  companyName = "Bistro Bliss",
  companyDescription = "In the new era of technology we look ahead in the future with certainty and pride to for our company and.",
  instagramImages = [
    "/api/placeholder/200/200",
    "/api/placeholder/200/200", 
    "/api/placeholder/200/200",
    "/api/placeholder/200/200"
  ],
  className = ""
}) => {
  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Delivery", href: "/delivery" }
  ];

  const utilityLinks = [
    { label: "Start Here", href: "/start" },
    { label: "Styleguide", href: "/styleguide" },
    { label: "Password Protected", href: "/password" },
    { label: "404 Not Found", href: "/404" },
    { label: "Licenses", href: "/licenses" },
    { label: "Changelog", href: "/changelog" },
    { label: "View More", href: "/more" }
  ];

  const socialLinks = [
    { iconSrc: "/assets/svg/twitter.svg", href: "#", alt: "Twitter" },
    { iconSrc: "/assets/svg/facebook.svg", href: "#", alt: "Facebook" },
    { iconSrc: "/assets/svg/instagram.svg", href: "#", alt: "Instagram" },
    { iconSrc: "/assets/svg/github.svg", href: "#", alt: "Github" }
  ];

  return (
    <footer className={`bg-gray-800 text-gray-300 py-16 px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-gray-800 font-bold text-sm">B</span>
              </div>
              <h3 className="text-white text-2xl font-serif">{companyName}</h3>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {companyDescription}
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="hover:opacity-80 transition-opacity"
                >
                  <IconWithBackground
                    iconSrc={social.iconSrc}
                    iconAlt={social.alt}
                    backgroundColor="#AD343E"
                    iconColor="#FFFFFF"
                    size="md"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-semibold mb-6">Pages</h4>
            <ul className="space-y-4">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility Pages */}
          <div>
            <h4 className="text-white font-semibold mb-6">Utility Pages</h4>
            <ul className="space-y-4">
              {utilityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Instagram */}
          <div>
            <h4 className="text-white font-semibold mb-6">Follow Us On Instagram</h4>
            <div className="grid grid-cols-2 gap-3">
              {instagramImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            Copyright © 2023 Hashtag Developer. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;