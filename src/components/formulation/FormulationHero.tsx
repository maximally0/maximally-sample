
import React from 'react';
import CTAButton from '@/components/CTAButton';

const FormulationHero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#00E5FF]/20 to-[#4ADE80]/20">
      <div className="maximally-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-maximally-900">
            Advanced Probiotic Formula for Optimal Gut Health
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            At Maximally, we believe you deserve to know exactly what goes into your supplements. Here's our complete formula with nothing hidden.
          </p>
          <div className="inline-block px-6 py-3 bg-white rounded-lg shadow-md mb-6">
            <span className="font-medium text-maximally-800">Health on Max, Gimmicks on Zero.</span>
          </div>
          <div className="flex justify-center"></div>
        </div>
      </div>
    </section>
  );
};

export default FormulationHero;
