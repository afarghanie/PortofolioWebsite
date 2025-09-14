
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string; // Deprecated: prefer imageUrls
  imageUrls?: string[]; // Optional multiple images for the project
  techStack: string[];
  repoUrl: string;
  liveUrl?: string; // Optional live demo link
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: 'github' | 'linkedin' | 'mail' | 'instagram';
}

// Add other shared types here if needed
    