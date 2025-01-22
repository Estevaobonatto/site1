import React from 'react';
import { CaretDown } from '@phosphor-icons/react';

const Titulo = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="bg-black-600 text-white h-screen flex flex-col items-center justify-center relative">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-purple-600">
          POWER GYM
        </h1>
        <span className="block text-2xl mt-2">SUA ACADEMIA MAIS PROFISSIONAL</span>
      </div>
      
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 w-8 h-8 flex items-center justify-center animate-bounce"
        aria-label="Rolar para conteúdo"
      >
        <CaretDown size={32} className="text-purple-600" />
      </button>
    </section>
  );
};

export default Titulo; 