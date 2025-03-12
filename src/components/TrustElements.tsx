
import React, { useEffect, useRef } from 'react';
import { Shield, Award, Medal, ThumbsUp, FileText, Microscope, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TrustBadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const TrustBadge = ({
  icon,
  title,
  description,
  delay
}: TrustBadgeProps) => {
  const badgeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);
      }
    }, {
      threshold: 0.1
    });
    
    if (badgeRef.current) {
      observer.observe(badgeRef.current);
    }
    
    return () => {
      if (badgeRef.current) {
        observer.unobserve(badgeRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={badgeRef} className="reveal-on-scroll flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="w-16 h-16 bg-[#00E5FF]/10 rounded-full flex items-center justify-center mb-4 text-[#00E5FF]">
        {icon}
      </div>
      <h3 className="text-lg font-serif font-bold mb-2 text-maximally-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const TrustElements = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    }, {
      threshold: 0.1
    });
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const trustBadges = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Money-Back Guarantee",
      description: "We stand behind our transparent formula with a no-questions-asked guarantee if you're not completely satisfied.",
      delay: 100
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Radical Transparency",
      description: "We disclose every ingredient, source, and amount. No proprietary blends, no hidden ingredients.",
      delay: 200
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Science-Backed Formula",
      description: "Every strain and ingredient is selected based on clinical research, not marketing trends.",
      delay: 300
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: "Thousands of Happy Customers",
      description: "Join over 50,000 satisfied customers who've transformed their gut health with our transparent approach.",
      delay: 400
    }
  ];

  return (
    <section className="section-padding bg-[#F9FAFB]" ref={sectionRef}>
      <div className="maximally-container">
        {/* Section Title */}
        <div ref={titleRef} className="reveal-on-scroll text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FFD700] text-gray-800 text-sm font-medium mb-4 shadow-md">
            Why Trust Maximally
          </span>
          <h2 className="section-title mb-6">Transparency You Can Trust</h2>
          <p className="text-lg text-gray-600">
            The supplement industry is cluttered with flashy promises, but we believe in science, transparency, and uncompromising quality.
          </p>
        </div>
        
        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map((badge, index) => (
            <TrustBadge 
              key={index} 
              icon={badge.icon} 
              title={badge.title} 
              description={badge.description} 
              delay={badge.delay} 
            />
          ))}
        </div>
        
        {/* Transparency Statement */}
        <div className="mt-16 p-8 bg-white rounded-xl shadow-lg max-w-3xl mx-auto reveal-on-scroll">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-[#FF4D4D]/10 rounded-full flex items-center justify-center text-[#FF4D4D]">
              <Check className="w-8 h-8" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-center mb-4">Our Transparency Pledge</h3>
          <p className="text-gray-600 text-center mb-6">
            Every Maximally product is backed by clinical research, made with pure, effective ingredients, and undergoes rigorous lab testing—because you deserve the best.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center bg-[#00E5FF]/10 px-4 py-2 rounded-full">
              <Check className="w-4 h-4 text-[#00E5FF] mr-2" />
              <span className="text-sm font-medium">Full Ingredient Disclosure</span>
            </div>
            <div className="flex items-center bg-[#4ADE80]/10 px-4 py-2 rounded-full">
              <Check className="w-4 h-4 text-[#4ADE80] mr-2" />
              <span className="text-sm font-medium">Third-Party Tested</span>
            </div>
            <div className="flex items-center bg-[#FFD700]/10 px-4 py-2 rounded-full">
              <Check className="w-4 h-4 text-[#FFD700] mr-2" />
              <span className="text-sm font-medium">Research Citations Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustElements;
