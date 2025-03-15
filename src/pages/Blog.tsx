
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BlogHero from '@/components/blog/BlogHero';
import FeaturedArticle from '@/components/blog/FeaturedArticle';
import BlogGrid from '@/components/blog/BlogGrid';
import TopicsSection from '@/components/blog/TopicsSection';
import NewsletterSection from '@/components/blog/NewsletterSection';
import { blogPosts, categories } from './BlogData';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  // Filter blog posts based on search query and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="flex flex-col min-h-screen bg-[#f3f3f3]">
      <NavBar />
      
      <main className="flex-grow pt-20">
        <BlogHero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />
        
        <FeaturedArticle post={blogPosts[0]} />
        
        <BlogGrid 
          posts={filteredPosts}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          setSearchQuery={setSearchQuery}
          setSelectedCategory={setSelectedCategory}
        />
        
        <TopicsSection 
          categories={categories}
          blogPosts={blogPosts}
          setSelectedCategory={setSelectedCategory}
        />
        
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
