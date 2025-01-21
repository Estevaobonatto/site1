import React from 'react';
import Titulo from '../components/titulo/titulo';
import Profissionais from '../components/profissionais/profissionais';
import ImagensSection from '../components/imagens/imagensSection';
import Localizacao from '../components/localizacao/localizacao';
import PlanosSection from '../components/planos/planosSection';
import ContatoSection from '../components/contato/contatoSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Titulo />
      <Profissionais />
      <ImagensSection />
      <Localizacao />
      <PlanosSection />
      <ContatoSection />
    </div>
  );
};

export default Home;
