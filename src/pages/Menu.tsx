import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import type { NavItem } from '../components/ui';
import Topbar from '../components/Topbar';
import MenuHero from '../components/MenuHero';
import OrderApps from '../components/OrderApps';

import Footer from '../components/Footer';

const Menu: React.FC = () => {
    const navigate = useNavigate();

    const navItems: NavItem[] = [
        { text: 'Home', href: '/', isActive: false },
        { text: 'About', href: '/about',isActive: false},
        { text: 'Menu', href: '/menu', isActive: true },
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
                <MenuHero />
                <OrderApps />
                
            </main>
            <Footer />
         </div>

    );
};

export default Menu;