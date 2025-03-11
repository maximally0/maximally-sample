
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CTAButton from './CTAButton';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="maximally-container flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="font-serif text-2xl font-bold tracking-tight text-maximally-800">Maximally</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#benefits" className="font-medium text-maximally-800 hover:text-maximally-600 transition-colors">
            Benefits
          </a>
          <a href="#how-it-works" className="font-medium text-maximally-800 hover:text-maximally-600 transition-colors">
            How It Works
          </a>
          <a href="#reviews" className="font-medium text-maximally-800 hover:text-maximally-600 transition-colors">
            Reviews
          </a>
          <a href="#faq" className="font-medium text-maximally-800 hover:text-maximally-600 transition-colors">
            FAQ
          </a>
          <CTAButton 
            text="Buy on Amazon" 
            href="https://amazon.com" 
            variant="primary" 
            size="sm"
          />
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-maximally-800 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-white/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out p-6 flex flex-col pt-24",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
          "md:hidden"
        )}
      >
        <nav className="flex flex-col space-y-6">
          <a 
            href="#benefits" 
            className="text-xl font-medium text-maximally-800 hover:text-maximally-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Benefits
          </a>
          <a 
            href="#how-it-works" 
            className="text-xl font-medium text-maximally-800 hover:text-maximally-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#reviews" 
            className="text-xl font-medium text-maximally-800 hover:text-maximally-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Reviews
          </a>
          <a 
            href="#faq" 
            className="text-xl font-medium text-maximally-800 hover:text-maximally-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
          <CTAButton 
            text="Buy on Amazon" 
            href="https://amazon.com" 
            variant="primary" 
            size="md"
            className="mt-4"
            onClick={() => setIsMenuOpen(false)}
          />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
