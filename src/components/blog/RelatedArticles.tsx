
import React from 'react';
import { BlogPost } from '@/types/blog';
import CTAButton from '@/components/CTAButton';

interface RelatedArticlesProps {
  posts: BlogPost[];
}

const RelatedArticles = ({ posts }: RelatedArticlesProps) => {
  if (posts.length === 0) return null;
  
  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="maximally-container">
        <h2 className="font-serif text-3xl font-bold mb-10 text-maximally-900">Related Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
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
                <h3 className="font-serif text-xl font-bold mb-3 line-clamp-2 text-maximally-900">
                  {post.title}
                </h3>
                
                <p className="text-gray-700 mb-4 line-clamp-2">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
