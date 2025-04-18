
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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
    <motion.div 
      id={id} 
      className={cn(
        "mb-10", 
        center ? "text-center" : "", 
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={cn(
        "text-3xl font-bold text-indigo-950 inline-block relative",
        titleClassName
      )}>
        {title}
        <motion.span 
          className={cn(
            "block h-1 w-24 bg-primary mt-3 transition-all duration-300",
            center ? "mx-auto" : "",
            lineClassName
          )}
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ width: "8rem" }}
        ></motion.span>
      </h2>
    </motion.div>
  );
};

export default SectionTitle;
