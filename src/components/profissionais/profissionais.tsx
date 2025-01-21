import React from 'react';
import Card from '../card/card';

const Profissionais = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">NOSSOS PROFISSIONAIS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            titulo="Personal Trainers"
            descricao="Equipe especializada em treinos personalizados"
          />
          <Card 
            titulo="Nutricionistas"
            descricao="Acompanhamento nutricional completo"
          />
          <Card 
            titulo="Fisioterapeutas"
            descricao="Suporte para sua recuperação e prevenção"
          />
        </div>
      </div>
    </section>
  );
};

export default Profissionais; 