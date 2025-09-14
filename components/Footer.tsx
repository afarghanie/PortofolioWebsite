
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 py-8 text-center border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm">
          &copy; {currentYear} Your Name Here. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-slate-500">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;