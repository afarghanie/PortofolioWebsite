
import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { NAV_LINKS, PROJECTS_DATA, SOCIAL_LINKS_DATA, ABOUT_ME_TEXT } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans flex flex-col">
      <Header navLinks={NAV_LINKS} />
      <main className="flex-grow">
        <AboutSection id="about" title="About Me" content={ABOUT_ME_TEXT} />
        <ProjectsSection id="projects" title="My Projects" projects={PROJECTS_DATA} />
        <ContactSection id="contact" title="Get In Touch" socialLinks={SOCIAL_LINKS_DATA} />
      </main>
      <Footer />
    </div>
  );
};

export default App;