// src/pages/Home.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import HeroSection from '../components/HeroSection';
import MenuSection from '../components/MenuSection';
import AboutUs from '../components/AboutUs'; // Import the AboutUs component
import type { NavItem } from '../components/ui';

const Home: React.FC = () => {
    const navItems: NavItem[] = [
        { text: 'Home', href: '#', isActive: true },
        { text: 'About', href: '#' },
        { text: 'Menu', href: '#' },
        { text: 'Pages', href: '#' },
        { text: 'Contact', href: '#' },
    ];

    const handleItemClick = (item: NavItem) => {
        console.log(`Navigated to ${item.text}`);
    };

    // AboutUs data
    const aboutUsData = {
        title: "We provide healthy food for your family.",
        description: [
            "Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.",
            "At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event."
        ],
        contactInfo: {
            phone: "(414) 857 - 0107",
            email: "happyfamily@restaurant.com",
            address: "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
        },
    };


    return (
        <div className="flex flex-col md:min-h-screen">
            <Topbar />
            <Navbar
                logo={{ src: '/assets/Logo.svg', alt: 'Bistro Bliss Logo' }}
                items={navItems}
                onItemClick={handleItemClick}
            />
            <main>
                <HeroSection />
                <MenuSection />
                <AboutUs {...aboutUsData} /> {/* Added AboutUs section */}
            </main>
        </div>
    );
};

export default Home;