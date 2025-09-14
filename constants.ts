import { Project, NavLink, SocialLink } from './types';
// import Topsis from './assets/topsis.png';
import SEO from './assets/seo.png';
import HRMS1 from './assets/HRMS1.png';
import HRMS2 from './assets/HRMS2.png';
import HRMS3 from './assets/HRMS3.png';
import HRMS4 from './assets/HRMS4.png';
import TOPSIS1 from './assets/TOPSIS1.png';
import TOPSIS2 from './assets/TOPSIS2.png';
import TOPSIS3 from './assets/TOPSIS3.png';
import TOPSIS4 from './assets/TOPSIS4.png';
import ERP1 from './assets/ERP1.png';
import ERP2 from './assets/ERP2.png';
import ERP3 from './assets/ERP3.png';
import ERP4 from './assets/ERP4.png';
import CRAWL1 from './assets/CRAWL1.png';
import CRAWL2 from './assets/CRAWL2.png';
import CRAWL3 from './assets/CRAWL34.png';
import CRAWL4 from './assets/CRAWL3.png';

export const NAV_LINKS: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-1',
    title: 'TOPSIS DSS',
    description: 'Developed a full-stack web application to facilitate complex decision-making using the Technique for Order of Preference by Similarity to Ideal Solution (TOPSIS) method.',
    imageUrls: [
      TOPSIS1,
      TOPSIS2,
      TOPSIS3,
      TOPSIS4,
    ],
    techStack: ['TypeScript','React','Flask','Material-UI'],
    repoUrl: 'https://github.com/afarghanie/TOPSIS_APPLICATION',
    // liveUrl: '#',
  },
  {
    id: 'project-2',
    title: 'Dynamic Web Crawler',
    description: 'A web crawler that can crawl a website and extract the data from the website build on top of Crawl4ai library.',
    imageUrls: [
      CRAWL1,
      CRAWL2,
      CRAWL3,
      CRAWL4,
    ],
    techStack: ['Python', 'Streamlit', 'FastApi', 'Crawl4ai'],
    repoUrl: 'https://github.com/afarghanie/Intention-Driven-Web-Scraper',
  },
  {
    id: 'project-3',
    title: 'SIPEGAWAI HRMS',
    description: 'Developed a modern HR platform with React and Supabase to centralize employee data, automate key administrative tasks, and provide role-based access for employees, managers, and HR personnel.',
    imageUrls: [
      HRMS1,
      HRMS2,
      HRMS3,
      HRMS4,
    ],
    techStack: ['Tailwind CSS', 'TypeScript', 'ShadCn', 'Supabase'],
    repoUrl: 'https://github.com/yourusername/pixel-portfolio-cms',
    liveUrl: '#',
  },
  {
    id: 'project-4',
    title: 'Faslun ERP System',
    description: 'Develop ERP System as Final Project on Enterprise System Subject. Contributed as a frontend team responsible for design and build user interface using figma, bootsrap 5 & native javascript.',
    imageUrls: [
      ERP1,
      ERP2,
      ERP3,
      ERP4,
    ],
    techStack: ['Bootsrap 5', 'JavaScript', 'Figma'],
    repoUrl: 'https://github.com/afarghanie/Seo-Metadata-Analyzer',
  },
];

export const SOCIAL_LINKS_DATA: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/afarghanie', iconName: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alavie-iftikar-farghanie-67b973248/', iconName: 'linkedin' },
  { name: 'Email', url: 'mailto:alaviefarghanie@gmail.com', iconName: 'mail' },
  { name: 'Instagram', url: 'https://www.instagram.com/alavie.farghanie/', iconName: 'instagram' },
];

export const ABOUT_ME_TEXT = `I'm Alavie I. Farghanie Undergraduate Student of Information System at UIN Jakarta. I'm an interested in Web Development and Data Engineering. I love this major because all the subject give me a final project to build something useful that also can sharpen my skills. This portfolio showcases some of my work and the technologies I'm proficient in. When I'm not coding, I enjoy exploring retro gaming, listening to Laufey, and tinkering with new tech.`;

    