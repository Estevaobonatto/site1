import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0 }) => {
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