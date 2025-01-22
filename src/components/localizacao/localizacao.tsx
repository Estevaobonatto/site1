import React from 'react';

const Localizacao = () => {
  return (
    <section className="py-16 bg-[#151515]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">LOCALIZAÇÃO</h2>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-600/20 p-6 rounded-3xl shadow-lg">
          <p className="text-center text-gray-300 mb-4">Av. Pres. Getúlio Vargas, 2932 - Centro, Erechim - RS, 99700-000</p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              title="Localização da Academia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.5661870820096!2d-52.27742492506619!3d-27.3475211770663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e2c1952b3c5c7d%3A0x4c4d6c2f0a6c8c0d!2sGrown%20Suplementos!5e0!3m2!1spt-BR!2sbr!4v1710284144561!5m2!1spt-BR!2sbr"
              className="w-full h-96 rounded-2xl"
              style={{border: 0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localizacao; 