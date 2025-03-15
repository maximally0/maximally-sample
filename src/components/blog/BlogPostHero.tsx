
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface BlogPostHeroProps {
  post: BlogPost;
}

const BlogPostHero = ({ post }: BlogPostHeroProps) => {
  const navigate = useNavigate();
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      })
      .catch(err => console.error('Error sharing:', err));
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };
  
  return (
    <section className={cn(
      "pt-16 pb-10 md:pt-24 border-b border-gray-200",
      post.heroLayout === 'wide' ? 'bg-white' : 'bg-gray-50',
      post.heroLayout === 'fullscreen' ? 'min-h-[50vh] flex items-center' : ''
    )}>
      <div className="maximally-container">
        <button 
          onClick={() => navigate('/blog')}
          className="group flex items-center text-gray-600 hover:text-[#00E5FF] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to all articles
        </button>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-block px-4 py-1.5 bg-[#00E5FF]/10 text-[#00E5FF] rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="flex items-center text-gray-500 text-sm">
              <CalendarDays className="w-4 h-4 mr-1.5" />
              {post.date}
            </span>
            <span className="flex items-center text-gray-500 text-sm">
              <Clock className="w-4 h-4 mr-1.5" />
              {post.readTime}
            </span>
          </div>
          
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance leading-tight text-maximally-900">
            {post.title}
          </h1>
          
          <p className="text-gray-700 text-lg mb-8 max-w-2xl">
            {post.excerpt}
          </p>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold",
                post.authorImage ? "p-0 overflow-hidden" : "bg-gradient-to-r from-[#00E5FF] to-[#32a0f8]"
              )}>
                {post.authorImage ? (
                  <img 
                    src={post.authorImage} 
                    alt={post.author || "Author"} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = 'M';
                    }}
                  />
                ) : (
                  "M"
                )}
              </div>
              <div className="ml-3">
                <p className="font-medium text-maximally-900">{post.author || "Maximally Team"}</p>
                <p className="text-sm text-gray-500">{post.authorTitle || "Health & Wellness Experts"}</p>
              </div>
            </div>
            
            <button 
              onClick={handleShare}
              className="flex items-center text-gray-500 hover:text-[#00E5FF] transition-colors"
            >
              <Share2 className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostHero;
