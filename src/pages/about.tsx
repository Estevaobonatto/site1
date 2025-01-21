import React from 'react';

const Sobre = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Sobre Nós</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-700 mb-4">
            A Power Gym é mais que uma academia - somos um centro de transformação dedicado ao seu sucesso.
          </p>
          <p className="text-gray-700 mb-4">
            Com equipamentos de última geração e profissionais altamente qualificados, 
            oferecemos o ambiente ideal para você alcançar seus objetivos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
