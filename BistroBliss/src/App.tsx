import React from 'react';
import Navbar from './components/Navbar';
import type { NavItem } from './components/ui';
import Topbar from './components/Topbar';

const App: React.FC = () => {
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
    <div className="flex flex-col min-h-screen ">
      <Topbar />
      <Navbar
        logo={{ src: '/assets/Logo.svg', alt: 'Bistro Bliss Logo' }}
        items={navItems}
        onItemClick={handleItemClick}

      />
      <main>
        {/* <HeroSection
          title="Best food for your taste"
          subtitle="Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven."
          backgroundImageUrl="https://via.placeholder.com/1200x400"
          ctaButtons={[
            { label: 'Book A Table', variant: 'primary', onClick: () => alert('Booked!') },
            { label: 'Explore Menu', variant: 'secondary', onClick: () => alert('Menu explored!') },
          ]}
        /> */}
        {/* <MenuSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialSection />
        <BlogSection /> */}
      </main>
      {/* <Footer
        logo={{ src: 'https://via.placeholder.com/50', alt: 'Bistro Bliss Logo' }}
        sections={[
          {
            title: 'Pages',
            links: [
              { text: 'Home', href: '#' },
              { text: 'About', href: '#' },
              { text: 'Menu', href: '#' },
              { text: 'Pricing', href: '#' },
              { text: 'Blog', href: '#' },
              { text: 'Contact', href: '#' },
              { text: 'Delivery', href: '#' },
            ],
          },
          {
            title: 'Utility Pages',
            links: [
              { text: 'Start Here', href: '#' },
              { text: 'Styleguide', href: '#' },
              { text: 'Password Protected', href: '#' },
              { text: '404 Not Found', href: '#' },
              { text: 'Licenses', href: '#' },
              { text: 'Changelog', href: '#' },
              { text: 'View More', href: '#' },
            ],
          },
        ]}
        socialIcons={[
          { icon: <span>🐦</span>, href: '#' },
          { icon: <span>📸</span>, href: '#' },
          { icon: <span>🐘</span>, href: '#' },
        ]}
      /> */}
    </div>
  );
};

export default App;