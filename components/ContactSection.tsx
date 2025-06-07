
import React from 'react';
import { SocialLink } from '../types';
import Section from './Section';
import Icon from './Icon';

interface ContactSectionProps {
  id: string;
  title: string;
  socialLinks: SocialLink[];
}

const ContactSection: React.FC<ContactSectionProps> = ({ id, title, socialLinks }) => {
  return (
    <Section id={id} title={title} className="bg-[#1A1A24]"> {/* Updated background color */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg md:text-xl mb-10 text-[#A0A0CC] leading-relaxed"> {/* Updated text color */}
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`My ${link.name} profile`}
              className="group flex flex-col items-center text-[#00F0FF] hover:text-[#F3E600] transition-colors duration-300" /* Updated text colors */
            >
              <div className="p-4 bg-[#1F1F2B]/80 group-hover:bg-[#F3E600]/20 rounded-full shadow-lg transition-all duration-300 transform group-hover:scale-110 border-2 border-[#00F0FF]/50 group-hover:border-[#F3E600]/70"> {/* Updated colors */}
                <Icon name={link.iconName} className="w-8 h-8 md:w-10 md:h-10 text-[#00F0FF] group-hover:text-[#F3E600] transition-colors duration-300" /> {/* Updated icon colors */}
              </div>
              <span className="mt-3 text-sm font-medium text-[#A0A0CC] group-hover:text-[#F3E600] transition-colors duration-300"> {/* Updated text colors */}
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;