import React from 'react';

const Contato = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Contato</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Nome</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Mensagem</label>
              <textarea 
                className="w-full p-2 border border-gray-300 rounded"
                rows={4}
                placeholder="Sua mensagem"
              />
            </div>
            <button 
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato;
