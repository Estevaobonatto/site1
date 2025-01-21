import React from 'react';

const ImagensSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">NOSSA ESTRUTURA</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img src="/src/assets/academia1.jpg" alt="Estrutura" className="rounded-lg shadow-lg" />
          <img src="/src/assets/academia2.jpg" alt="Equipamentos" className="rounded-lg shadow-lg" />
          <img src="/src/assets/academia3.jpg" alt="Ambiente" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default ImagensSection; 