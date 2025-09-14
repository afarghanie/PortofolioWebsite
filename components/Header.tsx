
import React, { useState } from 'react';
import { NavLink } from '../types';
import Icon from './Icon';

interface HeaderProps {
  navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white text-slate-900 border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand Name */}
          <a href="#" className="text-2xl font-semibold tracking-tight hover:text-[#2563eb] transition-colors">
            Alavie
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-slate-700 hover:text-[#2563eb] transition-colors px-3 py-2 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="text-slate-900 hover:text-[#2563eb] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2563eb] p-2 rounded-md"
            >
              {isMobileMenuOpen ? <Icon name="close" className="w-7 h-7" /> : <Icon name="menu" className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-[#2563eb]/10 hover:text-[#2563eb] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;