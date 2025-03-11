
import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReviewProps {
  quote: string;
  author: string;
  rating: number;
  date: string;
  verified: boolean;
  location?: string;
}

const reviewData: ReviewProps[] = [
  {
    quote: "I was suffering from digestive issues for years. After trying Maximally, my gut health has dramatically improved! Even my family members have noticed the positive change in me.",
    author: "Priya Sharma",
    rating: 5,
    date: "March 15, 2023",
    verified: true,
    location: "Mumbai"
  },
  {
    quote: "Being a software professional with long sitting hours, I had terrible digestive problems. Maximally probiotics have been a game-changer! My energy levels are absolutely fantastic now.",
    author: "Raj Patel",
    rating: 5,
    date: "April 2, 2023",
    verified: true,
    location: "Bengaluru"
  },
  {
    quote: "After my second child, my digestion was not working properly. Maximally helped me restore my gut balance. The quality is top-notch and worth every rupee!",
    author: "Anjali Gupta",
    rating: 5,
    date: "February 10, 2023",
    verified: true,
    location: "New Delhi"
  },
  {
    quote: "My mother recommended Maximally to me when I was facing acidity issues. Within just two weeks, I could feel the difference. No more discomfort after meals!",
    author: "Vikram Singh",
    rating: 5,
    date: "May 18, 2023",
    verified: true,
    location: "Chennai"
  },
  {
    quote: "I have tried many probiotics available in the market, but nothing compares to Maximally. The results are simply amazing and my digestion has improved 100%!",
    author: "Neha Verma",
    rating: 4,
    date: "January 28, 2023",
    verified: true,
    location: "Hyderabad"
  }
];

const ReviewCard = ({ quote, author, rating, date, verified, location }: ReviewProps) => {
  return (
    <div className="bg-gradient-to-b from-white to-cyan-50 rounded-xl p-8 shadow-md border border-cyan-100 hover:shadow-lg transition-all">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={cn(
              "w-5 h-5", 
              i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
            )} 
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex justify-between items-end">
        <div>
          <p className="font-medium text-cyan-800">{author}</p>
          <div className="flex items-center gap-1">
            <p className="text-sm text-gray-500">{date}</p>
            {location && (
              <span className="text-sm text-gray-500">• {location}</span>
            )}
          </div>
        </div>
        {verified && (
          <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-full">
            Verified Purchase
          </span>
        )}
      </div>
    </div>
  );
};

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  
  const reviewsPerView = 3;
  const maxIndex = Math.ceil(reviewData.length / reviewsPerView) - 1;
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      },
      { threshold: 0.1 }
    );
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  
  const next = () => {
    setActiveIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };
  
  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };
  
  // Handle responsive views
  const getVisibleReviews = () => {
    const startIndex = activeIndex * reviewsPerView;
    return reviewData.slice(startIndex, startIndex + reviewsPerView);
  };

  return (
    <section id="reviews" className="section-padding bg-gradient-to-b from-sky-50 to-cyan-50/30" ref={sectionRef}>
      <div className="maximally-container">
        {/* Section Title */}
        <div ref={titleRef} className="reveal-on-scroll text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
            Customer Stories
          </span>
          <h2 className="section-title mb-6 text-cyan-900">Hear From Our Community</h2>
          <p className="text-lg text-gray-600">
            Thousands of happy customers across India have transformed their gut health with Maximally. Read their experiences.
          </p>
        </div>
        
        {/* Reviews Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={carouselRef}>
            <div 
              className="hidden md:grid md:grid-cols-3 gap-6"
            >
              {getVisibleReviews().map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
            
            {/* Mobile Carousel */}
            <div className="block md:hidden">
              <ReviewCard {...reviewData[activeIndex]} />
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-cyan-700 hover:text-cyan-900 transition-colors focus:outline-none"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={next}
            className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-cyan-700 hover:text-cyan-900 transition-colors focus:outline-none"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(reviewData.length / reviewsPerView) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                activeIndex === i ? "bg-cyan-600 w-8" : "bg-cyan-200"
              )}
              aria-label={`Go to review page ${i + 1}`}
            />
          ))}
        </div>
        
        {/* Amazon Rating Summary */}
        <div className="mt-16 bg-gradient-to-r from-cyan-50 to-sky-50 rounded-xl p-8 shadow-md border border-cyan-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center">
              <div className="w-24 h-24 flex items-center justify-center bg-amber-50 rounded-full mr-6 border-2 border-amber-100">
                <span className="text-3xl font-bold text-amber-600">4.8</span>
              </div>
              <div>
                <div className="flex mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={cn(
                        "w-6 h-6", 
                        i < 5 ? "text-amber-400 fill-amber-400" : "text-gray-300"
                      )} 
                    />
                  ))}
                </div>
                <p className="text-gray-600">Based on 1,200+ Amazon India reviews</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-lg font-medium text-cyan-800 mb-2">
                #1 Best-Selling Probiotic on Amazon.in
              </p>
              <p className="text-sm text-gray-600">
                For three consecutive months in 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
