
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
  metaDescription?: string; // Added for SEO
  keywords?: string[]; // Added for SEO
  author?: string; // Added for SEO
  externalLinks?: Array<{
    text: string;
    url: string;
  }>;
}
