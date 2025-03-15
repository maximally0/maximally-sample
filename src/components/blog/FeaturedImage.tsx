
import React from 'react';
import { cn } from '@/lib/utils';

interface FeaturedImageProps {
  image: string;
  title: string;
}

const FeaturedImage = ({ image, title }: FeaturedImageProps) => {
  return (
    <section className="py-12">
      <div className="maximally-container">
        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl">
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
            <img 
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
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
