
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="bg-gradient-to-b from-primary/10 to-white py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#objectives" 
                className="btn-primary"
              >
                {t('nav.objectives')}
              </a>
              <a 
                href="#donation" 
                className="btn-secondary"
              >
                {t('nav.donation')}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://static.wixstatic.com/media/88ee31_7a3beadbc7cd4d4fb6194cf5e7632208~mv2.jpeg/v1/fill/w_363,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/logoCPD.jpeg" 
              alt="CPD Logo" 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
