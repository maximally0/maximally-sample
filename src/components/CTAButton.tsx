
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  text: string;
  href: string;
  className?: string;
  variant?: 'primary' | 'outline' | 'text';
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
  const baseClasses = "relative flex items-center justify-center font-display font-medium transition-all duration-300 ease-in-out rounded-md";
  
  const variantClasses = {
    primary: "bg-maximally-500 text-white hover:bg-maximally-600 shadow-md hover:shadow-lg active:bg-maximally-700 active:scale-[0.98]",
    outline: "border-2 border-maximally-500 text-maximally-500 hover:bg-maximally-50 active:bg-maximally-100 active:scale-[0.98]",
    text: "text-maximally-500 hover:text-maximally-700 underline-offset-4 hover:underline"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <a
      href={href}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        withArrow ? "pr-10" : "",
        className
      )}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="z-10">{text}</span>
      {withArrow && (
        <ArrowRight 
          className="absolute right-4 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
        />
      )}
    </a>
  );
};

export default CTAButton;
