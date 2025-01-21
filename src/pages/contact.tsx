import React from 'react';
import Form from '../components/form/form';
import Footer from '../components/footer/footer';
import { Phone, Envelope, MapPin, Clock, InstagramLogo, FacebookLogo } from '@phosphor-icons/react';

const ContatoCard = ({ icon: Icon, titulo, conteudo }: { icon: any, titulo: string, conteudo: string }) => (
  <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm border border-purple-600/20 hover:border-purple-600/50 transition-colors duration-300">
    <div className="flex items-center gap-4">
      <div className="bg-purple-600/20 p-3 rounded-xl">
        <Icon size={24} className="text-purple-400" />
      </div>
      <div>
        <h3 className="text-gray-400 text-sm mb-1">{titulo}</h3>
        <p className="text-white font-medium">{conteudo}</p>
      </div>
    </div>
  </div>
);

const SocialButton = ({ icon: Icon, href }: { icon: any, href: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-purple-600/20 p-3 rounded-xl hover:bg-purple-600/30 transition-colors duration-300"
  >
    <Icon size={24} className="text-purple-400" />
  </a>
);

const Contato = () => {
  return (
    <div className="min-h-screen bg-[#151515] text-white pt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">Entre em Contato</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estamos aqui para ajudar! Entre em contato conosco através de qualquer um dos canais abaixo 
            ou preencha o formulário que retornaremos o mais breve possível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <ContatoCard 
            icon={Phone}
            titulo="Telefone"
            conteudo="(11) 99999-9999"
          />
          <ContatoCard 
            icon={Envelope}
            titulo="Email"
            conteudo="contato@powergym.com"
          />
          <ContatoCard 
            icon={MapPin}
            titulo="Endereço"
            conteudo="Rua Exemplo, 123 - SP"
          />
          <ContatoCard 
            icon={Clock}
            titulo="Horário"
            conteudo="Seg-Sex: 6h-22h"
          />
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <SocialButton 
            icon={InstagramLogo}
            href="https://instagram.com"
          />
          <SocialButton 
            icon={FacebookLogo}
            href="https://facebook.com"
          />
        </div>

        <div className="max-w-2xl mx-auto bg-gray-900/50 p-8 rounded-3xl backdrop-blur-sm border border-purple-600/20">
          <h2 className="text-2xl font-bold text-center text-purple-600 mb-8">Envie sua Mensagem</h2>
          <Form />
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Contato;
