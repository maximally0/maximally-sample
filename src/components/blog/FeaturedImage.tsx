
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface FeaturedImageProps {
  image: string;
  title: string;
}

const FeaturedImage = ({ image, title }: FeaturedImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="maximally-container">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-xl">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <span className="text-gray-400">Loading image...</span>
              </div>
            )}
            <img 
              src={image}
              alt={title}
              className={cn(
                "w-full h-full object-cover transition-all duration-700 hover:scale-105",
                !imageLoaded && "opacity-0",
                imageLoaded && "opacity-100"
              )}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
                setImageLoaded(true);
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 lg:p-10 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
            <div className="max-w-3xl">
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold font-serif leading-tight">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedImage;
