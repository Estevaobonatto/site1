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
    <footer className="bg-[#151515] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-600/20 rounded-3xl shadow-lg p-8 -mt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">POWER GYM</h3>
              <p className="text-gray-300">
                Transforme seu corpo e sua vida com os melhores profissionais e equipamentos.
              </p>
            </div>

            {/* Links Rápidos */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-purple-400 mb-4">Links Rápidos</h4>
              <div className="flex flex-col space-y-2">
                <Link to="/" className="text-gray-300 hover:text-purple-400 flex items-center gap-2 transition-colors">
                  <House size={20} />
                  Home
                </Link>
                <Link to="/sobre" className="text-gray-300 hover:text-purple-400 flex items-center gap-2 transition-colors">
                  <User size={20} />
                  Sobre
                </Link>
                <Link to="/planos" className="text-gray-300 hover:text-purple-400 flex items-center gap-2 transition-colors">
                  <Handshake size={20} />
                  Planos
                </Link>
                <Link to="/contato" className="text-gray-300 hover:text-purple-400 flex items-center gap-2 transition-colors">
                  <Envelope size={20} />
                  Contato
                </Link>
              </div>
            </div>

            {/* Contato */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-purple-400 mb-4">Contato</h4>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-gray-300">
                  <Phone size={20} className="text-purple-400" />
                  (11) 99999-9999
                </p>
                <p className="flex items-center gap-2 text-gray-300">
                  <Envelope size={20} className="text-purple-400" />
                  contato@powergym.com
                </p>
                <p className="flex items-center gap-2 text-gray-300">
                  <MapPin size={20} className="text-purple-400" />
                  Rua Exemplo, 123 - SP
                </p>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-purple-400 mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-purple-600/20 p-3 rounded-xl hover:bg-purple-600/30 transition-colors"
                >
                  <InstagramLogo size={24} className="text-purple-400" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-purple-600/20 p-3 rounded-xl hover:bg-purple-600/30 transition-colors"
                >
                  <FacebookLogo size={24} className="text-purple-400" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-purple-600/20 p-3 rounded-xl hover:bg-purple-600/30 transition-colors"
                >
                  <TwitterLogo size={24} className="text-purple-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Linha Divisória */}
          <div className="border-t border-purple-600/20 mt-8 pt-8">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} Power Gym. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
