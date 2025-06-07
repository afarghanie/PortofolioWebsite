
import { Project, NavLink, SocialLink } from './types';
import TOPSIS from '../assets/topsis.png'; 
import SEO from '../assets/seo.png';


export const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-1',
    title: TOPSIS,
    description: 'An e-commerce platform for classic video games and consoles, featuring a nostalgic pixel-art design and real-time inventory updates.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    techStack: ['TypeScript','PostgreSQL'],
    repoUrl: 'https://github.com/afarghanie/TOPSIS_APPLICATION',
    liveUrl: '#',
  },
  {
    id: 'project-2',
    title: 'RAG Chat Bot',
    description: 'A web-based application that allows users to create synthwave tracks using a virtual synthesizer and drum machine.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    techStack: ['Python', 'Streamlit', 'Typescript', 'ChromaDB'],
    repoUrl: 'https://github.com/afarghanie/RAG_CHATBOT',
  },
  {
    id: 'project-3',
    title: 'Podomoro Timer Website',
    description: 'A custom Content Management System designed for artists to easily update and showcase their pixel art portfolios.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    techStack: ['Next.js', 'GraphQL', 'Strapi', 'Material UI'],
    repoUrl: 'https://github.com/yourusername/pixel-portfolio-cms',
    liveUrl: '#',
  },
  {
    id: 'project-4',
    title: 'Seo-Metadata-Analyzer',
    description: 'A weather application with a charming 8-bit retro interface, providing current weather and forecasts using a public weather API.',
    imageUrl: SEO,
    techStack: ['TypeScript', 'Tailwind CSS', 'ShadCn'],
    repoUrl: 'https://github.com/afarghanie/Seo-Metadata-Analyzer',
  },
];

export const SOCIAL_LINKS_DATA: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/afarghanie', iconName: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alavie-iftikar-farghanie-67b973248/', iconName: 'linkedin' },
  { name: 'Email', url: 'mailto:alaviefarghanie@gmail.com', iconName: 'mail' },
  { name: 'Instagram', url: 'https://www.instagram.com/alavie.farghanie/', iconName: 'instagram' },
];

export const ABOUT_ME_TEXT = `! I'm a passionate frontend developer with a love for creating intuitive, dynamic, and visually appealing web experiences. With a strong foundation in modern JavaScript frameworks like React and a keen eye for design, I strive to build applications that are not only functional but also delightful to use. This portfolio showcases some of my work and the technologies I'm proficient in. When I'm not coding, I enjoy exploring retro gaming, listening to synthwave, and tinkering with new tech.`;

    