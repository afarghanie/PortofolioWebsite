
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
    <Section id={id} title={title} className="bg-white">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg md:text-xl mb-10 text-slate-600 leading-relaxed">
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
              className="group flex flex-col items-center text-[#2563eb] hover:text-slate-900 transition-colors duration-300"
            >
              <div className="p-4 bg-white group-hover:bg-slate-50 rounded-full shadow-md transition-all duration-300 transform group-hover:scale-110 border-2 border-[#2563eb]/40 group-hover:border-[#2563eb]">
                <Icon name={link.iconName} className="w-8 h-8 md:w-10 md:h-10 text-[#2563eb] group-hover:text-slate-900 transition-colors duration-300" />
              </div>
              <span className="mt-3 text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
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