
import React from 'react';
import CTAButton from '@/components/CTAButton';

const ResearchSection = () => {
  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="maximally-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#4ADE80] text-gray-800 text-sm font-medium mb-4 shadow-sm">
              Science-Backed Formula
            </span>
            <h2 className="font-serif text-3xl font-bold mb-6 text-maximally-900">Best Probiotic Supplements in India</h2>
            <p className="text-gray-700 mb-4">
              Unlike many supplement companies, we don't hide behind proprietary blends or make exaggerated claims. Every ingredient in our formula is:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#00E5FF]/10 flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#00E5FF]"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Scientifically Validated</h4>
                  <p className="text-gray-700">Backed by peer-reviewed research published in reputable journals</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#00E5FF]/10 flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#00E5FF]"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Precisely Dosed</h4>
                  <p className="text-gray-700">Included at levels shown to be effective in clinical studies</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#00E5FF]/10 flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#00E5FF]"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Fully Disclosed</h4>
                  <p className="text-gray-700">Every strain, every amount, every benefit is transparently shared</p>
                </div>
              </li>
            </ul>
            <CTAButton text="Buy on Amazon" href="https://amazon.com" variant="primary" size="lg" withArrow />
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1554178286-db408c69256a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
              alt="Scientific Research on Maximally Probiotics - Best supplement for gut health" 
              className="rounded-lg shadow-lg" 
            />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FFD700] rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4ADE80] rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
