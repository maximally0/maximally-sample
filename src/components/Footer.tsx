
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-maximally-900 text-white pt-16 pb-8">
      <div className="maximally-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">Maximally</h3>
            <p className="text-maximally-100 mb-6 max-w-md">
              Transforming gut health with premium, scientifically-formulated probiotics that deliver real results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-maximally-100 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-maximally-100 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-maximally-100 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#benefits" className="text-maximally-100 hover:text-white transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-maximally-100 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-maximally-100 hover:text-white transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="text-maximally-100 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-medium text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-maximally-100">
              <li>support@maximallyhealth.com</li>
              <li>1-800-MAXIMIZE</li>
              <li>100 Wellness Way,<br />Health Center, CA 90210</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-maximally-700 text-sm text-maximally-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              &copy; {currentYear} Maximally Health, Inc. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-maximally-200 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-maximally-200 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-maximally-200 hover:text-white transition-colors">
                Shipping Policy
              </a>
            </div>
          </div>
          <div className="mt-6 text-xs text-maximally-300">
            <p>*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
