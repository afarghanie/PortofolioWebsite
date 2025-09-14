import React from 'react';
import Section from './Section';
import profileImage from '../assets/og.jpg';

interface AboutSectionProps {
  id: string;
  title: string;
  content: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id, title, content }) => {
  return (
    <Section id={id} title={title} className="bg-white" titleClassName="text-[#2563eb] text-left">
      <div className="grid grid-cols-1 md:grid-cols-[360px,1fr] gap-10 items-center">
        <img
          src={profileImage}
          alt="Profile photo"
          className="w-full h-[420px] object-cover rounded-lg shadow-md"
        />
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">I'm Alavie</h3>
          <p className="text-base md:text-lg leading-relaxed text-slate-600">
            {content}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;