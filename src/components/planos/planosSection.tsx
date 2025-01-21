import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/card';

const PlanosSection = () => {
  return (
    <section className="py-16 bg-[#151515]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">CONHEÇA NOSSOS PLANOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card 
            titulo="BÁSICO"
            descricao="Ideal para iniciantes"
            preco="R$ 89,90/mês"
            recursos={[
              "Acesso à musculação",
              "Horário comercial",
              "Suporte básico"
            ]}
          />
          <Card 
            titulo="PREMIUM"
            descricao="O mais escolhido"
            preco="R$ 129,90/mês"
            recursos={[
              "Acesso total à academia",
              "Horário estendido",
              "Aulas em grupo",
              "Avaliação mensal"
            ]}
          />
          <Card 
            titulo="BLACK"
            descricao="Para resultados máximos"
            preco="R$ 199,90/mês"
            recursos={[
              "Acesso 24h",
              "Personal trainer",
              "Todas as aulas",
              "Nutricionista"
            ]}
          />
        </div>
        <div className="text-center">
          <Link 
            to="/planos" 
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            Ver Comparativo Completo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlanosSection; 