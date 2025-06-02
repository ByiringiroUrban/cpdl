
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { useLanguage } from '@/context/LanguageContext';

const Partners = () => {
  const { t } = useLanguage();
  
  const partners = [
    {
      name: t('partners.un'),
      logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      website: "https://www.un.org"
    },
    {
      name: t('partners.unicef'),
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      website: "https://www.unicef.org"
    },
    {
      name: t('partners.who'),
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      website: "https://www.who.int"
    },
    {
      name: t('partners.redcross'),
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      website: "https://www.redcross.ca"
    },
    {
      name: t('partners.peacecorps'),
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      website: "https://www.peacecorps.gov"
    },
    {
      name: t('partners.community'),
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      website: "#"
    },
    {
      name: t('partners.ida'),
      logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      website: "#"
    },
    {
      name: t('partners.education'),
      logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      website: "#"
    }
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 hover:border-primary/20 h-32 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
              <p className="text-center mt-3 text-sm font-medium text-gray-600 group-hover:text-primary transition-colors duration-300">
                {partner.name}
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
