
import React from 'react';

interface SectionTitleProps {
  title: string;
  id?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, id, className }) => {
  return (
    <div id={id} className={`mb-8 text-center ${className || ''}`}>
      <h2 className="text-3xl font-bold text-gray-800 inline-block relative">
        {title}
        <span className="block h-1 w-24 bg-primary mt-2 mx-auto"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;
