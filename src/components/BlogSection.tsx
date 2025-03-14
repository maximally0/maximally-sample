
import React, { useEffect, useRef } from 'react';
import { ArrowRight, CalendarDays, Clock } from 'lucide-react';
import CTAButton from './CTAButton';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

// Import blog posts from the shared data file
import { blogPosts } from '@/pages/BlogData';

const BlogSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    }, {
      threshold: 0.1
    });

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  // Only display 3 most recent blog posts
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="maximally-container">
        <div ref={titleRef} className="text-center mb-16 opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
          <h2 className="font-serif text-4xl font-bold mb-4 text-maximally-900">Latest from Our Blog</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest articles on gut health, probiotics, and wellness
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <Link 
              to={`/blog/${post.slug}`} 
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg flex flex-col h-full"
            >
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
              
              <div className="p-6 flex-grow flex flex-col">
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
                
                <p className="text-gray-700 mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-end items-center pt-4 border-t border-gray-100 mt-auto">
                  <span className="text-[#00E5FF] font-medium text-sm flex items-center group">
                    Read More 
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <CTAButton 
            text="View All Articles" 
            href="/blog" 
            variant="outline" 
            size="md" 
            withArrow
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
