
import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  titleAlign?: 'center' | 'left';
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  children, 
  className = '', 
  titleClassName = 'text-[#2563eb]',
  contentClassName = '',
  titleAlign = 'center'
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${contentClassName}`}>
        {title && (
          <div className={`${titleAlign === 'left' ? 'text-left' : 'text-center'} mb-12 md:mb-16`}>
            <h2 className={`text-3xl md:text-4xl font-bold ${titleClassName}`}>{title}</h2>
            <div className={`mt-2 h-1 w-24 bg-[#2563eb] rounded ${titleAlign === 'left' ? '' : 'mx-auto'}`} />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;