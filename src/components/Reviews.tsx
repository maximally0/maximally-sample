
import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReviewProps {
  quote: string;
  author: string;
  rating: number;
  date: string;
  verified: boolean;
}

const reviewData: ReviewProps[] = [
  {
    quote: "I've tried countless probiotics over the years, but Maximally is truly exceptional. Within just two weeks, my digestion improved dramatically and bloating is now a thing of the past.",
    author: "Jennifer M.",
    rating: 5,
    date: "March 15, 2023",
    verified: true
  },
  {
    quote: "As someone who's struggled with digestive issues for years, finding Maximally has been life-changing. Not only has my gut health improved, but my energy levels are through the roof!",
    author: "Michael T.",
    rating: 5,
    date: "April 2, 2023",
    verified: true
  },
  {
    quote: "The difference in quality between Maximally and other probiotics is remarkable. My immune system seems stronger and I've noticed improvements in my skin clarity too. Worth every penny.",
    author: "Sarah K.",
    rating: 5,
    date: "February 10, 2023",
    verified: true
  },
  {
    quote: "After just one month of using Maximally, my digestive system feels completely reset. No more discomfort after meals and my energy levels have significantly increased.",
    author: "David P.",
    rating: 5,
    date: "May 18, 2023",
    verified: true
  },
  {
    quote: "I was skeptical about yet another probiotic, but the research behind Maximally convinced me to try it. I'm so glad I did - the results have exceeded my expectations in every way.",
    author: "Rachel W.",
    rating: 4,
    date: "January 28, 2023",
    verified: true
  }
];

const ReviewCard = ({ quote, author, rating, date, verified }: ReviewProps) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={cn(
              "w-5 h-5", 
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            )} 
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex justify-between items-end">
        <div>
          <p className="font-medium text-maximally-800">{author}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        {verified && (
          <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
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
    <section id="reviews" className="section-padding bg-gradient-to-b from-white to-maximally-50/30" ref={sectionRef}>
      <div className="maximally-container">
        {/* Section Title */}
        <div ref={titleRef} className="reveal-on-scroll text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-maximally-100 text-maximally-700 text-sm font-medium mb-4">
            Real Customer Experiences
          </span>
          <h2 className="section-title mb-6">What Our Community Is Saying</h2>
          <p className="text-lg text-gray-600">
            Thousands of customers have transformed their gut health with Maximally. Here are some of their stories.
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
            className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-maximally-700 hover:text-maximally-900 transition-colors focus:outline-none"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={next}
            className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-maximally-700 hover:text-maximally-900 transition-colors focus:outline-none"
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
                activeIndex === i ? "bg-maximally-600 w-8" : "bg-maximally-200"
              )}
              aria-label={`Go to review page ${i + 1}`}
            />
          ))}
        </div>
        
        {/* Amazon Rating Summary */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center">
              <div className="w-24 h-24 flex items-center justify-center bg-maximally-50 rounded-full mr-6">
                <span className="text-3xl font-bold text-maximally-700">4.8</span>
              </div>
              <div>
                <div className="flex mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={cn(
                        "w-6 h-6", 
                        i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      )} 
                    />
                  ))}
                </div>
                <p className="text-gray-600">Based on 1,200+ Amazon reviews</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-lg font-medium text-maximally-800 mb-2">
                Ranked #1 in Amazon's Probiotic Category
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
