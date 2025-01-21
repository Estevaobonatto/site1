import React from 'react';

interface CardProps {
  titulo: string;
  descricao: string;
  preco?: string;
  recursos?: string[];
  imagem?: string;
  buttonText?: string;
  buttonLink?: string;
}

const Card = ({ titulo, descricao, preco, recursos, imagem, buttonText, buttonLink }: CardProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col h-full transform hover:scale-105 transition-transform duration-300">
      <div className="flex-1">
        {imagem && <img src={imagem} alt={titulo} className="w-full h-72 object-cover rounded-2xl mb-4" />}
        <h3 className="text-2xl font-bold text-purple-600 mb-4">{titulo}</h3>
        <p className="text-gray-600 mb-4">{descricao}</p>
        {preco && <p className="text-3xl font-bold text-purple-800 mb-4">{preco}</p>}
        {recursos && (
          <ul className="space-y-2 mb-4">
            {recursos.map((recurso, index) => (
              <li key={index} className="flex items-center">
                <span className="text-purple-600 mr-2">✓</span>
                {recurso}
              </li>
            ))}
          </ul>
        )}
      </div>
      {buttonText && buttonLink && (
        <a 
          href={buttonLink}
          className="inline-block w-full text-center bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 mt-4"
        >
          {buttonText}
        </a>
      )}
    </div>
  );
};

export default Card;
