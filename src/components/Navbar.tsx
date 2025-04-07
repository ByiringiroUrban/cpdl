
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.objectives', href: '#objectives' },
    { key: 'nav.team', href: '#team' },
    { key: 'nav.achievements', href: '#achievements' },
    { key: 'nav.information', href: '#information' },
    { key: 'nav.reports', href: '#reports' },
    { key: 'nav.donation', href: '#donation' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://static.wixstatic.com/media/88ee31_7a3beadbc7cd4d4fb6194cf5e7632208~mv2.jpeg/v1/fill/w_363,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/logoCPD.jpeg" 
              alt="CPD Logo" 
              className="h-12 md:h-16"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
            <LanguageToggle />
          </nav>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
            <div className="pt-2">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
