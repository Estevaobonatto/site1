import React from 'react';
import { Link } from 'react-router-dom';
import { House, Envelope, User, Handshake, InstagramLogo, X, List } from '@phosphor-icons/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className={`fixed md:top-4 md:left-1/2 top-4 left-4 transform ${
      isOpen ? 'left-4' : 'left-4'
    } md:-translate-x-1/2 bg-purple-700 backdrop-blur-sm rounded-full md:px-8 px-3 py-3 md:py-4 shadow-lg z-50 transition-all duration-300`}>
      {/* Menu para desktop */}
      <div className="hidden md:flex items-center space-x-8">
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

      {/* Menu para mobile */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-1 hover:text-purple-200 transition-colors duration-300 relative"
        >
          <div className="transform transition-all duration-300">
            {isOpen ? (
              <X size={20} weight="bold" className="animate-spin-once" />
            ) : (
              <List size={20} weight="bold" className="animate-fade-in" />
            )}
          </div>
        </button>

        <div className={`absolute top-full left-0 mt-2 transform transition-all duration-300 origin-top-left
          ${isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-600/20 rounded-2xl p-4 flex flex-col space-y-4 min-w-[200px]">
            {/* Links do Menu */}
            {[
              { to: "/", icon: House, text: "Home" },
              { to: "/contato", icon: Envelope, text: "Contato" },
              { to: "/sobre", icon: User, text: "Sobre" },
              { to: "/planos", icon: Handshake, text: "Planos" }
            ].map((item, index) => (
              <Link 
                key={item.to}
                to={item.to} 
                className={`text-white hover:text-purple-400 flex items-center gap-2 transition-all duration-300 
                  px-2 py-1.5 rounded-lg hover:bg-purple-600/20 transform hover:translate-x-1
                  ${isOpen ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={18} weight="duotone" />
                <span className="text-sm">{item.text}</span>
              </Link>
            ))}
            
            {/* Separador e Instagram */}
            <div className={`border-t border-purple-600/20 pt-2 ${isOpen ? 'animate-fade-in-up' : ''}`}
                 style={{ animationDelay: '200ms' }}>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-purple-400 flex items-center gap-2 transition-all duration-300 
                  px-2 py-1.5 rounded-lg hover:bg-purple-600/20 transform hover:translate-x-1"
                onClick={() => setIsOpen(false)}
              >
                <InstagramLogo size={18} weight="duotone" />
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
