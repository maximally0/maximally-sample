
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
}
