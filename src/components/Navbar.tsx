
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import { Menu, X, LayoutDashboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { key: 'nav.home', href: '#home', isExternal: true },
    { key: 'nav.objectives', href: '#objectives', isExternal: true },
    { key: 'nav.team', href: '#team', isExternal: true },
    { key: 'nav.achievements', href: '#achievements', isExternal: true },
    { key: 'nav.information', href: '#information', isExternal: true },
    { key: 'nav.reports', href: '#reports', isExternal: true },
    { key: 'nav.donation', href: '#donation', isExternal: true },
    { key: 'nav.contact', href: '/contact', isExternal: false },
    { key: 'nav.dashboard', href: '/dashboard', isExternal: false },
  ];

  return (
    <motion.header 
      className={`sticky top-0 z-40 w-full bg-white border-b ${scrolled ? 'shadow-md' : 'shadow-sm'} transition-shadow duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link to="/">
              <img 
                src="https://static.wixstatic.com/media/88ee31_7a3beadbc7cd4d4fb6194cf5e7632208~mv2.jpeg/v1/fill/w_363,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/logoCPD.jpeg" 
                alt="CPD Logo" 
                className="h-12 md:h-16"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              item.isExternal ? (
                <motion.a 
                  key={item.key}
                  href={location.pathname === '/' ? item.href : `/${item.href}`}
                  className="text-sm font-medium text-gray-700 hover:text-primary transition-colors px-2 py-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t(item.key)}
                </motion.a>
              ) : (
                <motion.div key={item.key} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to={item.href}
                    className={`text-sm font-medium px-2 py-1 ${
                      location.pathname === item.href 
                        ? 'text-primary border-b-2 border-primary' 
                        : 'text-gray-700 hover:text-primary'
                    } transition-colors`}
                  >
                    {item.key === 'nav.dashboard' ? (
                      <div className="flex items-center">
                        <LayoutDashboard size={16} className="mr-1" />
                        {t(item.key)}
                      </div>
                    ) : t(item.key)}
                  </Link>
                </motion.div>
              )
            ))}
            <LanguageToggle />
          </nav>

          {/* Mobile Navigation Toggle */}
          <motion.button 
            className="md:hidden p-2 text-gray-600"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                item.isExternal ? (
                  <motion.a 
                    key={item.key}
                    href={location.pathname === '/' ? item.href : `/${item.href}`}
                    className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t(item.key)}
                  </motion.a>
                ) : (
                  <motion.div key={item.key} whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      to={item.href}
                      className={`text-sm font-medium py-2 flex ${
                        location.pathname === item.href 
                          ? 'text-primary' 
                          : 'text-gray-700 hover:text-primary'
                      } transition-colors`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.key === 'nav.dashboard' ? (
                        <div className="flex items-center">
                          <LayoutDashboard size={16} className="mr-1" />
                          {t(item.key)}
                        </div>
                      ) : t(item.key)}
                    </Link>
                  </motion.div>
                )
              ))}
              <div className="pt-2">
                <LanguageToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
