
import React, { useMemo, useState } from 'react';
import { Project } from '../types';
import Icon from './Icon'; // Assuming Icon component can render a generic link icon or you use text

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const images: string[] = useMemo(() => {
    if (project.imageUrls && project.imageUrls.length > 0) return project.imageUrls;
    if (project.imageUrl) return [project.imageUrl];
    return [];
  }, [project.imageUrls, project.imageUrl]);

  const [activeIndex, setActiveIndex] = useState(0);

  const hasMultiple = images.length > 1;

  const goPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg border border-slate-200 flex flex-col">
      {images.length > 0 && (
        <div className="relative w-full h-56">
          <img src={images[activeIndex]} alt={project.title} className="w-full h-56 object-cover" />
          {hasMultiple && (
            <>
              <button aria-label="Previous image" onClick={goPrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 rounded-full p-1 shadow">‹</button>
              <button aria-label="Next image" onClick={goNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 rounded-full p-1 shadow">›</button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_, idx) => (
                  <span key={idx} className={`h-1.5 w-1.5 rounded-full ${idx === activeIndex ? 'bg-white' : 'bg-white/60'}`} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-slate-900 mb-3">{project.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-[#2563eb] mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="bg-[#2563eb] text-white px-3 py-1 text-xs rounded-full shadow-sm">
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
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#2563eb] hover:bg-[#1e40af] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563eb] transition-colors"
          >
            <Icon name="github" className="w-5 h-5 mr-2" />
            View Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-[#2563eb] text-sm font-medium rounded-md text-[#2563eb] bg-transparent hover:bg-[#2563eb]/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563eb] transition-colors"
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