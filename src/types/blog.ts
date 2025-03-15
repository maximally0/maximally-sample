
export interface ExternalLink {
  title: string;
  url: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  image: string;
  content?: string;
  externalLinks?: ExternalLink[];
  
  // Adding new fields to enhance content display
  author?: string;
  authorTitle?: string;
  authorImage?: string;
  tags?: string[];
  featured?: boolean;
  heroLayout?: 'standard' | 'wide' | 'fullscreen';
}
