
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D12] text-[#A0A0CC] py-8 text-center border-t border-[#FF00A0]/60"> {/* Updated colors and added border */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm">
          &copy; {currentYear} Your Name Here. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-[#8080B0]"> {/* Slightly more muted text color */}
          Built with React, TypeScript, and Tailwind CSS. Inspired by cyberpunk aesthetics.
        </p>
      </div>
    </footer>
  );
};

export default Footer;