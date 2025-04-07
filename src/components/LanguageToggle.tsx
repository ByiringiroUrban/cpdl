
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === 'en' ? "secondary" : "ghost"}
        size="sm"
        onClick={() => setLanguage('en')}
        className="text-sm font-medium"
      >
        EN
      </Button>
      <Button
        variant={language === 'fr' ? "secondary" : "ghost"}
        size="sm"
        onClick={() => setLanguage('fr')}
        className="text-sm font-medium"
      >
        FR
      </Button>
    </div>
  );
};

export default LanguageToggle;
