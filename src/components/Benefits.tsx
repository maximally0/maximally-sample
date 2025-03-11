
import React, { useEffect, useRef } from 'react';
import { Heart, Dna, Leaf, Microscope, PillBottle, TestTube } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const BenefitCard = ({ icon, title, description, delay }: BenefitProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="reveal-on-scroll flex flex-col bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="w-14 h-14 bg-maximally-50 rounded-lg flex items-center justify-center mb-6 text-maximally-600">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold mb-3 text-maximally-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Benefits = () => {
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
  
  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Digestive Harmony",
      description: "Balance your gut flora and support optimal digestive function with our carefully selected probiotic strains.",
      delay: 100
    },
    {
      icon: <Dna className="w-8 h-8" />,
      title: "Immune Support",
      description: "Strengthen your body's natural defenses with our scientifically-backed formula that supports immune system function.",
      delay: 200
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Enhanced Vitality",
      description: "Experience increased energy and overall wellbeing as your body absorbs nutrients more effectively.",
      delay: 300
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Researched Formula",
      description: "Our proprietary blend is based on cutting-edge microbiome research for maximum effectiveness.",
      delay: 400
    },
    {
      icon: <PillBottle className="w-8 h-8" />,
      title: "Premium Ingredients",
      description: "Each capsule contains lab-verified probiotic strains that maintain potency throughout their shelf life.",
      delay: 500
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Scientific Validation",
      description: "Every batch undergoes rigorous testing to ensure purity, potency, and effectiveness.",
      delay: 600
    }
  ];

  return (
    <section id="benefits" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-maximally-50 rounded-full opacity-70"></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-maximally-50 rounded-full opacity-40"></div>
      </div>
      
      <div className="maximally-container">
        {/* Section Title */}
        <div ref={titleRef} className="reveal-on-scroll text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-maximally-100 text-maximally-700 text-sm font-medium mb-4">
            Science-Backed Benefits
          </span>
          <h2 className="section-title mb-6">Experience Remarkable Transformation Through Gut Health</h2>
          <p className="text-lg text-gray-600">
            Our premium probiotic doesn't just address symptoms—it targets the root cause for holistic health improvement.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={benefit.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
