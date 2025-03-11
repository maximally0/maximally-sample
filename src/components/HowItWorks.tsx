
import React, { useEffect, useRef } from 'react';
import CTAButton from './CTAButton';
import { cn } from '@/lib/utils';

interface StepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

const Step = ({ number, title, description, delay }: StepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (stepRef.current) {
      observer.observe(stepRef.current);
    }
    
    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={stepRef}
      className="reveal-on-scroll flex flex-col md:flex-row items-start gap-4 md:gap-6"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-maximally-100 flex items-center justify-center text-maximally-800 font-bold text-xl">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-serif font-bold mb-2 text-maximally-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  
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
  
  const steps = [
    {
      number: 1,
      title: "Take One Capsule Daily",
      description: "For optimal results, take one Maximally probiotic capsule with your morning meal. The specialized enteric coating ensures probiotics reach your intestines alive and effective.",
      delay: 100
    },
    {
      number: 2,
      title: "Colonization Begins",
      description: "Within days, our specialized probiotic strains begin colonizing your gut, creating a balanced microbiome that supports optimal digestive function and nutrient absorption.",
      delay: 200
    },
    {
      number: 3,
      title: "Experience Initial Benefits",
      description: "Many users report improved digestion and reduced bloating within the first week. Your body is beginning to respond to the improved gut environment.",
      delay: 300
    },
    {
      number: 4,
      title: "Complete Microbiome Transformation",
      description: "After 4-6 weeks of consistent use, experience the full range of benefits as your gut microbiome reaches optimal balance, supporting overall health, immunity, and vitality.",
      delay: 400
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-maximally-50/50" ref={sectionRef}>
      <div className="maximally-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1616077167599-cad3d31940b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Probiotic Science" 
                className="rounded-xl shadow-lg animate-float max-w-full h-auto"
              />
              
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-maximally-100 rounded-full animate-pulse"></div>
              <div className="absolute -top-6 -left-6 p-4 bg-white rounded-lg shadow-lg z-10 rotate-3">
                <span className="text-sm font-medium text-maximally-700">Award-Winning Formula</span>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="order-1 lg:order-2">
            {/* Section Title */}
            <div ref={titleRef} className="reveal-on-scroll mb-10">
              <span className="inline-block px-3 py-1 rounded-full bg-maximally-100 text-maximally-700 text-sm font-medium mb-4">
                Simple 4-Step Process
              </span>
              <h2 className="section-title mb-6">How Maximally Works Its Magic</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our premium probiotic doesn't just work—it transforms your gut health through a scientifically designed process that delivers results.
              </p>
            </div>
            
            {/* Steps */}
            <div className="space-y-10 mb-10">
              {steps.map((step, index) => (
                <Step 
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  delay={step.delay}
                />
              ))}
            </div>
            
            {/* CTA */}
            <div className="mt-8">
              <CTAButton 
                text="Experience the Transformation" 
                href="https://amazon.com" 
                variant="primary" 
                size="lg" 
                withArrow
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
