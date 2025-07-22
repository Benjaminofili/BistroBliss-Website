import React from 'react';
import type { NavbarProps } from './ui';
import type { NavItem } from './ui';
import Button from './Button';

const Navbar: React.FC<NavbarProps> = ({ logo, items, onItemClick }) => {
  const navClass = `p-6 flex justify-between items-center shadow-md bg-[var(--neutral-02)] px-[var(--content-padding)] `;

  return (
    <nav className={navClass}>
      <div className="flex items-center gap-6">
        {logo && <img src={logo.src} alt={logo.alt} className="h-3.4375rem" />}
        <span className="text-[43px] font-bold text-[var(--neutral-07)]" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, fontStyle: 'italic' }}>Bistro Bliss</span>
      </div>
      <ul className="flex items-center gap-8 text-[var(--neutral-07)] font-semibold">
        {items.map((item: NavItem, index: number) => (
          <li key={index} className={item.isActive ? 'font-bold bg-[var(--neutral-03)] px-4 py-2 rounded-full ' : ''}>
            <a
              href={item.href}
              onClick={() => onItemClick?.(item)}
              
            >
              {item.icon} {item.text}
            </a>
          </li>
        ))}
      </ul>
      <Button label="Book A Table" disableHover={true} />
    </nav>
  );
};

export default Navbar;