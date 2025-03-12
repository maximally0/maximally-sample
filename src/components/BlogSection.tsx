
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import CTAButton from './CTAButton';
import { cn } from '@/lib/utils';

const BlogSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      },
      { threshold: 0.1 }
    );
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-white" ref={sectionRef}>
      <div className="maximally-container">
        {/* Section Title */}
        <div ref={titleRef} className="reveal-on-scroll text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="section-title mb-6">The Probiotic Supplement Industry Is a Joke – So I Fixed It</h2>
        </div>
        
        {/* Blog Content */}
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h3 className="font-bold text-xl mb-4">The Dirty Secrets of Probiotic Supplements</h3>
          
          <p>
            You've seen them. Those probiotic bottles with "50 BILLION CFUs!" slapped on the label like it's some sort of flex. 
            Brands love throwing <strong>big numbers and fancy buzzwords</strong> at you, hoping you won't ask the real question: 
            <em>Do they actually work?</em> Spoiler: <strong>Most don't.</strong>
          </p>
          
          <p>
            I got sick of seeing people waste money on <strong>useless probiotics</strong>, so I did what any sane person would do—I 
            <strong>fixed the entire industry</strong>. Welcome to <strong>Maximally</strong>—where probiotics actually do what they're 
            supposed to do.
          </p>
          
          <h3 className="font-bold text-xl mt-8 mb-4">What's Wrong With Today's Probiotic Supplements?</h3>
          
          <div className="mb-6">
            <h4 className="flex items-center font-bold text-lg mb-2">
              <span className="text-red-600 mr-2">🚨</span> 1. They're Dead on Arrival
            </h4>
            <p>
              Most probiotics don't even make it past your stomach acid. Brands stuff their supplements with bacteria that die the 
              moment they touch stomach acid, rendering the supplement <strong>completely useless</strong>. What's the point of buying 
              "50 billion CFUs" if they all die before reaching your gut? It's like paying for WiFi and getting dial-up speeds.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="flex items-center font-bold text-lg mb-2">
              <span className="text-red-600 mr-2">🚨</span> 2. Useless Strains, Random Formulations
            </h4>
            <p>
              Not all probiotics are created equal. Some strains actually do something, while others are just filler. Most brands 
              <strong>randomly mix strains together</strong>, hoping something sticks. That's like making a pizza by dumping 
              <strong>random ingredients into an oven and praying for a miracle.</strong> It doesn't work like that.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="flex items-center font-bold text-lg mb-2">
              <span className="text-red-600 mr-2">🚨</span> 3. No Food, No Growth
            </h4>
            <p>
              Probiotics need <strong>prebiotics</strong> (their food) to survive in your gut. Yet, most brands leave them out. 
              That's like planting seeds in dry soil and expecting a jungle to grow.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="flex items-center font-bold text-lg mb-2">
              <span className="text-red-600 mr-2">🚨</span> 4. Buzzwords {'>'}Science
            </h4>
            <p>
              "Doctor Recommended." "50 Billion CFUs." "Revolutionary Formula." Sounds good, right? Well, here's a secret: 
              <strong>there are no regulations on these claims.</strong> A company could slap "GUT HEALTH MIRACLE" on a bottle 
              of sugar pills, and nobody would stop them. That's the wild reality of the supplement industry.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="flex items-center font-bold text-lg mb-2">
              <span className="text-red-600 mr-2">🚨</span> 5. Storage Issues – Your Probiotics Are Probably Already Dead
            </h4>
            <p>
              Many probiotic strains need <strong>proper storage</strong> or they die. But brands <strong>never tell you this.</strong> 
              So, that probiotic bottle sitting on the store shelf for months? Yeah, it's probably filled with corpses. You're swallowing 
              <strong>dead bacteria</strong> and expecting miracles.
            </p>
          </div>
          
          <hr className="my-10" />
          
          <h3 className="font-bold text-xl mb-4">How Maximally Fixes Everything</h3>
          <p>
            At <strong>Maximally</strong>, I decided to fix every single issue in the industry. No gimmicks, no BS—just 
            <strong>science-backed probiotics that actually work</strong>.
          </p>
          
          <div className="mb-6">
            <h4 className="flex items-center font-bold text-lg mb-2">
              <span className="text-green-600 mr-2">✅</span> Probiotics That Actually Survive
            </h4>
            <p>
              We use <strong>enteric-coated capsules and spore-forming probiotic strains</strong> that don't die the second they hit stomach acid. 
              Your probiotics <strong>actually reach your gut alive</strong>—which, believe it or not, is kinda important.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="flex items-center font-bold text-lg mb-2">
              <span className="text-green-600 mr-2">✅</span> Clinically Researched Strains That Do Something
            </h4>
            <p>
              We don't throw in random strains for the sake of it. Every probiotic in <strong>Maximally</strong> has been 
              <strong>scientifically tested and proven</strong> to improve gut health. No filler, no fluff, just <strong>results</strong>.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="flex items-center font-bold text-lg mb-2">
              <span className="text-green-600 mr-2">✅</span> Prebiotics Included – Because Science
            </h4>
            <p>
              We give probiotics the <strong>food they need to thrive</strong>. Because without prebiotics, probiotics are just 
              lost tourists in your gut with no idea where to go.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="flex items-center font-bold text-lg mb-2">
              <span className="text-green-600 mr-2">✅</span> No BS Labels, No Buzzword Overload
            </h4>
            <p>
              No fake claims. No exaggerated numbers. What you see on the label is exactly what you get.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="flex items-center font-bold text-lg mb-2">
              <span className="text-green-600 mr-2">✅</span> Shelf-Stable & Built to Last
            </h4>
            <p>
              No more worrying about storage. Our probiotics are <strong>shelf-stable and survive longer</strong> without dying. 
              You get <strong>full potency</strong> from the first capsule to the last.
            </p>
          </div>
          
          <hr className="my-10" />
          
          <h3 className="font-bold text-xl mb-4">Why I Built Maximally</h3>
          
          <p>
            I didn't start <strong>Maximally</strong> because I wanted to sell another "gut health" product. I started it because 
            I was <strong>frustrated with all the trash on the market</strong>. People deserve probiotics that actually do what they claim.
          </p>
          
          <p>
            This brand isn't just about selling supplements—it's about <strong>fixing an industry</strong> that's been full of 
            misleading claims and underwhelming products for too long. <strong>You deserve better. Your gut deserves better.</strong>
          </p>
          
          <p>
            So here's Maximally—the probiotic supplement that actually makes sense.
          </p>
          
          <div className="mt-10 mb-6 text-center">
            <CTAButton 
              text="Try Maximally Today" 
              href="https://amazon.com" 
              variant="primary" 
              size="lg" 
              withArrow
              className="inline-block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
