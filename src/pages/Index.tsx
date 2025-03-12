
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
import BlogSection from '@/components/BlogSection';
import { Square } from 'lucide-react';

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
        <h1>Maximally Premium Probiotics | Advanced Gut Health Formula for Happy Living</h1>
        <meta name="description" content="Refresh your gut health with Maximally's premium probiotic - 50 billion CFU, 15 strains. Science-backed formula for digestive wellness, immune support, and a happier, more vibrant you." />
      </div>
      
      {/* Bauhaus Decorative Elements */}
      <div className="fixed -z-10 top-40 -left-20 w-40 h-40 bg-[#00BCD4] rounded-full opacity-20"></div>
      <div className="fixed -z-10 top-1/4 right-0 w-60 h-60 bg-[#1DE9B6] opacity-10"></div>
      <div className="fixed -z-10 bottom-1/4 left-1/3 w-20 h-20 bg-yellow-400 opacity-20"></div>
      <div className="fixed -z-10 right-1/4 bottom-10 w-40 h-40 bg-[#00E5FF]/30 rounded-full"></div>
      
      {/* Navigation */}
      <NavBar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <TrustElements />
        <Reviews />
        <BlogSection />
        <FAQ />
        
        {/* Final CTA Section */}
        <section className="py-20 bg-[#00BCD4] text-white relative overflow-hidden">
          {/* Bauhaus decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 opacity-20 rotate-45"></div>
          <div className="absolute top-10 right-10 w-20 h-20 bg-[#1DE9B6] opacity-20 rounded-full"></div>
          <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-white opacity-10"></div>

          <div className="maximally-container text-center relative z-10">
            <div className="flex justify-center mb-6">
              <Square className="w-12 h-12 text-white/70" />
            </div>
            <h2 className="font-sans text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
              Ready for a Happier, Healthier Gut?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of happy customers who have transformed their digestive health with Maximally.
            </p>
            <CTAButton 
              text="Buy on Amazon Today" 
              href="https://amazon.in" 
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
