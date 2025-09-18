import React from 'react';
import IconWithBackground from './IconWithBackground';
import logo from '/assets/logo(w).svg';
import twitterIcon from '../assets/svg/twitter.svg';
import facebookIcon from '../assets/svg/facebook.svg';
import instagramIcon from '../assets/svg/instagram.svg';
import githubIcon from '../assets/svg/github2.svg';
import insta1 from '../assets/footer/insta1.webp';
import insta2 from '../assets/footer/insta2.webp';
import insta3 from '../assets/footer/insta3.webp';
import insta4 from '../assets/footer/insta4.webp';

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
        insta1,
        insta2,
        insta3,
        insta4
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
        { iconSrc: twitterIcon, href: "#", alt: "Twitter" },
        { iconSrc: facebookIcon, href: "#", alt: "Facebook" },
        { iconSrc: instagramIcon, href: "#", alt: "Instagram" },
        { iconSrc: githubIcon, href: "#", alt: "Github"  }
    ];

    return (
        <footer className={`bg-[#464646] text-[var(--neutral-04)] py-16 px-8 ${className}`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <img src={logo} alt="Bistro Bliss Logo" className="h-8 sm:h-10 md:h-12 lg:h-14" />
                            <h3 className="text-white text-2xl italic ml-3" style={{ fontFamily: 'Playfair Display, serif' }}>{companyName}</h3>
                        </div>
                        <p className="text-[var(--neutral-03)] mb-8 leading-relaxed">
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
                                        className="text-[var(--neutral-03)] hover:text-white transition-colors"
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
                                        className="text-[var(--neutral-03)] hover:text-white transition-colors"
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
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-12 pt-8 text-center">
                    <p className="text-[var(--neutral-03)]">
                        Copyright © 2023 Hashtag Developer. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;