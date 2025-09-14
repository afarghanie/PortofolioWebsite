import React from 'react';
import { SocialLink } from '../types';
import Icon from './Icon';

interface HomeSectionProps {
  id: string;
  name: string;
  title?: string;
  socialLinks: SocialLink[];
  imageUrl: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({ id, name, title = 'Web Developer', socialLinks, imageUrl }) => {
  const filteredLinks = socialLinks.filter((l) => ['GitHub', 'LinkedIn', 'Instagram'].includes(l.name));

  return (
    <section id={id} className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Hi,
            <br />
            I'am <span className="text-[#2563eb]">{name}</span>
            <br />
            {title}
          </p>
          <div className="mt-8">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#2563eb] text-white font-medium shadow-sm hover:bg-[#1e40af] transition-colors">
              Contact
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6">
            {filteredLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-slate-700 hover:text-[#2563eb] transition-colors">
                <Icon name={link.iconName} className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <svg viewBox="0 0 600 600" className="w-full h-auto drop-shadow-xl">
            <defs>
              <clipPath id={`blobClip-${id}`} clipPathUnits="userSpaceOnUse">
                <path d="M438.3 102.9c52.6 40.2 94.8 104.8 95.5 170.1.8 65.3-39.8 131.3-94.6 173.2-54.7 41.9-123.5 59.7-189.3 44.8-65.8-14.8-128.6-62.4-155.7-121.8-27.1-59.4-18.6-130.6 18.1-185.5 36.6-54.9 98.4-93.5 165.1-102.4 66.6-8.9 127.3 10.9 161 21.6 33.7 10.7 47.3 10 0 0" />
              </clipPath>
            </defs>
            <path d="M438.3 102.9c52.6 40.2 94.8 104.8 95.5 170.1.8 65.3-39.8 131.3-94.6 173.2-54.7 41.9-123.5 59.7-189.3 44.8-65.8-14.8-128.6-62.4-155.7-121.8-27.1-59.4-18.6-130.6 18.1-185.5 36.6-54.9 98.4-93.5 165.1-102.4 66.6-8.9 127.3 10.9 161 21.6 33.7 10.7 47.3 10 0 0" fill="#2563eb" />
            <image href={imageUrl} x={0} y={0} width={600} height={600} preserveAspectRatio="xMidYMid slice" clipPath={`url(#blobClip-${id})`} />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;


