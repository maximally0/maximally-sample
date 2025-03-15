
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BlogPostHero from '@/components/blog/BlogPostHero';
import FeaturedImage from '@/components/blog/FeaturedImage';
import BlogContent from '@/components/blog/BlogContent';
import RelatedArticles from '@/components/blog/RelatedArticles';
import CTASection from '@/components/blog/CTASection';
import CTAButton from '@/components/CTAButton';
import { ExternalLink } from 'lucide-react';

// Import the blog posts data
import { blogPosts } from './BlogData';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the blog post by slug
  const post = blogPosts.find(post => post.slug === slug);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  // If post not found, show error
  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow flex items-center justify-center bg-gray-50">
          <div className="text-center p-8 max-w-lg mx-auto bg-white rounded-xl shadow-md">
            <h1 className="text-3xl font-bold mb-4 text-maximally-900">Article Not Found</h1>
            <p className="mb-6 text-gray-600">Sorry, the article you're looking for doesn't exist or has been moved.</p>
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
  
  // Related posts (same category, exclude current post)
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
        
        {/* External Links Section (if available) */}
        {post.externalLinks && post.externalLinks.length > 0 && (
          <section className="py-10 bg-gray-50">
            <div className="maximally-container">
              <div className="max-w-3xl mx-auto">
                <h3 className="font-serif text-xl font-bold mb-6 text-maximally-900">
                  Additional Resources & References
                </h3>
                <div className="space-y-4">
                  {post.externalLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-[#00E5FF] transition-colors group"
                    >
                      <div className="mr-4 flex-shrink-0 w-10 h-10 bg-[#00E5FF]/10 rounded-full flex items-center justify-center">
                        <ExternalLink className="w-5 h-5 text-[#00E5FF] group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <p className="font-medium text-maximally-900 group-hover:text-[#00E5FF] transition-colors">
                          {link.title}
                        </p>
                        <p className="text-sm text-gray-500 truncate max-w-md">
                          {link.url}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {relatedPosts.length > 0 && <RelatedArticles posts={relatedPosts} />}
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
