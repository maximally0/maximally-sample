
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
    <div className="flex flex-col min-h-screen">
      {/* SEO Metadata (would typically be in a Head component) */}
      <div hidden>
        <h1>Maximally Premium Probiotics | Advanced Gut Health Formula</h1>
        <meta name="description" content="Transform your gut health with Maximally's premium probiotic - 50 billion CFU, 15 strains. Science-backed formula for digestive wellness, immune support, and overall vitality." />
      </div>
      
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
        
        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-maximally-600 to-maximally-800 text-white">
          <div className="maximally-container text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
              Ready to Transform Your Gut Health?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have experienced the Maximally difference.
            </p>
            <CTAButton 
              text="Buy on Amazon Today" 
              href="https://amazon.com" 
              variant="outline" 
              size="lg" 
              withArrow
              className="text-white border-white hover:bg-white/10 inline-block"
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
