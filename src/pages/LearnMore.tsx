
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import { CheckCircle2, BookOpen, Beaker, Award, Microscope } from 'lucide-react';

const LearnMore = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f3f3f3]">
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#4ADE80]/10 to-[#00E5FF]/10">
          <div className="maximally-container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-maximally-900">
                About Maximally
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Radical Transparency. Proven Science. Maximum Results.
              </p>
              <div className="mb-8 inline-flex items-center justify-center bg-white px-6 py-3 rounded-lg shadow-md">
                <span className="text-lg font-medium text-maximally-800">Health on Max, Gimmicks on Zero.</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="maximally-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6 text-maximally-900">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  At Maximally, we believe that your health deserves clarity, not marketing tricks. That's why we showcase everything—from our ingredient sourcing to our lab results—so you know exactly what goes into every capsule.
                </p>
                <p className="text-gray-700 mb-4">
                  The supplement industry is cluttered with flashy promises, but we believe in science, transparency, and uncompromising quality. Every Maximally product is backed by clinical research, made with pure, effective ingredients, and undergoes rigorous lab testing—because you deserve the best.
                </p>
                <p className="text-gray-700 mb-4 font-medium">
                  💡 No gimmicks. No hidden formulas. Just research-backed nutrition that works.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Maximally Transparency" 
                  className="rounded-lg shadow-lg"
                />
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFD700] rounded-lg opacity-20 -z-10"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#4ADE80] rounded-lg opacity-20 -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Products Section */}
        <section className="py-16 bg-[#F9FAFB]">
          <div className="maximally-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6 text-maximally-900">Our Products</h2>
              <p className="text-gray-700">
                We combine cutting-edge science with complete transparency to create products that truly work. Every ingredient is carefully selected, precisely dosed, and fully disclosed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Product Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-[#00E5FF]/10 flex items-center justify-center">
                  <Microscope className="w-16 h-16 text-[#00E5FF]" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2 text-maximally-900">Premium Probiotics</h3>
                  <p className="text-gray-700 mb-4">
                    Our flagship product featuring 50 billion CFU and 15 diverse strains for optimal gut health.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#4ADE80] mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Supports digestive health</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#4ADE80] mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Boosts immune function</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#4ADE80] mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Improves nutrient absorption</span>
                    </li>
                  </ul>
                  <CTAButton 
                    text="Learn More" 
                    href="/formulation" 
                    variant="outline" 
                    size="md"
                  />
                </div>
              </div>
              
              {/* Future Product Cards */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden opacity-60 transition-transform hover:scale-105">
                <div className="h-48 bg-[#4ADE80]/10 flex items-center justify-center">
                  <Beaker className="w-16 h-16 text-[#4ADE80]" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2 text-maximally-900">Coming Soon</h3>
                  <p className="text-gray-700 mb-4">
                    Our team is working on new transparent formulations to support your wellness journey.
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <span className="inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm">
                      Stay Tuned
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden opacity-60 transition-transform hover:scale-105">
                <div className="h-48 bg-[#FFD700]/10 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-[#FFD700]" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2 text-maximally-900">Coming Soon</h3>
                  <p className="text-gray-700 mb-4">
                    More transparent nutrition options heading your way soon.
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <span className="inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm">
                      Stay Tuned
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Commitment Section */}
        <section className="py-16 bg-white">
          <div className="maximally-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6 text-maximally-900">Our Commitment to You</h2>
              <p className="text-gray-700">
                At Maximally, we promise to uphold the highest standards of transparency, quality, and effectiveness in everything we do.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00E5FF]/10 mb-4">
                  <Award className="w-8 h-8 text-[#00E5FF]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-maximally-900">100% Transparency</h3>
                <p className="text-gray-700">
                  We disclose every ingredient, every amount, and every source. No proprietary blends or hidden formulas.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#4ADE80]/10 mb-4">
                  <Microscope className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-maximally-900">Science-Backed</h3>
                <p className="text-gray-700">
                  Every formulation is based on clinical research and developed with expertise in nutrition science.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FFD700]/10 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#FFD700]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-maximally-900">Quality Assured</h3>
                <p className="text-gray-700">
                  GMP certified facilities, lab-tested ingredients, and rigorous quality control ensure you get the best.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#00E5FF] to-[#4ADE80] text-white">
          <div className="maximally-container text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Maximally Difference?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Health on Max, Gimmicks on Zero. Just research-backed nutrition that works.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton 
                text="Buy on Amazon" 
                href="https://amazon.com" 
                variant="secondary" 
                size="lg" 
                withArrow
                className="text-white hover:brightness-110 border-white hover:bg-white/10"
              />
              <CTAButton 
                text="View Formulations" 
                href="/formulation" 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white/10"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LearnMore;
