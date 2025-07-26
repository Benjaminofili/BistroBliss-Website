// src/pages/Home.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import type { NavItem } from '../components/ui';
import Topbar from '../components/Topbar';
import HeroSection from '../components/HeroSection';
import MenuSection from '../components/MenuSection';
import AboutUs from '../components/AboutUs'; 
import Services from '../components/Services';
import Delivery from '../components/Delivery';
import BlogSection from '../components/Blog';
import Testimonials from '../components/Testimonial';
import Footer from '../components/Footer';

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
                <AboutUs />
                <Services />
                <Delivery />
                <Testimonials/>
                <BlogSection />
                <Footer />
            </main>
        </div>
    );
};

export default Home;