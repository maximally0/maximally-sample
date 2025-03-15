
import React from 'react';
import BlogCard from './BlogCard';
import { BlogPost } from '@/types/blog';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

interface BlogGridProps {
  posts: BlogPost[];
  searchQuery: string;
  selectedCategory: string;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
}

const BlogGrid = ({ 
  posts, 
  searchQuery, 
  selectedCategory,
  setSearchQuery,
  setSelectedCategory
}: BlogGridProps) => {
  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="maximally-container">
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-serif text-3xl font-bold text-maximally-900">
            {selectedCategory ? `${selectedCategory} Articles` : "Recent Articles"}
          </h2>
        </div>
        
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 mb-6">No articles found matching your search criteria.</p>
            <button 
              onClick={() => {setSearchQuery(""); setSelectedCategory("");}} 
              className="px-6 py-2 bg-[#00E5FF] text-white rounded-lg hover:bg-[#00E5FF]/90 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
        
        {/* Pagination */}
        {posts.length > 0 && (
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
