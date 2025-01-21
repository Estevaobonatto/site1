import React from 'react';

interface CardProps {
  titulo: string;
  descricao: string;
  preco?: string;
  recursos?: string[];
}

const Card = ({ titulo, descricao, preco, recursos }: CardProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-bold text-purple-600 mb-4">{titulo}</h3>
      <p className="text-gray-600 mb-4">{descricao}</p>
      {preco && <p className="text-3xl font-bold text-purple-800 mb-4">{preco}</p>}
      {recursos && (
        <ul className="space-y-2">
          {recursos.map((recurso, index) => (
            <li key={index} className="flex items-center">
              <span className="text-purple-600 mr-2">✓</span>
              {recurso}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Card;
