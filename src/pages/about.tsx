import React from 'react';
import Footer from '../components/footer/footer';

const Sobre = () => {
  return (
    <div className="flex flex-col flex-1 bg-[#151515] text-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Sobre Nós</h1>
        <div className="bg-gray-900 rounded-3xl shadow-lg p-6">
          <p className="text-gray-300 mb-4">
            A Power Gym é mais que uma academia - somos um centro de transformação dedicado ao seu sucesso.
          </p>
          <p className="text-gray-300 mb-4">
            Com equipamentos de última geração e profissionais altamente qualificados, 
            oferecemos o ambiente ideal para você alcançar seus objetivos.
          </p>
        </div>
      </div>
      <div className="mt-100">
        <Footer />
      </div>
    </div>
  );
};

export default Sobre;
