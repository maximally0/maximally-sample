import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import CTAButton from './CTAButton';
import { cn } from '@/lib/utils';
const BlogSection = () => {
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
  return;
};
export default BlogSection;