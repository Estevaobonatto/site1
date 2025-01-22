import React from 'react';
import { Check, X } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const PlanosComparativo = () => {
  const recursos = [
    {
      nome: "Musculação",
      basico: true,
      premium: true,
      black: true,
    },
    {
      nome: "Área Cardio",
      basico: true,
      premium: true,
      black: true,
    },
    {
      nome: "Aulas em Grupo",
      basico: false,
      premium: true,
      black: true,
    },
    {
      nome: "Horário Estendido",
      basico: false,
      premium: true,
      black: true,
    },
    {
      nome: "Acesso 24h",
      basico: false,
      premium: false,
      black: true,
    },
    {
      nome: "Personal Trainer",
      basico: false,
      premium: false,
      black: true,
    },
    {
      nome: "Nutricionista",
      basico: false,
      premium: false,
      black: true,
    }
  ];

  return (
    <div className="mt-24 overflow-x-auto pb-4">
      <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-600/20 rounded-3xl p-6 md:p-8 min-w-[768px]">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-600 mb-8">Comparativo de Planos</h2>
        
        {/* Cabeçalho */}
        <div className="grid grid-cols-4 gap-4 mb-6 px-4">
          <div className="text-gray-400 font-medium">Recursos</div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-purple-400">BÁSICO</h3>
            <p className="text-gray-400 text-sm mt-1">R$ 89,90/mês</p>
          </div>
          <div className="text-center relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-600/20 text-purple-400 
              text-xs md:text-sm font-medium py-1 px-2 md:px-3 rounded-full border border-purple-600/30 
              whitespace-nowrap w-max max-w-[90%]">
              Mais Popular
            </div>
            <h3 className="text-xl font-bold text-purple-400">PREMIUM</h3>
            <p className="text-gray-400 text-sm mt-1">R$ 129,90/mês</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-purple-400">BLACK</h3>
            <p className="text-gray-400 text-sm mt-1">R$ 199,90/mês</p>
          </div>
        </div>

        {/* Linhas de recursos */}
        {recursos.map((recurso, index) => (
          <div 
            key={recurso.nome}
            className={`grid grid-cols-4 gap-4 px-4 py-3 ${
              index % 2 === 0 ? 'bg-gray-900/30' : ''
            } rounded-lg`}
          >
            <div className="text-gray-300 flex items-center">{recurso.nome}</div>
            <div className="flex justify-center items-center">
              {recurso.basico ? (
                <Check weight="bold" className="text-green-500" size={20} />
              ) : (
                <X weight="bold" className="text-red-500" size={20} />
              )}
            </div>
            <div className="flex justify-center items-center">
              {recurso.premium ? (
                <Check weight="bold" className="text-green-500" size={20} />
              ) : (
                <X weight="bold" className="text-red-500" size={20} />
              )}
            </div>
            <div className="flex justify-center items-center">
              {recurso.black ? (
                <Check weight="bold" className="text-green-500" size={20} />
              ) : (
                <X weight="bold" className="text-red-500" size={20} />
              )}
            </div>
          </div>
        ))}

        {/* Nota de rolagem em mobile */}
        <div className="md:hidden text-center text-gray-400 text-sm mt-4">
          ← Deslize para ver mais →
        </div>

        {/* Botão de CTA */}
        <div className="flex justify-center mt-12">
          <Link 
            to="/contato"
            className="bg-purple-600 text-white px-8 py-4 rounded-full font-bold 
              hover:bg-purple-700 transform hover:scale-105 transition-all duration-300
              shadow-lg hover:shadow-purple-600/25 group flex items-center gap-2"
          >
            <span>Adquirir Plano</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlanosComparativo; 