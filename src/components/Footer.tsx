
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Phone, MapPin, Heart, Globe, Shield, Lightbulb } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Heart className="w-5 h-5 mr-2 text-primary" strokeWidth={2} />
              {t('hero.title')}
            </h3>
            <p className="text-gray-300 mb-4">{t('presentation.motto')}</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Phone className="w-5 h-5 mr-2 text-primary" strokeWidth={2} />
              {t('contact.title')}
            </h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1 text-primary" strokeWidth={2} />
                <p className="text-gray-300">{t('contact.email1')}</p>
              </div>
              <div className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1 text-primary" strokeWidth={2} />
                <p className="text-gray-300">{t('contact.email2')}</p>
              </div>
              <div className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-1 text-primary" strokeWidth={2} />
                <p className="text-gray-300">{t('contact.phone')}</p>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 text-primary" strokeWidth={2} />
                <p className="text-gray-300">{t('contact.address')}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-primary" strokeWidth={2} />
              {t('nav.objectives')}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <Shield className="w-4 h-4 mr-2 mt-1 text-primary" strokeWidth={2} />
                <span>{t('objectives.1')}</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-4 h-4 mr-2 mt-1 text-primary" strokeWidth={2} />
                <span>{t('objectives.2')}</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-4 h-4 mr-2 mt-1 text-primary" strokeWidth={2} />
                <span>{t('objectives.3')}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Lightbulb className="w-5 h-5 mr-2 text-primary" strokeWidth={2} />
              {t('fields.title')}
            </h3>
            <p className="text-gray-300">
              The Colony of Development Pioneers' scope of action is the entire territory of Quebec, in Canada and abroad where its objectives are justified.
            </p>
          </div>
        </div>
        
        <Separator className="bg-gray-700 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="https://static.wixstatic.com/media/88ee31_7a3beadbc7cd4d4fb6194cf5e7632208~mv2.jpeg/v1/fill/w_363,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/logoCPD.jpeg" 
              alt="CPD Logo" 
              className="h-16 w-auto mr-4 rounded"
            />
            <div>
              <h4 className="font-semibold text-primary">Colonie des Pionniers du Développement</h4>
              <p className="text-sm text-gray-400">Solidarity, Peace and Development for all</p>
            </div>
          </div>
          
          <p className={cn("text-gray-400 text-sm")}>
            &copy; {new Date().getFullYear()} {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
