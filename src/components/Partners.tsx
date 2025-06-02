
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { useLanguage } from '@/context/LanguageContext';

const Partners = () => {
  const { t } = useLanguage();
  
  const partners = [
    {
      
      logo: "https://www.francophonie.org/themes/francophonie/images/site-logo-francophonie.png",
      website: "https://www.francophonie.org/"
    },
    {
      
      logo: "/image.png",
      website: "https://iansa.org/"
    },
    {
      
      logo: "/image1.png",
      website: "https://diplomatie.belgium.be/fr/propos/services-et-structure"
    },
    {
      
      logo: "https://www.grip.org/wp-content/uploads/2023/10/grip1-300x181-1.jpg",
      website: "https://www.grip.org/"
    },
    {
      
      logo: "https://icanpeacework.org/wp-content/uploads/2024/03/mobile-logo.svg",
      website: "https://icanpeacework.org/"
    },
    
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          title={t('partners.title')} 
          className="mb-16"
        />
        
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('partners.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-16 border border-gray-100 hover:border-primary/20 h-32 flex items-center justify-center">
              <a href={partner.website}>  <img
                  src={partner.logo}
                  alt={`logo`}
                  className="max-w-full max-h-full object-contain  group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                /> </a>
              </div>
              <p className="text-center mt-3 text-sm font-medium text-gray-600 group-hover:text-primary transition-colors duration-300">
                {}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-sm border border-primary/10">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                >
                  {i}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-800">{t('partners.active')}</p>
              <p className="text-xs text-gray-600">{t('partners.growing')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
