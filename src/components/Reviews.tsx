
import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Sun, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReviewProps {
  quote: string;
  author: string;
  rating: number;
  date: string;
  verified: boolean;
  location?: string;
  image?: string;
}

const reviewData: ReviewProps[] = [
  {
    quote: "I was suffering from digestive issues for years. After trying Maximally, my gut health has dramatically improved! I feel so much happier and energetic throughout my day.",
    author: "Priya Sharma",
    rating: 5,
    date: "March 15, 2023",
    verified: true,
    location: "Mumbai",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Being in IT with long sitting hours, I had terrible digestive problems. Maximally probiotics have been a game-changer! My energy levels are fantastic now. Feeling like a day at the beach every day!",
    author: "Raj Patel",
    rating: 5,
    date: "April 2, 2023",
    verified: true,
    location: "Bengaluru",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "After my second child, my digestion was not working properly. Maximally helped me restore my gut balance. The quality is top-notch and I feel so happy and light now!",
    author: "Anjali Gupta",
    rating: 5,
    date: "February 10, 2023",
    verified: true,
    location: "New Delhi",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    quote: "My mother recommended Maximally to me when I was facing acidity issues. Within just two weeks, I could feel the difference. No more discomfort after meals, just happy vibes!",
    author: "Vikram Singh",
    rating: 5,
    date: "May 18, 2023",
    verified: true,
    location: "Chennai",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    quote: "I have tried many probiotics available in the market, but nothing compares to Maximally. The results are simply amazing and my digestion has improved 100%! My friends can't believe the change in me.",
    author: "Neha Verma",
    rating: 4,
    date: "January 28, 2023",
    verified: true,
    location: "Hyderabad",
    image: "https://randomuser.me/api/portraits/women/26.jpg"
  }
];

const ReviewCard = ({ quote, author, rating, date, verified, location, image }: ReviewProps) => {
  return (
    <div className="bg-gradient-to-b from-white to-cyan-50 rounded-xl p-6 md:p-8 shadow-md border border-cyan-100 hover:shadow-lg transition-all">
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
      <p className="text-gray-700 mb-6 italic text-sm md:text-base">"{quote}"</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {image ? (
            <img src={image} alt={author} className="w-10 h-10 rounded-full mr-3 object-cover" />
          ) : (
            <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center mr-3">
              <User className="w-5 h-5 text-cyan-600" />
            </div>
          )}
          <div>
            <p className="font-medium text-cyan-800">{author}</p>
            <div className="flex flex-wrap items-center gap-1">
              <p className="text-xs text-gray-500">{date}</p>
              {location && (
                <span className="text-xs text-gray-500">• {location}</span>
              )}
            </div>
          </div>
        </div>
        {verified && (
          <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-full whitespace-nowrap">
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
  
  // Responsive review display
  const [reviewsPerView, setReviewsPerView] = useState(3);
  
  useEffect(() => {
    const updateReviewsPerView = () => {
      if (window.innerWidth < 640) {
        setReviewsPerView(1);
      } else if (window.innerWidth < 1024) {
        setReviewsPerView(2);
      } else {
        setReviewsPerView(3);
      }
    };
    
    // Initial setup
    updateReviewsPerView();
    
    // Add listener for screen size changes
    window.addEventListener('resize', updateReviewsPerView);
    
    // Animation observer
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
      window.removeEventListener('resize', updateReviewsPerView);
    };
  }, []);
  
  const maxIndex = Math.max(0, Math.ceil(reviewData.length / reviewsPerView) - 1);
  
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
        <div ref={titleRef} className="reveal-on-scroll text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
            Happy Customers
          </span>
          <h2 className="section-title mb-4 text-cyan-900">Smiles from Our Community</h2>
          <p className="text-lg text-gray-600 mb-2">
            Thousands of happy customers across India have transformed their gut health with Maximally.
          </p>
          <div className="flex justify-center">
            <Sun className="w-6 h-6 text-amber-400 animate-pulse" />
          </div>
        </div>
        
        {/* Reviews Carousel */}
        <div className="relative px-8 md:px-10">
          <div className="overflow-hidden" ref={carouselRef}>
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {getVisibleReviews().map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows - Positioned for mobile and desktop */}
          <button 
            onClick={prev}
            className="absolute top-1/2 -left-2 md:-left-4 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md flex items-center justify-center text-cyan-700 hover:text-cyan-900 transition-colors focus:outline-none z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={next}
            className="absolute top-1/2 -right-2 md:-right-4 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md flex items-center justify-center text-cyan-700 hover:text-cyan-900 transition-colors focus:outline-none z-10"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
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
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-cyan-50 to-sky-50 rounded-xl p-6 md:p-8 shadow-md border border-cyan-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left">
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-amber-50 rounded-full mb-4 md:mb-0 md:mr-6 border-2 border-amber-100">
                <span className="text-2xl md:text-3xl font-bold text-amber-600">4.8</span>
              </div>
              <div>
                <div className="flex justify-center md:justify-start mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={cn(
                        "w-5 h-5 md:w-6 md:h-6", 
                        i < 5 ? "text-amber-400 fill-amber-400" : "text-gray-300"
                      )} 
                    />
                  ))}
                </div>
                <p className="text-sm md:text-base text-gray-600">Based on 1,200+ Amazon India reviews</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-base md:text-lg font-medium text-cyan-800 mb-2">
                #1 Best-Selling Probiotic on Amazon.in
              </p>
              <p className="text-xs md:text-sm text-gray-600">
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
