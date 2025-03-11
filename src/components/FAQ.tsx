
import React, { useEffect, useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay: number;
}

const FAQItem = ({ question, answer, isOpen, onClick, delay }: FAQItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={itemRef}
      className="reveal-on-scroll border-b border-gray-200 py-5"
    >
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-maximally-800">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-maximally-500">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      
      <div
        className={cn(
          "mt-3 transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
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
  
  const faqs = [
    {
      question: "What makes Maximally probiotics different from others?",
      answer: "Maximally stands out due to our proprietary blend of 15 scientifically-researched probiotic strains, delivering 50 billion CFU per capsule. We use advanced acid-resistant capsules to ensure the probiotics reach your intestines alive and effective. Additionally, our formula includes prebiotic fiber to nourish the good bacteria and maximize colonization."
    },
    {
      question: "How long will it take to see results?",
      answer: "Most customers report initial improvements in digestion within the first 1-2 weeks. However, the full benefits of improved gut health, enhanced immunity, and increased energy typically develop over 4-6 weeks of consistent use. Each person's microbiome is unique, so individual results may vary."
    },
    {
      question: "Do I need to refrigerate Maximally probiotics?",
      answer: "No, our advanced formula is shelf-stable and doesn't require refrigeration. We use specialized technology to protect the probiotic strains from heat, moisture, and oxygen, ensuring potency through the expiration date when stored at room temperature in the original sealed container."
    },
    {
      question: "Are there any side effects?",
      answer: "Most people experience no side effects when taking Maximally. Some individuals may notice mild digestive changes like increased gas during the first few days as the gut microbiome rebalances. These temporary effects typically resolve quickly as your body adjusts to the improved bacterial balance."
    },
    {
      question: "Is Maximally suitable for vegetarians?",
      answer: "Yes, Maximally probiotics are vegetarian-friendly. Our capsules are made without gelatin and contain no animal-derived ingredients. They're also free from common allergens including gluten, dairy, soy, and nuts."
    },
    {
      question: "How should I take Maximally for best results?",
      answer: "For optimal results, take one capsule daily with a meal, preferably breakfast or lunch. Taking probiotics with food improves survivability and effectiveness. Consistency is key—daily use yields the best long-term improvements in gut health and overall wellness."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section-padding bg-white" ref={sectionRef}>
      <div className="maximally-container">
        {/* Section Title */}
        <div ref={titleRef} className="reveal-on-scroll text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-maximally-100 text-maximally-700 text-sm font-medium mb-4">
            Common Questions
          </span>
          <h2 className="section-title mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Maximally's premium probiotic.
          </p>
        </div>
        
        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
