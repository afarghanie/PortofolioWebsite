import React from 'react';
import Section from './Section';

interface AboutSectionProps {
  id: string;
  title: string;
  content: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id, title, content }) => {
  return (
    <Section id={id} title={title} className="bg-[#1A1A24]"> {/* Updated background color */}
      <div className="text-center max-w-3xl mx-auto">
        <img
          src="/assets/profilepicture.jpg" // Updated image path
          alt="Profile"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-8 shadow-xl border-4 border-[#00F0FF]" /* Updated border color */
        />
        <p className="text-lg md:text-xl leading-relaxed text-[#A0A0CC] text-justify"> {/* Updated text color and added text-justify */}
          {content}
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;