import { Project, NavLink, SocialLink } from './types';
import Topsis from './assets/topsis.png';
import SEO from './assets/seo.png';


export const NAV_LINKS: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-1',
    title: 'TOPSIS Decision Support System',
    description: 'An e-commerce platform for classic video games and consoles, featuring a nostalgic pixel-art design and real-time inventory updates.',
    imageUrls: [
      Topsis,
      'https://picsum.photos/seed/topsis2/800/500',
      'https://picsum.photos/seed/topsis3/800/500',
      'https://picsum.photos/seed/topsis4/800/500',
    ],
    techStack: ['TypeScript','PostgreSQL'],
    repoUrl: 'https://github.com/afarghanie/TOPSIS_APPLICATION',
    liveUrl: '#',
  },
  {
    id: 'project-2',
    title: 'Dynamic Web Crawler',
    description: 'A web crawler that can crawl a website and extract the data from the website build on top of Crawl4ai library.',
    imageUrls: [
      'https://picsum.photos/seed/project2/800/500',
      'https://picsum.photos/seed/project2b/800/500',
      'https://picsum.photos/seed/project2c/800/500',
      'https://picsum.photos/seed/project2d/800/500',
    ],
    techStack: ['Python', 'Streamlit', 'FastApi', 'Crawl4ai'],
    repoUrl: 'https://github.com/afarghanie/Intention-Driven-Web-Scraper',
  },
  {
    id: 'project-3',
    title: 'Human Resource Management System',
    description: 'Developed a modern HR platform with React and Supabase to centralize employee data, automate key administrative tasks, and provide role-based access for employees, managers, and HR personnel.',
    imageUrls: [
      'https://picsum.photos/seed/project3/800/500',
      'https://picsum.photos/seed/project3b/800/500',
      'https://picsum.photos/seed/project3c/800/500',
      'https://picsum.photos/seed/project3d/800/500',
    ],
    techStack: ['Tailwind CSS', 'TypeScript', 'ShadCn', 'Supabase'],
    repoUrl: 'https://github.com/yourusername/pixel-portfolio-cms',
    liveUrl: '#',
  },
  {
    id: 'project-4',
    title: 'Seo-Metadata-Analyzer',
    description: 'A weather application with a charming 8-bit retro interface, providing current weather and forecasts using a public weather API.',
    imageUrls: [
      SEO,
      'https://picsum.photos/seed/seo2/800/500',
      'https://picsum.photos/seed/seo3/800/500',
      'https://picsum.photos/seed/seo4/800/500',
    ],
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

    