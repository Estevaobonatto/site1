import React, { useEffect } from 'react';
import Footer from '../components/footer/footer';
import { Circle } from '@phosphor-icons/react';
import ImagensSection from '../components/imagens/imagensSection';
import { AnimatedSection } from '../components/animations/AnimatedSection';

interface HistoryItem {
  year: string;
  title: string;
  description: string;
}

const Sobre = () => {
  const historyItems: HistoryItem[] = [
    {
      year: "2010",
      title: "Fundação",
      description: "A Power Gym foi fundada com o objetivo de trazer um novo conceito em treinamento físico para a cidade, focando em equipamentos modernos e atendimento personalizado."
    },
    {
      year: "2015", 
      title: "Primeira Expansão",
      description: "Ampliação das instalações para 1000m² e introdução de novas modalidades de treino, incluindo CrossFit e aulas coletivas."
    },
    {
      year: "2018",
      title: "Certificação Internacional",
      description: "Conquistamos certificação internacional de qualidade e nossos profissionais passaram por extensivo programa de capacitação."
    },
    {
      year: "2020",
      title: "Inovação Digital",
      description: "Implementação de sistema digital de treino e acompanhamento, permitindo que nossos alunos treinem também em casa durante a pandemia."
    },
    {
      year: "2022",
      title: "Segunda Expansão",
      description: "Inauguração da segunda unidade da Power Gym, com área total de 2000m² e estúdio dedicado para práticas funcionais e artes marciais."
    },
    {
      year: "2025",
      title: "Futuro",
      description: "Planejamento de expansão para mais três unidades e implementação de tecnologia de realidade virtual para treinos imersivos."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col flex-1 bg-[#151515] text-white pt-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-purple-600 mb-8 mt-12 text-center">Sobre Nós</h1>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-600/20 rounded-3xl p-8">
            <p className="text-gray-300 mb-4">
              A Power Gym transcende o conceito tradicional de academia - somos um centro de transformação completo e inovador, totalmente dedicado ao seu sucesso pessoal, oferecendo uma experiência única que combina tecnologia, conhecimento e motivação para impulsionar sua jornada fitness.
            </p>
            <p className="text-gray-300 mb-4">
              Nosso compromisso com a excelência se reflete em cada detalhe, desde nossos equipamentos de última geração criteriosamente selecionados até nossa equipe de profissionais altamente qualificados e apaixonados, criando assim o ambiente perfeito para que você supere seus limites e alcance todos os seus objetivos de forma segura e eficiente.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16">
          <AnimatedSection delay={200}>
            <h2 className="text-3xl font-bold text-purple-600 mb-12 text-center">Nossa História</h2>
          </AnimatedSection>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-purple-600/20 md:block hidden" />
            
            <div className="absolute left-4 top-0 bottom-0 w-px bg-purple-600/20 md:hidden" />
            
            <div className="space-y-12 md:space-y-24">
              {historyItems.map((item, index) => (
                <AnimatedSection 
                  key={item.year} 
                  delay={300 + (index * 100)}
                >
                  <div className={`relative flex items-center ${
                    index % 2 === 0 
                      ? 'md:justify-start justify-start' 
                      : 'md:justify-end justify-start'
                  }`}>
                    <div className={`absolute h-px bg-purple-600/20 top-1/2 transform -translate-y-1/2 ${
                      index % 2 === 0
                        ? 'md:right-[50%] md:left-auto md:w-[40px] w-[20px] left-4'
                        : 'md:left-[50%] md:w-[40px] w-[20px] left-4'
                    }`} />

                    <div className={`absolute z-10 ${
                      index % 2 === 0 
                        ? 'md:left-1/2 left-4' 
                        : 'md:left-1/2 left-4'
                    } transform -translate-x-1/2`}>
                      <Circle weight="fill" className="text-purple-600" size={16} />
                    </div>
                    
                    <div className={`${
                      index % 2 === 0 
                        ? 'md:w-[45%] md:pr-0 pl-12' 
                        : 'md:w-[45%] md:pl-0 pl-12'
                    } w-[calc(100%-2rem)]`}>
                      <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-600/20 p-6 rounded-2xl 
                        transition-all duration-300 ease-in-out hover:border-purple-600/50 
                        hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] hover:-translate-y-1 
                        group cursor-default">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-2xl font-bold text-purple-400 transition-colors duration-300 group-hover:text-purple-500">
                            {item.year}
                          </span>
                          <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-purple-200">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-100">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        <AnimatedSection delay={800}>
          <div className="mt-24">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-600/20 rounded-3xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">Nossa Estrutura</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Instalações Modernas</h3>
                  <p className="text-gray-300">
                    Com mais de 2000m² distribuídos estrategicamente, nossa academia oferece ambientes específicos para cada tipo de treino, garantindo o máximo aproveitamento do seu exercício.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Equipamentos Premium</h3>
                  <p className="text-gray-300">
                    Investimos constantemente em equipamentos de última geração das melhores marcas do mundo, proporcionando segurança e eficiência em seus treinos.
                  </p>
                </div>
              </div>
            </div>

            <ImagensSection showTitle={false} reducedPadding={true} />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-600/20 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Área de Musculação</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Equipamentos de última geração</li>
                  <li>• Área climatizada</li>
                  <li>• Espelhos em todas as paredes</li>
                  <li>• Piso emborrachado profissional</li>
                </ul>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-600/20 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Área Funcional</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Box de CrossFit completo</li>
                  <li>• Equipamentos funcionais</li>
                  <li>• Área para treino livre</li>
                  <li>• Acessórios especializados</li>
                </ul>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-600/20 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Área de Cardio</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Esteiras profissionais</li>
                  <li>• Bikes ergométricas</li>
                  <li>• Elípticos de alta performance</li>
                  <li>• Monitores cardíacos</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default Sobre;
