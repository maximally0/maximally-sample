
import React from 'react';
import { CalendarDays, Clock } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import { BlogPost } from '@/types/blog';

interface FeaturedArticleProps {
  post: BlogPost;
}

const FeaturedArticle = ({ post }: FeaturedArticleProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="maximally-container">
        <h2 className="font-serif text-3xl font-bold mb-10 text-maximally-900">Featured Article</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-lg aspect-video shadow-lg">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 bg-[#00E5FF]/10 text-[#00E5FF] rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </span>
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-maximally-900">
              {post.title}
            </h3>
            
            <p className="text-gray-700 mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex items-center text-gray-500 text-sm mb-6">
              <CalendarDays className="w-4 h-4 mr-2" />
              <span>{post.date}</span>
            </div>
            
            <CTAButton 
              text="Read Full Article" 
              href={`/blog/${post.slug}`} 
              variant="outline" 
              size="md" 
              withArrow
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
