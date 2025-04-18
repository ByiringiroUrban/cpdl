
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <section id="home" className="bg-gradient-to-b from-primary/10 to-white py-16 md:py-24">
      <div className="container-custom">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800"
              variants={itemVariants}
            >
              {t('hero.title')}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8"
              variants={itemVariants}
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.a 
                href="#objectives" 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.objectives')}
              </motion.a>
              <motion.a 
                href="#donation" 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.donation')}
              </motion.a>
            </motion.div>
          </div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <motion.img 
              src="https://static.wixstatic.com/media/88ee31_7a3beadbc7cd4d4fb6194cf5e7632208~mv2.jpeg/v1/fill/w_363,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/logoCPD.jpeg" 
              alt="CPD Logo" 
              className="w-full max-w-md rounded-lg shadow-lg"
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
