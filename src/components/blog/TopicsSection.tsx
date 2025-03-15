
import React from 'react';
import { Tag } from 'lucide-react';
import { BlogPost } from '@/types/blog';

interface TopicsSectionProps {
  categories: string[];
  blogPosts: BlogPost[];
  setSelectedCategory: (category: string) => void;
}

const TopicsSection = ({ categories, blogPosts, setSelectedCategory }: TopicsSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="maximally-container">
        <h2 className="font-serif text-3xl font-bold mb-10 text-maximally-900">Browse by Topic</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <button 
              key={index} 
              onClick={() => setSelectedCategory(category)}
              className="group bg-[#F9FAFB] hover:bg-[#00E5FF]/10 p-6 rounded-lg text-center transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mx-auto mb-4 shadow-sm group-hover:bg-white">
                <Tag className="w-6 h-6 text-[#00E5FF]" />
              </div>
              <h3 className="font-medium">{category}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {blogPosts.filter(post => post.category === category).length} Articles
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
