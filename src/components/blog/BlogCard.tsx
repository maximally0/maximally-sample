
import React from 'react';
import { CalendarDays, Clock } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full text-xs font-medium">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
          <div className="flex items-center">
            <CalendarDays className="w-3 h-3 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className="font-serif text-xl font-bold mb-3 line-clamp-2 text-maximally-900">
          {post.title}
        </h3>
        
        <p className="text-gray-700 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex justify-end items-center pt-4 border-t border-gray-100">
          <CTAButton 
            text="Read More" 
            href={`/blog/${post.slug}`} 
            variant="text" 
            size="sm" 
            withArrow
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
