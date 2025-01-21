import React from 'react';
import { Check, X, Star } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

interface PlanoFeature {
  name: string;
  basico: boolean;
  premium: boolean;
  black: boolean;
}

const PlanosComparativo = () => {
  const features: PlanoFeature[] = [
    {
      name: "Acesso à musculação",
      basico: true,
      premium: true,
      black: true
    },
    {
      name: "Horário comercial",
      basico: true,
      premium: false,
      black: false
    },
    {
      name: "Horário estendido",
      basico: false,
      premium: true,
      black: false
    },
    {
      name: "Acesso 24h",
      basico: false,
      premium: false,
      black: true
    },
    {
      name: "Aulas em grupo",
      basico: false,
      premium: true,
      black: true
    },
    {
      name: "Avaliação mensal",
      basico: false,
      premium: true,
      black: true
    },
    {
      name: "Personal trainer",
      basico: false,
      premium: false,
      black: true
    },
    {
      name: "Nutricionista",
      basico: false,
      premium: false,
      black: true
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-16 p-6">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">Comparativo dos Planos</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#1A0B38]">
              <th className="p-4 text-left text-gray-400 w-1/4">Recursos</th>
              <th className="p-4 w-1/4">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-600/20 rounded-2xl p-6 transform transition-transform hover:scale-105">
                  <span className="block text-xl font-bold text-purple-400">BÁSICO</span>
                  <span className="block text-3xl font-bold text-white mt-2">R$ 89,90</span>
                  <span className="block text-sm text-gray-400 mt-1">/mês</span>
                </div>
              </th>
              <th className="p-4 w-1/4">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-600/20 rounded-2xl p-6 transform transition-transform hover:scale-105 relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-purple-600/80 text-white text-xs px-3 py-0.5 rounded-full">
                    Mais Popular
                  </div>
                  <span className="block text-xl font-bold text-purple-400">PREMIUM</span>
                  <span className="block text-3xl font-bold text-white mt-2">R$ 129,90</span>
                  <span className="block text-sm text-gray-400 mt-1">/mês</span>
                </div>
              </th>
              <th className="p-4 w-1/4">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-600/20 rounded-2xl p-6 transform transition-transform hover:scale-105">
                  <span className="block text-xl font-bold text-purple-400">BLACK</span>
                  <span className="block text-3xl font-bold text-white mt-2">R$ 199,90</span>
                  <span className="block text-sm text-gray-400 mt-1">/mês</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr 
                key={index} 
                className={`border-b border-[#1A0B38] ${
                  index % 2 === 0 ? 'bg-[#110726]/50' : ''
                }`}
              >
                <td className="p-4 text-gray-300">{feature.name}</td>
                <td className="p-4 text-center">
                  {feature.basico ? (
                    <Check weight="bold" className="mx-auto text-green-500" size={24} />
                  ) : (
                    <X weight="bold" className="mx-auto text-red-500" size={24} />
                  )}
                </td>
                <td className="p-4 text-center">
                  {feature.premium ? (
                    <Check weight="bold" className="mx-auto text-green-500" size={24} />
                  ) : (
                    <X weight="bold" className="mx-auto text-red-500" size={24} />
                  )}
                </td>
                <td className="p-4 text-center">
                  {feature.black ? (
                    <Check weight="bold" className="mx-auto text-green-500" size={24} />
                  ) : (
                    <X weight="bold" className="mx-auto text-red-500" size={24} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="text-center mt-12">
        <Link 
          to="/contato" 
          className="inline-block mt-3 bg-purple-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
        >
          Adquira Seu Plano Agora
        </Link>
      </div>
    </div>
  );
};

export default PlanosComparativo; 