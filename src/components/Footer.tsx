
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('hero.title')}</h3>
            <p>{t('presentation.motto')}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('contact.title')}</h3>
            <p className="mb-2">{t('contact.email1')}</p>
            <p className="mb-2">{t('contact.email2')}</p>
            <p className="mb-2">{t('contact.phone')}</p>
            <p>{t('contact.address')}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('nav.objectives')}</h3>
            <ul className="space-y-2">
              <li>{t('objectives.1')}</li>
              <li>{t('objectives.2')}</li>
              <li>{t('objectives.3')}</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
