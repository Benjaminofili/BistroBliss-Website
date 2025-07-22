import React from 'react';
import type { NavbarProps } from './ui';
import type { NavItem } from './ui';
import Button from './Button';

const Navbar: React.FC<NavbarProps> = ({ logo, items, onItemClick }) => {
  return (
    <nav className="bg-[var(--neutral-02)] text-[var(--neutral-01)] p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        {logo && <img src={logo.src} alt={logo.alt} className="h-10 mr-4" />}
        <span className="text-xl font-bold text-[var(--neutral-05)]" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, fontStyle: 'italic' }}>Bistro Bliss</span>
      </div>
      <ul className="flex space-x-6 text-[var(--neutral-05)]">
        {items.map((item: NavItem, index: number) => (
          <li key={index} className={item.isActive ? 'font-bold' : ''}>
            <a
              href={item.href}
              onClick={() => onItemClick?.(item)}
              className="hover:text-gray-300 transition-colors"
            >
              {item.icon} {item.text}
            </a>
          </li>
        ))}
      </ul>
      <Button label="Book A Table" disableHover={true} />    </nav>
  );
};

export default Navbar;