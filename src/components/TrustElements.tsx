import React, { useEffect, useRef } from 'react';
import { Shield, Award, Medal, ThumbsUp } from 'lucide-react';
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
  return <div ref={badgeRef} className="reveal-on-scroll flex flex-col items-center text-center p-6">
      <div className="w-16 h-16 bg-maximally-50 rounded-full flex items-center justify-center mb-4 text-maximally-600">
        {icon}
      </div>
      <h3 className="text-lg font-serif font-bold mb-2 text-maximally-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>;
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
  const trustBadges = [{
    icon: <Shield className="w-8 h-8" />,
    title: "100% Money-Back Guarantee",
    description: "We stand behind our product with a no-questions-asked guarantee if you're not completely satisfied.",
    delay: 100
  }, {
    icon: <Award className="w-8 h-8" />,
    title: "Premium Quality",
    description: "Our probiotics exceed industry standards for potency, purity, and effectiveness.",
    delay: 200
  }, {
    icon: <Medal className="w-8 h-8" />,
    title: "Expert Formulated",
    description: "Developed by microbiome specialists with decades of research experience.",
    delay: 300
  }, {
    icon: <ThumbsUp className="w-8 h-8" />,
    title: "Thousands of Happy Customers",
    description: "Join over 50,000 satisfied customers who've transformed their gut health.",
    delay: 400
  }];
  return <section className="section-padding bg-white" ref={sectionRef}>
      <div className="maximally-container">
        {/* Section Title */}
        <div ref={titleRef} className="reveal-on-scroll text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-maximally-100 text-maximally-700 text-sm font-medium mb-4">
            Why Trust Maximally
          </span>
          <h2 className="section-title mb-6">We Hold Ourselves to the Highest Standards</h2>
          <p className="text-lg text-gray-600">
            Quality, transparency, and effectiveness are the cornerstones of everything we create.
          </p>
        </div>
        
        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map((badge, index) => <TrustBadge key={index} icon={badge.icon} title={badge.title} description={badge.description} delay={badge.delay} />)}
        </div>
        
        {/* Doctor Endorsement */}
        
      </div>
    </section>;
};
export default TrustElements;