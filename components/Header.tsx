
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
    <header className="bg-[#1A1A24] text-[#F3E600] border-b border-[#FF00A0]/60 shadow-lg sticky top-0 z-50"> {/* Updated colors */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand Name */}
          <a href="#" className="text-2xl font-bold tracking-tight hover:text-[#00F0FF] transition-colors"> {/* Updated hover color */}
            My Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-[#E0E0FF] hover:text-[#00F0FF] transition-colors px-3 py-2 rounded-md" /* Updated colors */
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
              className="text-[#F3E600] hover:text-[#00F0FF] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-2 rounded-md" /* Updated colors */
            >
              {isMobileMenuOpen ? <Icon name="close" className="w-7 h-7" /> : <Icon name="menu" className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1A1A24] border-t border-[#FF00A0]/40"> {/* Updated colors */}
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                className="block px-3 py-2 rounded-md text-base font-medium text-[#E0E0FF] hover:bg-[#F3E600]/20 hover:text-[#00F0FF] transition-colors" /* Updated colors */
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