
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const { t } = useLanguage();

  const contactItems = [
    { 
      icon: <Mail className="w-6 h-6 text-primary" />, 
      text1: 'cpd.qcca@gmail.com',
      text2: 'pionniersfr@yahoo.fr'
    },
    { 
      icon: <Phone className="w-6 h-6 text-primary" />, 
      text1: '+1 438 866 1964',
      text2: '+1 418 780 7340'
    },
    { 
      icon: <MapPin className="w-6 h-6 text-primary" />, 
      text1: '1901 Avenue Mailloux, Suite 104',
      text2: 'Québec, Québec, Canada, G1J 4Z6'
    },
  ];

  return (
    <div id="contact" className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">
        {t('contact.title')}
      </h3>
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="mr-4 mt-1">{item.icon}</div>
            <div>
              <p className="text-gray-700">{item.text1}</p>
              <p className="text-gray-700">{item.text2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
