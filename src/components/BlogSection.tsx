
import React, { useRef, useEffect } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import CTAButton from './CTAButton';

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
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.reveal-on-scroll');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="blog" className="section-padding bg-gradient-to-b from-white to-cyan-50" ref={sectionRef}>
      <div className="maximally-container">
        {/* Section Title */}
        <div ref={titleRef} className="reveal-on-scroll text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4 inline-block mr-1" /> Our Story
          </span>
          <h2 className="section-title mb-4 text-cyan-900">The Truth Behind Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            We're not just another supplement company. We're on a mission to fix the entire probiotic industry.
          </p>
        </div>
        
        {/* Blog Post */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 reveal-on-scroll">
          <div className="p-6 md:p-10">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-cyan-900">
              The Probiotic Supplement Industry Is a Joke – So I Fixed It
            </h3>
            
            <div className="prose prose-lg max-w-none">
              <h4 className="text-xl font-bold text-cyan-800 mt-8 mb-4">The Dirty Secrets of Probiotic Supplements</h4>
              <p>
                You've seen them. Those probiotic bottles with "50 BILLION CFUs!" slapped on the label like it's some sort of flex. 
                Brands love throwing <strong>big numbers and fancy buzzwords</strong> at you, hoping you won't ask the real question: 
                <em>Do they actually work?</em> Spoiler: <strong>Most don't.</strong>
              </p>
              <p>
                I got sick of seeing people waste money on <strong>useless probiotics</strong>, so I did what any sane person would do—I 
                <strong>fixed the entire industry</strong>. Welcome to <strong>Maximally</strong>—where probiotics actually do what they're supposed to do.
              </p>
              
              <h4 className="text-xl font-bold text-cyan-800 mt-8 mb-4">What's Wrong With Today's Probiotic Supplements?</h4>
              
              <div className="mb-4">
                <p className="font-bold">🚨 1. They're Dead on Arrival</p>
                <p>
                  Most probiotics don't even make it past your stomach acid. Brands stuff their supplements with bacteria that die the moment they touch stomach acid, 
                  rendering the supplement <strong>completely useless</strong>. What's the point of buying "50 billion CFUs" if they all die before reaching your gut? 
                  It's like paying for WiFi and getting dial-up speeds.
                </p>
              </div>
              
              <div className="mb-4">
                <p className="font-bold">🚨 2. Useless Strains, Random Formulations</p>
                <p>
                  Not all probiotics are created equal. Some strains actually do something, while others are just filler. Most brands 
                  <strong>randomly mix strains together</strong>, hoping something sticks. That's like making a pizza by dumping 
                  <strong>random ingredients into an oven and praying for a miracle.</strong> It doesn't work like that.
                </p>
              </div>
              
              <div className="mb-4">
                <p className="font-bold">🚨 3. No Food, No Growth</p>
                <p>
                  Probiotics need <strong>prebiotics</strong> (their food) to survive in your gut. Yet, most brands leave them out. 
                  That's like planting seeds in dry soil and expecting a jungle to grow.
                </p>
              </div>
              
              <div className="mb-4">
                <p className="font-bold">🚨 4. Buzzwords > Science</p>
                <p>
                  "Doctor Recommended." "50 Billion CFUs." "Revolutionary Formula." Sounds good, right? Well, here's a secret: 
                  <strong>there are no regulations on these claims.</strong> A company could slap "GUT HEALTH MIRACLE" on a bottle of sugar pills, 
                  and nobody would stop them. That's the wild reality of the supplement industry.
                </p>
              </div>
              
              <div className="mb-4">
                <p className="font-bold">🚨 5. Storage Issues – Your Probiotics Are Probably Already Dead</p>
                <p>
                  Many probiotic strains need <strong>proper storage</strong> or they die. But brands <strong>never tell you this.</strong> 
                  So, that probiotic bottle sitting on the store shelf for months? Yeah, it's probably filled with corpses. 
                  You're swallowing <strong>dead bacteria</strong> and expecting miracles.
                </p>
              </div>
              
              <hr className="my-8" />
              
              <h4 className="text-xl font-bold text-cyan-800 mt-8 mb-4">How Maximally Fixes Everything</h4>
              <p>
                At <strong>Maximally</strong>, I decided to fix every single issue in the industry. No gimmicks, no BS—just 
                <strong>science-backed probiotics that actually work</strong>.
              </p>
              
              <div className="mb-4">
                <p className="font-bold">✅ Probiotics That Actually Survive</p>
                <p>
                  We use <strong>enteric-coated capsules and spore-forming probiotic strains</strong> that don't die the second they hit stomach acid. 
                  Your probiotics <strong>actually reach your gut alive</strong>—which, believe it or not, is kinda important.
                </p>
              </div>
              
              <div className="mb-4">
                <p className="font-bold">✅ Clinically Researched Strains That Do Something</p>
                <p>
                  We don't throw in random strains for the sake of it. Every probiotic in <strong>Maximally</strong> has been 
                  <strong>scientifically tested and proven</strong> to improve gut health. No filler, no fluff, just <strong>results</strong>.
                </p>
              </div>
              
              <div className="mb-4">
                <p className="font-bold">✅ Prebiotics Included – Because Science</p>
                <p>
                  We give probiotics the <strong>food they need to thrive</strong>. Because without prebiotics, 
                  probiotics are just lost tourists in your gut with no idea where to go.
                </p>
              </div>
              
              <div className="mb-4">
                <p className="font-bold">✅ No BS Labels, No Buzzword Overload</p>
                <p>
                  No fake claims. No exaggerated numbers. What you see on the label is exactly what you get.
                </p>
              </div>
              
              <div className="mb-4">
                <p className="font-bold">✅ Shelf-Stable & Built to Last</p>
                <p>
                  No more worrying about storage. Our probiotics are <strong>shelf-stable and survive longer</strong> without dying. 
                  You get <strong>full potency</strong> from the first capsule to the last.
                </p>
              </div>
              
              <hr className="my-8" />
              
              <h4 className="text-xl font-bold text-cyan-800 mt-8 mb-4">Why I Built Maximally</h4>
              <p>
                I didn't start <strong>Maximally</strong> because I wanted to sell another "gut health" product. 
                I started it because I was <strong>frustrated with all the trash on the market</strong>. 
                People deserve probiotics that actually do what they claim.
              </p>
              <p>
                This brand isn't just about selling supplements—it's about <strong>fixing an industry</strong> that's been full of 
                misleading claims and underwhelming products for too long. <strong>You deserve better. Your gut deserves better.</strong>
              </p>
              <p>
                So here's Maximally—the probiotic supplement that actually makes sense.
              </p>
            </div>
            
            <div className="mt-10 flex justify-center">
              <CTAButton 
                text="Try Maximally Today" 
                href="https://amazon.in" 
                variant="primary" 
                size="lg" 
                withArrow
                className="px-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
