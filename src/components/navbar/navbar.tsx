import React from 'react';
import { Link } from 'react-router-dom';
import { House, Envelope, User, Handshake, InstagramLogo } from '@phosphor-icons/react';

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-purple-700 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg z-50">
      <div className="flex items-center space-x-8">
        <Link 
          to="/" 
          className="text-white hover:text-purple-200 transform hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <House size={24} weight="duotone" />
        </Link>
        
        <Link 
          to="/contato" 
          className="text-white hover:text-purple-200 transform hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <Envelope size={24} weight="duotone" />
        </Link>
        
        <Link 
          to="/sobre" 
          className="text-white hover:text-purple-200 transform hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <User size={24} weight="duotone" />
        </Link>
        
        <Link 
          to="/planos" 
          className="text-white hover:text-purple-200 transform hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <Handshake size={24} weight="duotone" />
        </Link>
        
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-purple-200 transform hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <InstagramLogo size={24} weight="duotone" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
