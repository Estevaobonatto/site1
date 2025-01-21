import React from 'react';
import Titulo from '../components/titulo/titulo';
import Profissionais from '../components/profissionais/profissionais';
import ImagensSection from '../components/imagens/imagensSection';
import Localizacao from '../components/localizacao/localizacao';
import PlanosSection from '../components/planos/planosSection';
import ContatoSection from '../components/contato/contatoSection';
import Footer from '../components/footer/footer';
const Home = () => {
  return (
    <div className="flex flex-col bg-[#151515] text-white">
      <Titulo />
      <Profissionais />
      <ImagensSection />
      <Localizacao />
      <PlanosSection />
      <ContatoSection />
      <div className="mt-100">
        <Footer />
      </div>

    </div>
  );
};

export default Home;
