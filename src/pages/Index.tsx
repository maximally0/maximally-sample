
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import TrustElements from '@/components/TrustElements';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import { Microscope, CheckCircle2 } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Initialize scroll reveal animations
    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
            }
          });
        },
        { threshold: 0.1 }
      );

      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => observer.observe(el));

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    };

    observeElements();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        document.querySelector(targetId)?.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#f3f3f3]">
      {/* SEO Metadata (would typically be in a Head component) */}
      <div hidden>
        <h1>Maximally Premium Probiotics | Health on Max, Gimmicks on Zero.</h1>
        <meta name="description" content="At Maximally, we believe that your health deserves clarity, not marketing tricks. Our transparent, research-backed probiotics deliver 50 billion CFU and 15 diverse strains for optimal gut health." />
      </div>
      
      {/* Bauhaus Decorative Elements with bright colors */}
      <div className="fixed -z-10 top-40 -left-20 w-40 h-40 bg-[#00E5FF] rounded-full opacity-30"></div>
      <div className="fixed -z-10 top-1/4 right-0 w-60 h-60 bg-[#4ADE80] opacity-20"></div>
      <div className="fixed -z-10 bottom-1/4 left-1/3 w-20 h-20 bg-[#FFD700] opacity-30"></div>
      <div className="fixed -z-10 right-1/4 bottom-10 w-40 h-40 bg-[#FF4D4D]/30 rounded-full"></div>
      
      {/* Navigation */}
      <NavBar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <TrustElements />
        <Reviews />
        <FAQ />
        
        {/* Final CTA Section with bright gradient background */}
        <section className="py-20 bg-gradient-to-r from-[#00E5FF] to-[#4ADE80] text-white relative overflow-hidden">
          {/* Bauhaus decorative elements with bright colors */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FFD700] opacity-20 rotate-45"></div>
          <div className="absolute top-10 right-10 w-20 h-20 bg-[#FF4D4D] opacity-20 rounded-full"></div>
          <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-[#4ADE80] opacity-20"></div>

          <div className="maximally-container text-center relative z-10">
            <div className="flex justify-center mb-6">
              <Microscope className="w-12 h-12 text-white/90" />
            </div>
            <h2 className="font-sans text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto drop-shadow-lg">
              Ready for Radical Transparency in Your Health?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Health on Max, Gimmicks on Zero. Just research-backed nutrition that works.
            </p>
            
            {/* Transparent Formula Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#FFD700] mr-2" />
                <span className="text-white font-medium">Clearer Skin & Hair</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#FFD700] mr-2" />
                <span className="text-white font-medium">Enhanced Immunity</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#FFD700] mr-2" />
                <span className="text-white font-medium">Better Digestion</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#FFD700] mr-2" />
                <span className="text-white font-medium">Optimized Performance</span>
              </div>
            </div>
            
            <CTAButton 
              text="Buy on Amazon Today" 
              href="https://amazon.in" 
              variant="secondary" 
              size="lg" 
              withArrow
              className="text-white hover:brightness-110 border-white hover:bg-white/10 inline-block shadow-lg"
            />
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
