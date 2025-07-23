import React, { useState } from 'react';
import type { NavbarProps } from './ui';
import type { NavItem } from './ui';
import Button from './Button';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar: React.FC<NavbarProps> = ({ logo, items, onItemClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <div className="w-full flex justify-center">
      <nav className={`
        py-4 md:py-6 flex justify-between items-center shadow-md bg-[var(--neutral-02)] 
        w-full max-w-[1440px]
        px-4 sm:px-6 lg:px-8 xl:px-[var(--content-padding)]
      `}>
        {/* Logo/Branding */}
        <div className="flex items-center gap-3 sm:gap-6">
          {logo && <img src={logo.src} alt={logo.alt} className="h-8 sm:h-10 md:h-12 lg:h-14" />}
          <span className="text-lg sm:text-xl md:text-2xl lg:text-[43px] font-bold text-[var(--neutral-07)]" 
                style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, fontStyle: 'italic' }}>
            Bistro Bliss
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-3 lg:gap-6 text-[var(--neutral-07)] font-semibold">
          {items.map((item: NavItem, index: number) => (
            <li key={index} className={item.isActive ? 'font-bold bg-[var(--neutral-03)] px-2 py-1 lg:px-3 lg:py-1.5 rounded-full' : ''}>
              <a href={item.href} onClick={() => onItemClick?.(item)} className="flex items-center gap-1">
                {React.isValidElement(item.icon) && React.cloneElement(item.icon as React.ReactElement<any>, { className: 'w-4 h-4 md:w-5 md:h-5' })}
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2 sm:gap-3">
          <Button label="Book" disableHover={true} size="sm" variant="primary" />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[var(--neutral-07)] p-1"
          >
            {isMobileMenuOpen ? 
              <XIcon className="w-4 h-4 sm:w-5 sm:h-5" /> : 
              <MenuIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white shadow-lg z-50 px-4 py-4">
            <ul className="flex flex-col gap-3 text-[var(--neutral-07)]">
              {items.map((item: NavItem, index: number) => (
                <li 
                  key={index} 
                  className={item.isActive ? 'font-bold bg-[var(--neutral-03)] px-3 py-2 rounded-full' : 'px-3 py-2'}
                >
                  <a href={item.href} onClick={() => {
                    onItemClick?.(item);
                    setIsMobileMenuOpen(false);
                  }} className="flex items-center gap-2">
                    {React.isValidElement(item.icon) && React.cloneElement(item.icon as React.ReactElement<any>, { className: 'w-4 h-4' })}
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <Button label="Book A Table" disableHover={true} fullWidth size="sm" variant="primary"/>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button label="Book A Table" disableHover={true} size="sm" variant="primary" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;