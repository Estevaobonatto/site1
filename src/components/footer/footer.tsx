import React from 'react';
import { Link } from 'react-router-dom';
import { 
  House, 
  Envelope, 
  User, 
  Handshake, 
  InstagramLogo, 
  FacebookLogo, 
  TwitterLogo,
  Phone,
  MapPin
} from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer className="bg-black-600 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">POWER GYM</h3>
            <p className="text-purple-600">
              Transforme seu corpo e sua vida com os melhores profissionais e equipamentos.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">Links Rápidos</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-purple-600 hover:text-white flex items-center gap-2">
                <House size={20} />
                Home
              </Link>
              <Link to="/sobre" className="text-purple-600 hover:text-white flex items-center gap-2">
                <User size={20} />
                Sobre
              </Link>
              <Link to="/planos" className="text-purple-600 hover:text-white flex items-center gap-2">
                <Handshake size={20} />
                Planos
              </Link>
              <Link to="/contato" className="text-purple-600 hover:text-white flex items-center gap-2">
                <Envelope size={20} />
                Contato
              </Link>
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-purple-600">
                <Phone size={20} />
                (11) 99999-9999
              </p>
              <p className="flex items-center gap-2 text-purple-600">
                <Envelope size={20} />
                contato@powergym.com
              </p>
              <p className="flex items-center gap-2 text-purple-600">
                <MapPin size={20} />
                Rua Exemplo, 123 - SP
              </p>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <InstagramLogo size={24} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <FacebookLogo size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <TwitterLogo size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Power Gym. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
