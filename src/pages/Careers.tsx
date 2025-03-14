
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import { Rocket, Handshake, UserPlus, Activity, Award, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const JobCard = ({ 
  title, 
  description, 
  icon: Icon 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType 
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-bauhaus-cyan transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
    <div className="flex items-start gap-4">
      <div className="bg-maximally-50 p-3 rounded-md">
        <Icon className="w-6 h-6 text-maximally-700" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const BenefitCard = ({ 
  title, 
  description, 
  icon: Icon 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType 
}) => (
  <div className="flex items-start gap-4 p-4 rounded-md transition-all duration-300 hover:bg-gray-50">
    <div className="bg-maximally-50 p-2 rounded-md">
      <Icon className="w-5 h-5 text-maximally-700" />
    </div>
    <div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const Careers = () => {
  // Google Form URL - Replace with your actual Google Form link
  const googleFormUrl = "https://forms.gle/yourFormLink";
  
  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9f9]">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-maximally-50 to-white">
          <div className="maximally-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Join Our Team – Build the Future with Us!
              </h1>
              
              <div className="relative mb-8 inline-block">
                <div className="absolute -left-2 -top-2 w-4 h-4 bg-bauhaus-yellow rotate-12"></div>
                <div className="bg-white py-6 px-8 rounded-md shadow-md relative z-10">
                  <p className="text-lg md:text-xl leading-relaxed">
                    We're not just another startup. We're a rocket ship 🚀, and we want <strong>amazing people like you</strong> to join us! Whether you're looking for an internship, a full-time role, or just want to collaborate, we believe in finding the <strong>best role for YOU</strong>.
                  </p>
                </div>
              </div>
              
              <CTAButton 
                text="Apply Now & Let's Talk!" 
                href={googleFormUrl}
                variant="primary"
                size="lg"
                withArrow
              />
            </div>
          </div>
        </section>
        
        {/* Why Work With Us Section */}
        <section className="py-16 bg-white">
          <div className="maximally-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Why Work With Us?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <BenefitCard 
                  title="Fast-Growing Startup" 
                  description="Be part of something big and scale with us! Experience rapid growth and make a real impact."
                  icon={Rocket}
                />
                <BenefitCard 
                  title="Flexible Roles" 
                  description="We believe in talent-first, not just job titles. Find your place and grow your skills."
                  icon={UserPlus}
                />
                <BenefitCard 
                  title="Open Culture" 
                  description="Got a crazy idea? Let's make it happen! We embrace innovation and creative thinking."
                  icon={Handshake}
                />
                <BenefitCard 
                  title="Learning Opportunities" 
                  description="Work on real projects with industry experts. Continuous learning is in our DNA."
                  icon={GraduationCap}
                />
                <BenefitCard 
                  title="Cool Perks" 
                  description="Work with passionate people, test our products, and grow with us!"
                  icon={Award}
                />
                <BenefitCard 
                  title="Make an Impact" 
                  description="Your contributions will directly affect our success and growth trajectory."
                  icon={Activity}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Current Openings Section */}
        <section className="py-16 bg-gray-50">
          <div className="maximally-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Current Openings
              </h2>
              
              <div className="space-y-6">
                <JobCard 
                  title="Marketing Team" 
                  description="Looking for creative minds to help us grow. Join our marketing team and shape our brand's future." 
                  icon={Award}
                />
                <JobCard 
                  title="Tech Team" 
                  description="Need builders & problem-solvers to scale our platforms. Help us create amazing user experiences." 
                  icon={Activity}
                />
                <JobCard 
                  title="Open Collaboration" 
                  description="If you love what we do, but don't see a perfect role, apply anyway! We're always looking for amazing people." 
                  icon={Handshake}
                />
              </div>
              
              <div className="mt-12 text-center">
                <CTAButton 
                  text="Apply Now & Let's Talk!" 
                  href={googleFormUrl}
                  variant="primary"
                  size="lg"
                  withArrow
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Application Process */}
        <section className="py-16 bg-white">
          <div className="maximally-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                How to Apply
              </h2>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <div className="bg-bauhaus-cyan text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-bold text-lg">Submit Your Application</h3>
                      <p className="text-gray-600">Fill out our simple application form with your details and why you'd like to join us.</p>
                    </div>
                  </li>
                  <Separator />
                  <li className="flex gap-4">
                    <div className="bg-bauhaus-cyan text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-bold text-lg">Initial Chat</h3>
                      <p className="text-gray-600">We'll reach out for a casual conversation to learn more about you and your interests.</p>
                    </div>
                  </li>
                  <Separator />
                  <li className="flex gap-4">
                    <div className="bg-bauhaus-cyan text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-bold text-lg">Meet the Team</h3>
                      <p className="text-gray-600">Get to know the people you'll be working with and learn more about what we do.</p>
                    </div>
                  </li>
                  <Separator />
                  <li className="flex gap-4">
                    <div className="bg-bauhaus-cyan text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-bold text-lg">Let's Get Started!</h3>
                      <p className="text-gray-600">If it's a good fit, we'll figure out the best way to work together and welcome you aboard!</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-6">Ready to take the first step?</p>
                <CTAButton 
                  text="Apply Now & Let's Talk!" 
                  href={googleFormUrl}
                  variant="primary"
                  size="lg"
                  withArrow
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
