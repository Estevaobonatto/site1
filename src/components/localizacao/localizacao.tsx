import React from 'react';

const Localizacao = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">LOCALIZAÇÃO</h2>
        <div className="bg-gray-100 p-6 rounded-3xl shadow-lg">
          <p className="text-center mb-4">Rua Exemplo, 123 - Bairro - Cidade/UF</p>
            <div className="aspect-w-16 aspect-h-9">
            <iframe 
              title="Localização da Academia"
              src="https://www.google.com/maps/embed?pb=..."
              className="w-full h-96 rounded-3xl"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localizacao; 