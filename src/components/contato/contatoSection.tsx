import React from 'react';
import Form from '../form/form';

const ContatoSection = () => {
  return (
    <section className="py-16 bg-[#151515]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">ENTRE EM CONTATO</h2>
        <div className="max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-sm border border-purple-600/20 p-8 rounded-3xl shadow-lg">
          <div className="text-center mb-8">
            <p className="text-gray-300">
              Tire suas dúvidas ou agende uma visita. Estamos aqui para ajudar!
            </p>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContatoSection; 