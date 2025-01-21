import React from 'react';
import academia1 from '../../assets/images/academia1.jpeg';
import academia2 from '../../assets/images/academia2.jpg';
import academia3 from '../../assets/images/academia3.jpg';

interface ImagemProps {
  src: string;
  alt: string;
  titulo: string;
  descricao: string;
}

const ImagemCard = ({ src, alt, titulo, descricao }: ImagemProps) => (
  <div className="relative group overflow-hidden rounded-3xl shadow-lg">
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-80 object-cover transform group-hover:scale-110 group-hover:brightness-50 transition-all duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-purple-400 mb-2">{titulo}</h3>
        <p className="text-gray-100 text-sm">{descricao}</p>
      </div>
    </div>
  </div>
);

const ImagensSection = () => {
  const imagens: ImagemProps[] = [
    {
      src: academia1,
      alt: "Área de Musculação",
      titulo: "Equipamentos Modernos",
      descricao: "Área de musculação completa com equipamentos de última geração para seu treino"
    },
    {
      src: academia2,
      alt: "Área de Aeróbico",
      titulo: "Espaço para Aeróbicos",
      descricao: "Ambiente amplo e climatizado para atividades aeróbicas e funcionais"
    },
    {
      src: academia3,
      alt: "Área de Treino",
      titulo: "Área de Treino Livre",
      descricao: "Espaço dedicado para treinos livres e funcionais com equipamentos diversos"
    }
  ];

  return (
    <section className="py-16 bg-[#151515]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">NOSSA ESTRUTURA</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {imagens.map((imagem, index) => (
            <ImagemCard key={index} {...imagem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImagensSection; 