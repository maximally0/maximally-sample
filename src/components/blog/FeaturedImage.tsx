
import React from 'react';
import { cn } from '@/lib/utils';

interface FeaturedImageProps {
  image: string;
  title: string;
}

const FeaturedImage = ({ image, title }: FeaturedImageProps) => {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="maximally-container">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-xl">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <img 
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
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
