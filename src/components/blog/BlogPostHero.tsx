
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react';
import { BlogPost } from '@/types/blog';

interface BlogPostHeroProps {
  post: BlogPost;
}

const BlogPostHero = ({ post }: BlogPostHeroProps) => {
  const navigate = useNavigate();
  
  return (
    <section className="pt-14 pb-10 md:pt-20 border-b border-gray-200">
      <div className="maximally-container">
        <button 
          onClick={() => navigate('/blog')}
          className="group flex items-center text-gray-600 hover:text-[#00E5FF] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to all articles
        </button>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-block px-4 py-1.5 bg-[#00E5FF]/10 text-[#00E5FF] rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="flex items-center text-gray-500 text-sm">
              <CalendarDays className="w-4 h-4 mr-1.5" />
              {post.date}
            </span>
            <span className="flex items-center text-gray-500 text-sm">
              <Clock className="w-4 h-4 mr-1.5" />
              {post.readTime}
            </span>
          </div>
          
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance leading-tight text-maximally-900">
            {post.title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BlogPostHero;
