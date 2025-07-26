import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import type { NavItem } from '../components/ui';
import Topbar from '../components/Topbar';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import heroimage from '../assets/Aboutpage/Resturantfood.webp';

const About: React.FC = () => {
    const navigate = useNavigate();

    const navItems: NavItem[] = [
        { text: 'Home', href: '/', isActive: false },
        { text: 'About', href: '/about', isActive: true },
        { text: 'Menu', href: '/menu' },
        { text: 'Pages', href: '/pages' },
        { text: 'Contact', href: '/contact' },
    ];

    const handleItemClick = (item: NavItem) => {
        console.log(`Navigating to ${item.text}`);

        // Check if it's an external link or anchor
        if (item.href.startsWith('http://') || item.href.startsWith('https://')) {
            window.open(item.href, '_blank', 'noopener noreferrer');
        } else if (item.href.startsWith('#')) {
            // Handle anchor links (smooth scroll to section)
            const element = document.querySelector(item.href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Internal navigation using React Router
            navigate(item.href);
        }
    };

    return (
        <div className="flex flex-col md:min-h-screen">
            <Topbar />
            <Navbar
                logo={{ src: '/assets/Logo.svg', alt: 'Bistro Bliss Logo' }}
                items={navItems}
                onItemClick={handleItemClick}
            />
            <main className="flex-grow">
                <AboutUs
                    image={heroimage}
                    imageAlt="Different restaurant view"
                />
            </main>
            <Footer />
        </div>
    );
};

export default About;