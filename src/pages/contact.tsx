import React from 'react';
import Form from '../components/form/form';
import Footer from '../components/footer/footer';
const Contato = () => {
  return (
    <div className="min-h-screen bg-[#151515] text-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Contato</h1>
        <div className="max-w-2xl mx-auto">
          <Form />
        </div>
      </div>
      <div className="mt-100">
        <Footer />
      </div>
    </div>

  );
};

export default Contato;
