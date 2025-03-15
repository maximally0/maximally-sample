
import React from 'react';
import { Search } from 'lucide-react';

interface BlogHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

const BlogHero = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory, 
  categories 
}: BlogHeroProps) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#00E5FF]/10 to-[#4ADE80]/10">
      <div className="maximally-container">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-maximally-900">
            Maximally Blog
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Transparent science, honest information, and actionable insights for your gut health journey.
          </p>
          
          {/* Search bar */}
          <div className="relative max-w-xl mx-auto mb-8">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-5 py-3 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === "" ? "bg-[#00E5FF] text-white" : "bg-white text-gray-700 hover:bg-[#00E5FF]/10"}`}
              onClick={() => setSelectedCategory("")}
            >
              All
            </button>
            {categories.map((category, index) => (
              <button 
                key={index} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category ? "bg-[#00E5FF] text-white" : "bg-white text-gray-700 hover:bg-[#00E5FF]/10"}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
