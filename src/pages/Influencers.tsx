
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';

const Influencers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="maximally-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-maximally-800">
              Join Our Influencer Network
            </h1>
            
            <div className="w-16 h-1 bg-accent-cyan mx-auto mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Are you a micro-influencer with 500 to 50,000 followers (or close)? Join us and get exclusive discounts, early access to new products, and collaboration opportunities based on your audience. We evaluate every applicant to ensure the best fit!
            </p>
            
            <div className="mt-10">
              <CTAButton 
                text="Apply Now" 
                href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform" 
                variant="primary" 
                size="lg"
                withArrow={true}
              />
              <p className="text-sm text-gray-500 mt-3">
                The application form will open in a new tab
              </p>
            </div>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bauhaus-card p-8">
              <div className="h-12 w-12 bg-accent-cyan rounded-full mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-maximally-800">Exclusive Discounts</h3>
              <p className="text-gray-600">
                Get special pricing on our products that's not available to the general public.
              </p>
            </div>
            
            <div className="bauhaus-card p-8">
              <div className="h-12 w-12 bg-accent-yellow rounded-full mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-maximally-800">Early Access</h3>
              <p className="text-gray-600">
                Be the first to try our new products before they hit the market.
              </p>
            </div>
            
            <div className="bauhaus-card p-8">
              <div className="h-12 w-12 bg-accent-red rounded-full mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-maximally-800">Collaboration Opportunities</h3>
              <p className="text-gray-600">
                Work with us on campaigns tailored to your unique audience and style.
              </p>
            </div>
          </div>
          
          <div className="mt-20 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-maximally-800">How We Evaluate Applications</h2>
            <p className="text-gray-700 mb-4">
              We carefully review each application to ensure a good fit between our products and your audience. 
              Here's what we look for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Authentic engagement with your audience</li>
              <li>Content quality and alignment with health and wellness</li>
              <li>Audience demographics and interests</li>
              <li>Professionalism and communication style</li>
            </ul>
            <div className="mt-8 text-center">
              <CTAButton 
                text="Apply Now" 
                href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform" 
                variant="secondary" 
                size="md"
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Influencers;
