import React from 'react';
import Card from '../card/card';

const PlanosSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">CONHEÇA NOSSOS PLANOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default PlanosSection; 