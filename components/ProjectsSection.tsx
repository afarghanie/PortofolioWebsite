
import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import Section from './Section';

interface ProjectsSectionProps {
  id: string;
  title: string;
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id, title, projects }) => {
  return (
    <Section id={id} title={title} className="bg-[#101018]"> {/* Updated background color */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-[#A0A0CC]">No projects to display yet. Check back soon!</p> /* Updated text color */
      )}
    </Section>
  );
};

export default ProjectsSection;