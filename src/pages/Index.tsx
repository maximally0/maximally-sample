
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
import { Waves, Palmtree, Sun } from 'lucide-react';

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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-100 to-cyan-50">
      {/* SEO Metadata (would typically be in a Head component) */}
      <div hidden>
        <h1>Maximally Premium Probiotics | Happy Gut, Happy Life</h1>
        <meta name="description" content="Refresh your gut health with Maximally's premium probiotic - 50 billion CFU, 15 strains. Science-backed formula for digestive wellness, immune support, and a happier, more vibrant you." />
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
        <BlogSection />
        <FAQ />
        
        {/* Final CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-cyan-400 to-blue-400 text-white relative overflow-hidden">
          {/* Decorative wave shapes */}
          <div className="absolute top-0 left-0 w-full h-12 opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
          </div>

          <div className="maximally-container text-center">
            <div className="flex justify-center mb-6">
              <Sun className="w-12 h-12 text-yellow-200 animate-pulse" />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
              Ready for a Happier, Sunnier You?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of beachside-happy customers who have transformed their gut health with Maximally!
            </p>
            <CTAButton 
              text="Get Your Sunshine in a Bottle" 
              href="https://amazon.in" 
              variant="outline" 
              size="lg" 
              withArrow
              className="text-white border-white hover:bg-white/10 inline-block"
            />
          </div>

          {/* Bottom wave shapes */}
          <div className="absolute bottom-0 left-0 w-full h-12 opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path fill="#ffffff" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,96C672,75,768,53,864,69.3C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
