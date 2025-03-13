
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  text: string;
  href: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  onClick?: () => void;
}

const CTAButton = ({
  text,
  href,
  className,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  onClick,
}: CTAButtonProps) => {
  const baseClasses = "relative flex items-center justify-center font-display font-medium transition-all duration-300 ease-in-out";
  
  const variantClasses = {
    primary: "bg-[#00E5FF] text-white hover:shadow-lg hover:translate-y-[-2px] active:translate-y-[1px] hover:brightness-110 sharp-border-cyan",
    secondary: "bg-[#FF4D4D] text-white hover:shadow-lg hover:translate-y-[-2px] active:translate-y-[1px] hover:brightness-110 sharp-border-red",
    outline: "border-2 border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF]/5 hover:translate-y-[-2px] active:translate-y-[1px]",
    text: "text-[#00E5FF] hover:bg-[#00E5FF]/5 underline-offset-4 hover:underline"
  };
  
  const sizeClasses = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg"
  };
  
  const linkClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    withArrow ? "pr-12" : "",
    className
  );

  // Check if the href is external or internal
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

  if (isExternal) {
    return (
      <a
        href={href}
        className={linkClasses}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Decorative Square (Bauhaus element) */}
        {variant === 'primary' && (
          <div className="absolute -left-2 -top-2 w-4 h-4 bg-[#FFD700] rotate-12"></div>
        )}
        
        <span className="z-10 font-sans font-bold tracking-wide">{text}</span>
        
        {withArrow && (
          <ArrowRight 
            className="absolute right-5 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
          />
        )}
      </a>
    );
  } else {
    return (
      <Link
        to={href}
        className={linkClasses}
        onClick={onClick}
      >
        {/* Decorative Square (Bauhaus element) */}
        {variant === 'primary' && (
          <div className="absolute -left-2 -top-2 w-4 h-4 bg-[#FFD700] rotate-12"></div>
        )}
        
        <span className="z-10 font-sans font-bold tracking-wide">{text}</span>
        
        {withArrow && (
          <ArrowRight 
            className="absolute right-5 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
          />
        )}
      </Link>
    );
  }
};

export default CTAButton;
