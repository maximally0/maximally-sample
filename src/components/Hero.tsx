
import React, { useEffect, useState } from 'react';
import CTAButton from './CTAButton';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a small delay for animation purposes
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-maximally-100/70 to-transparent rounded-bl-[50%] opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-maximally-200/50 to-transparent rounded-tr-[40%]"></div>
      </div>
      
      <div className="maximally-container relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Hero Content */}
          <div className={`flex flex-col space-y-6 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Top Tag */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-maximally-100 text-maximally-700 text-sm font-medium self-start">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>Premium Probiotics</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-maximally-900">
              Elevate Your Gut Health to <span className="text-maximally-600">Extraordinary</span> Levels
            </h1>
            
            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              Our scientifically formulated probiotic combines 50 billion CFU and 15 diverse strains to transform your digestive wellness and immune support.
            </p>
            
            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <CTAButton 
                text="Buy on Amazon" 
                href="https://amazon.com" 
                variant="primary" 
                size="lg" 
                withArrow
                className="sm:w-auto w-full"
              />
              <CTAButton 
                text="Learn More" 
                href="#benefits" 
                variant="outline" 
                size="lg"
                className="sm:w-auto w-full"
              />
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-2">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm p-2">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/3263/3263268.png" 
                    alt="GMP Certified" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="ml-2 text-sm font-medium">GMP Certified</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm p-2">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/2767/2767194.png" 
                    alt="Lab Tested" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="ml-2 text-sm font-medium">Lab Tested</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm p-2">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/6780/6780958.png" 
                    alt="Non-GMO" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="ml-2 text-sm font-medium">Non-GMO</span>
              </div>
            </div>
          </div>
          
          {/* Hero Product Image */}
          <div className={`flex justify-center transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Main Product Image */}
              <div className="relative z-10 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1260&q=80" 
                  alt="Maximally Probiotic Bottle" 
                  className="max-w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-1/4 -right-6 w-24 h-24 bg-maximally-100 rounded-full filter blur-xl opacity-80 animate-pulse"></div>
              <div className="absolute bottom-1/4 -left-8 w-32 h-32 bg-maximally-200 rounded-full filter blur-xl opacity-60 animate-pulse delay-1000"></div>
              
              {/* Abstract line decorations */}
              <svg className="absolute -bottom-10 -left-16 w-32 h-32 text-maximally-300 opacity-60 animate-rotate-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M37.5,-65.4C46.9,-55.3,51.4,-40.9,58.2,-27.3C65,-13.8,74.2,-0.9,71.4,9.4C68.6,19.7,53.8,27.5,43,38C32.2,48.6,25.4,62,14.6,68.7C3.9,75.4,-10.7,75.4,-22.5,69.7C-34.2,64,-43.1,52.7,-52.9,41.5C-62.7,30.3,-73.5,19.3,-78.3,5.1C-83.1,-9.1,-81.9,-26.5,-72.9,-38.2C-63.9,-49.9,-47,-56,-32.1,-65.7C-17.1,-75.3,-4.3,-88.5,7,-87.8C18.3,-87.2,28.1,-75.6,37.5,-65.4Z" transform="translate(100 100)" />
              </svg>
              
              {/* Highlight badge */}
              <div className="absolute top-6 -right-6 bg-white px-4 py-2 rounded-lg shadow-lg transform rotate-12 z-20">
                <span className="text-maximally-700 font-bold">50 Billion CFU</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
