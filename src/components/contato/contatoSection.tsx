import React from 'react';
import Form from '../form/form';

const ContatoSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">ENTRE EM CONTATO</h2>
        <div className="max-w-2xl mx-auto">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContatoSection; 