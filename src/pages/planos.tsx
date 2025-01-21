import React from 'react';
import Card from '../components/card/card';

const Planos = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-purple-600 mb-12 text-center">Nossos Planos</h1>
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
    </div>
  );
};

export default Planos;
