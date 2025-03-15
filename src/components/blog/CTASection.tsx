
import React from 'react';
import CTAButton from '@/components/CTAButton';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#00E5FF] to-[#4ADE80] text-white">
      <div className="maximally-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">Ready to Transform Your Gut Health?</h2>
          <p className="text-lg mb-8">
            Try Maximally's premium probiotics, backed by science and formulated for results. Experience the difference a healthy gut can make.
          </p>
          
          <CTAButton 
            text="Shop Our Products" 
            href="/" 
            variant="secondary" 
            size="lg" 
            withArrow
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
