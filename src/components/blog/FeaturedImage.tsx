
import React from 'react';

interface FeaturedImageProps {
  image: string;
  title: string;
}

const FeaturedImage = ({ image, title }: FeaturedImageProps) => {
  return (
    <section className="py-8">
      <div className="maximally-container">
        <div className="relative max-w-4xl mx-auto h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedImage;
