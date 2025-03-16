
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface FeaturedImageProps {
  image: string;
  title: string;
}

const FeaturedImage = ({ image, title }: FeaturedImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Create SEO-friendly alt text by adding keywords
  const altText = `Maximally Probiotics - ${title} | Best Probiotic Supplement for Gut Health`;
  
  // Fallback image in case the main image fails to load
  const fallbackImage = "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80";
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className="py-12">
      <div className="maximally-container">
        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl">
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="w-12 h-12 border-4 border-maximally-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <img 
              src={imageError ? fallbackImage : image}
              alt={altText}
              className={cn(
                "w-full h-full object-cover transition-all duration-500 hover:scale-105",
                !imageLoaded && !imageError && "opacity-0",
                (imageLoaded || imageError) && "opacity-100"
              )}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="eager" // For improved SEO and page loading
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h2 className="text-white text-xl md:text-2xl font-bold text-balance line-clamp-2">{title}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedImage;
