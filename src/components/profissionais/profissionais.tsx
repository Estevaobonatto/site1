import React from 'react';
import Card from '../card/card';
import personal from '../../assets/images/personal.jpg';
import nutricionista from '../../assets/images/fisioterapeuta.jpg';
import fisioterapeuta from '../../assets/images/nutricionista.jpg';

const Profissionais = () => {
  return (
    <section className="py-16 bg-[#151515]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">NOSSOS PROFISSIONAIS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            titulo="Personal Trainers"
            descricao="Nossa equipe de personal trainers é altamente qualificada e certificada, com anos de experiência em treinamento personalizado. Desenvolvemos programas sob medida para seus objetivos, seja ganho muscular, perda de peso ou melhoria do condicionamento físico."
            imagem={personal}
            buttonText="Conheça Nossos Personal Trainers"
            buttonLink="/sobre#personal"
          />
          <Card 
            titulo="Nutricionistas" 
            descricao="Conte com nutricionistas especializados em nutrição esportiva para um acompanhamento completo. Oferecemos planos alimentares personalizados, análise de composição corporal e orientação nutricional para otimizar seus resultados e melhorar sua saúde."
            imagem={nutricionista}
            buttonText="Conheça Nossos Nutricionistas"
            buttonLink="/sobre#nutricionistas"
          />
          <Card 
            titulo="Fisioterapeutas"
            descricao="Nossa equipe de fisioterapeutas trabalha na prevenção e tratamento de lesões, com foco em avaliação postural, reabilitação esportiva e técnicas avançadas de terapia manual. Garantimos sua segurança e bem-estar durante os treinos."
            imagem={fisioterapeuta}
            buttonText="Conheça Nossos Fisioterapeutas"
            buttonLink="/sobre#fisioterapeutas"
          />
        </div>
      </div>
    </section>
  );
};

export default Profissionais;