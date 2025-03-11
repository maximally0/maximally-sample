
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Waves, Sun } from 'lucide-react';

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
  const baseClasses = "relative flex items-center justify-center font-display font-medium transition-all duration-300 ease-in-out rounded-full";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-400 to-blue-400 text-white hover:shadow-lg hover:scale-105 active:scale-[0.98] hover:from-cyan-500 hover:to-blue-500",
    outline: "border-2 border-cyan-400 text-cyan-600 hover:bg-cyan-50 hover:scale-105 active:scale-[0.98]",
    text: "text-cyan-600 hover:text-cyan-700 underline-offset-4 hover:underline"
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
