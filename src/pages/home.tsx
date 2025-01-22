import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Titulo from '../components/titulo/titulo';
import Profissionais from '../components/profissionais/profissionais';
import ImagensSection from '../components/imagens/imagensSection';
import Localizacao from '../components/localizacao/localizacao';
import PlanosSection from '../components/planos/planosSection';
import ContatoSection from '../components/contato/contatoSection';
import Footer from '../components/footer/footer';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '30px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`will-change-transform ${
        isVisible 
          ? 'animate-fade-in-left' 
          : 'opacity-0'
      }`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'both',
        transform: isVisible ? 'none' : 'translateX(-10px)'
      }}
    >
      {children}
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col bg-[#151515] text-white">
      <Titulo />
      
      <AnimatedSection delay={100}>
        <Profissionais />
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <ImagensSection />
      </AnimatedSection>

      <AnimatedSection delay={300}>
        <Localizacao />
      </AnimatedSection>

      <AnimatedSection delay={400}>
        <PlanosSection />
      </AnimatedSection>

      <AnimatedSection delay={500}>
          <ContatoSection />
      </AnimatedSection>

      <div className="mt-100">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
