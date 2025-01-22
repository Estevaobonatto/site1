import React from 'react';
import { Link } from 'react-router-dom';

const PlanosSection = () => {
  return (
    <section className="py-16 bg-[#151515]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">NOSSOS PLANOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plano Básico */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-600/20 p-8 rounded-3xl transition-all duration-300 hover:border-purple-600/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">BÁSICO</h3>
            <p className="text-gray-400 mb-4">Ideal para iniciantes</p>
            <p className="text-3xl font-bold text-purple-400 mb-6">R$ 89,90/mês</p>
            <ul className="space-y-2 mb-8 text-gray-300">
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span>
                Acesso à musculação
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span>
                Horário comercial
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span>
                Suporte básico
              </li>
            </ul>
          </div>

          {/* Plano Premium */}
          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-purple-600/20 p-8 rounded-3xl transition-all duration-300 hover:border-purple-600/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600/20 text-purple-400 text-xs md:text-sm font-medium 
              py-1 px-2 md:px-4 rounded-full border border-purple-600/30 whitespace-nowrap
              md:w-auto w-max max-w-[90%] text-center">
              Mais Popular
            </div>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">PREMIUM</h3>
            <p className="text-gray-400 mb-4">O mais escolhido</p>
            <p className="text-3xl font-bold text-purple-400 mb-6">R$ 129,90/mês</p>
            <ul className="space-y-2 mb-8 text-gray-300">
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span>
                Acesso total à academia
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span>
                Horário estendido
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span>
                Aulas em grupo
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span>
                Avaliação mensal
              </li>
            </ul>
          </div>

          {/* Plano Black */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-600/20 p-8 rounded-3xl transition-all duration-300 hover:border-purple-600/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">BLACK</h3>
            <p className="text-gray-400 mb-4">Para resultados máximos</p>
            <p className="text-3xl font-bold text-purple-400 mb-6">R$ 199,90/mês</p>
            <ul className="space-y-2 mb-8 text-gray-300">
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span>
                Acesso 24h
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span>
                Personal trainer
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span>
                Todas as aulas
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span>
                Nutricionista
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/planos"
            className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full font-bold 
              hover:bg-purple-700 transform hover:scale-105 transition-all duration-300
              shadow-lg hover:shadow-purple-600/25 group"
          >
            Ver Comparativo Completo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlanosSection; 