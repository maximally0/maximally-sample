
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="maximally-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative mb-10 inline-block">
              <div className="absolute -left-3 -top-3 w-6 h-6 bg-[#FFD700] rotate-12"></div>
              <div className="bg-gradient-to-r from-[#00E5FF] to-[#4ADE80] text-white py-3 px-6 rounded-md font-bold">
                Coming Soon
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-maximally-800">
              We're launching soon!
            </h1>
            
            <p className="text-xl text-gray-700 mb-12">
              Stay tuned for Maximally's premium probiotic supplements.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-10">
              <h2 className="text-2xl font-bold mb-4 text-maximally-800">
                What to expect
              </h2>
              <ul className="text-left space-y-3 max-w-md mx-auto">
                <li className="flex items-start gap-2">
                  <div className="bg-[#00E5FF] h-6 w-6 rounded-full flex-shrink-0 mt-1"></div>
                  <p>Advanced probiotic formulas with 50 billion CFU</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-[#4ADE80] h-6 w-6 rounded-full flex-shrink-0 mt-1"></div>
                  <p>15 diverse strains for comprehensive gut health</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-[#FFD700] h-6 w-6 rounded-full flex-shrink-0 mt-1"></div>
                  <p>Research-backed ingredients with no gimmicks</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-[#FF4D4D] h-6 w-6 rounded-full flex-shrink-0 mt-1"></div>
                  <p>Premium quality at competitive prices</p>
                </li>
              </ul>
            </div>
            
            <Link 
              to="/" 
              className="inline-flex items-center text-maximally-800 hover:text-maximally-600 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComingSoon;
