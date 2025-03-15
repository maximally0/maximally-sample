
import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#00E5FF] to-[#4ADE80] text-white">
      <div className="maximally-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">Stay Up to Date</h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter for the latest articles, health tips, and product updates. We respect your privacy and will never share your information.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-lg focus:outline-none text-gray-800 flex-grow"
            />
            <button className="px-6 py-3 bg-[#FF4D4D] text-white rounded-lg font-medium hover:bg-[#FF4D4D]/90 transition-colors sharp-border-red">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
