
import React from 'react';
import { Project } from '../types';
import Icon from './Icon'; // Assuming Icon component can render a generic link icon or you use text

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-[#1F1F2B] backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 border-2 border-[#FF00A0]/70 flex flex-col"> {/* Updated colors */}
      {project.imageUrl && (
        <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-[#F3E600] mb-3">{project.title}</h3> {/* Updated text color */}
        <p className="text-[#A0A0CC] text-sm leading-relaxed mb-4 flex-grow">{project.description}</p> {/* Updated text color */}
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-[#00F0FF] mb-2">Tech Stack:</h4> {/* Updated text color */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="bg-[#00F0FF] text-[#101018] px-3 py-1 text-xs rounded-full shadow-sm"> {/* Updated colors */}
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-4">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[#101018] bg-[#F3E600] hover:bg-[#DBD000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F3E600] transition-colors" /* Updated colors */
          >
            <Icon name="github" className="w-5 h-5 mr-2" />
            View Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-[#00F0FF] text-sm font-medium rounded-md text-[#00F0FF] bg-transparent hover:bg-[#00F0FF]/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00F0FF] transition-colors" /* Updated colors */
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;