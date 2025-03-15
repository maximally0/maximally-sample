
import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BlogPostHero from '@/components/blog/BlogPostHero';
import FeaturedImage from '@/components/blog/FeaturedImage';
import BlogContent from '@/components/blog/BlogContent';
import RelatedArticles from '@/components/blog/RelatedArticles';
import CTASection from '@/components/blog/CTASection';
import CTAButton from '@/components/CTAButton';

// Import the blog posts data
import { blogPosts } from './BlogData';

const BlogPost = () => {
  const { slug } = useParams();
  
  // Find the blog post by slug
  const post = blogPosts.find(post => post.slug === slug);
  
  // If post not found, show error
  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="mb-6">Sorry, the article you're looking for doesn't exist or has been moved.</p>
            <CTAButton 
              text="Back to Blog" 
              href="/blog" 
              variant="primary" 
              size="md"
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Related posts (same category)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavBar />
      
      <main className="flex-grow pt-20">
        <BlogPostHero post={post} />
        <FeaturedImage image={post.image} title={post.title} />
        <BlogContent post={post} />
        <RelatedArticles posts={relatedPosts} />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
