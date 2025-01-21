import React from 'react';

const Form = () => {
  return (
    <form className="bg-white p-8 rounded-3xl shadow-lg">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Nome</label>
        <input 
          type="text" 
          className="w-full p-2 border border-gray-300 rounded-3xl"
          placeholder="Seu nome"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input 
          type="email" 
          className="w-full p-2 border border-gray-300 rounded-3xl"
          placeholder="seu@email.com"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Mensagem</label>
        <textarea 
          className="w-full p-2 border border-gray-300 rounded-3xl"
          rows={4}
          placeholder="Sua mensagem"
        />
      </div>
      <button 
        type="submit"
        className="w-full bg-purple-600 text-white px-6 py-3 rounded-3xl hover:bg-purple-700"
      >
        Enviar Mensagem
      </button>
    </form>
  );
};

export default Form;
