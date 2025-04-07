
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  id?: string;
  className?: string;
  titleClassName?: string;
  lineClassName?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  id, 
  className, 
  titleClassName,
  lineClassName,
  center = true
}) => {
  return (
    <div 
      id={id} 
      className={cn(
        "mb-10", 
        center ? "text-center" : "", 
        className
      )}
    >
      <h2 className={cn(
        "text-3xl font-bold text-indigo-950 inline-block relative",
        titleClassName
      )}>
        {title}
        <span className={cn(
          "block h-1 w-24 bg-primary mt-3 transition-all duration-300 hover:w-32 hover:bg-primary/80",
          center ? "mx-auto" : "",
          lineClassName
        )}></span>
      </h2>
    </div>
  );
};

export default SectionTitle;
