
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const NavbarWrapper: React.FC = () => {
  // If we can use useLocation successfully, we're in a Router context
  useLocation();
  
  return <Navbar />;
};

export default NavbarWrapper;
