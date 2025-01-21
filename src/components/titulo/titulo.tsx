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
    <section className="bg-black-600 text-white h-screen flex items-center relative">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-purple-600">
          POWER GYM
        </h1>
        <span className="block text-2xl mt-2">SUA ACADEMIA MAIS PROFISSIONAL</span>
      </div>
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToContent}
      >
        <CaretDown size={32} className="text-purple-600" />
      </div>
    </section>
  );
};

export default Titulo; 