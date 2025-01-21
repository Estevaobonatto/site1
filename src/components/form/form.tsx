import React, { useState } from 'react';

interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    mensagem: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));


    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<FormData> = {};

    // Validações
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Mensagem é obrigatória';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }


    console.log('Formulário válido:', formData);

    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Seu nome"
          className={`w-full p-3 bg-gray-800/50 rounded-xl border ${
            errors.nome ? 'border-red-500' : 'border-purple-600/20'
          } focus:border-purple-600 focus:outline-none text-white placeholder-gray-400`}
        />
        {errors.nome && (
          <p className="mt-1 text-sm text-red-400">{errors.nome}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Seu email"
          className={`w-full p-3 bg-gray-800/50 rounded-xl border ${
            errors.email ? 'border-red-500' : 'border-purple-600/20'
          } focus:border-purple-600 focus:outline-none text-white placeholder-gray-400`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email}</p>
        )}
      </div>

      <div>
        <textarea
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          placeholder="Sua mensagem"
          rows={4}
          className={`w-full p-3 bg-gray-800/50 rounded-xl border ${
            errors.mensagem ? 'border-red-500' : 'border-purple-600/20'
          } focus:border-purple-600 focus:outline-none text-white placeholder-gray-400 resize-none`}
        />
        {errors.mensagem && (
          <p className="mt-1 text-sm text-red-400">{errors.mensagem}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
      >
        Enviar Mensagem
      </button>
    </form>
  );
};

export default Form;
