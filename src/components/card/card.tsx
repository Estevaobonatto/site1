import React from 'react';

interface CardProps {
  titulo: string;
  descricao: string;
  preco?: string;
  recursos?: string[];
  imagem?: string;
  buttonText?: string;
  buttonLink?: string;
  popular?: boolean;
}

const Card = ({ titulo, descricao, preco, recursos, imagem, buttonText, buttonLink, popular }: CardProps) => {
  return (
    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-purple-600/20 p-8 rounded-3xl transition-all duration-300 hover:border-purple-600/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]">
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600/20 text-purple-400 
          text-xs md:text-sm font-medium py-1 px-2 md:px-4 rounded-full border border-purple-600/30 
          whitespace-nowrap w-max max-w-[90%] text-center">
          Mais Popular
        </div>
      )}
      <div className="flex-1">
        {imagem && <img src={imagem} alt={titulo} className="w-full h-72 object-cover rounded-2xl mb-4" />}
        <h3 className="text-2xl font-bold text-purple-600 mb-4">{titulo}</h3>
        <p className="text-gray-300 mb-4">{descricao}</p>
        {preco && <p className="text-3xl font-bold text-purple-400 mb-4">{preco}</p>}
        {recursos && (
          <ul className="space-y-2 mb-4">
            {recursos.map((recurso, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✓</span>
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
