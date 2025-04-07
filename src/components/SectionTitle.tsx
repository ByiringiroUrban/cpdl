
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  id?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, id, className }) => {
  return (
    <div id={id} className={cn("mb-10 text-center", className)}>
      <h2 className="text-3xl font-bold text-gray-800 inline-block relative">
        {title}
        <span className="block h-1 w-24 bg-primary mt-3 mx-auto transform transition-all duration-300 hover:w-32 hover:bg-primary/80"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;
