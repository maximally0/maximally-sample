
import React from 'react';
import CTAButton from '@/components/CTAButton';

const FormulationCta = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#00E5FF] to-[#4ADE80] text-white">
      <div className="maximally-container text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Buy Probiotics Online India</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Health on Max, Gimmicks on Zero. Just research-backed nutrition that works.
        </p>
        <CTAButton 
          text="Buy on Amazon Today" 
          href="https://amazon.com" 
          variant="secondary" 
          size="lg" 
          withArrow 
          className="text-white hover:brightness-110 border-white hover:bg-white/10" 
        />
      </div>
    </section>
  );
};

export default FormulationCta;
