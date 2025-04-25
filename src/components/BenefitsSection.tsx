
import React from 'react';
import { Heart, TrendingUp, Users, GraduationCap, Star } from 'lucide-react';

const benefits = [
  {
    icon: Star,
    title: "Trabalhar com propósito",
    description: "Você é mais que um instrutor: é exemplo, referência e agente de mudança."
  },
  {
    icon: TrendingUp,
    title: "Crescimento real",
    description: "Formação contínua, apoio pedagógico e oportunidades de desenvolvimento."
  },
  {
    icon: GraduationCap,
    title: "Trilha de desenvolvimento pensada em você",
    description: "O MOVAA é nosso programa de desenvolvimento gamificado, que conta com benéficos incríveis."
  },
  {
    icon: Users,
    title: "Rede nacional",
    description: "Conexão com outras pessoas apaixonadas pelo mesmo propósito."
  },
  {
    icon: Heart,
    title: "Impacto com afeto",
    description: "Aqui, ensinar vai além do conteúdo: é sobre transformar com intenção."
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-alicerce-gray py-16 md:py-24">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-alicerce-blue mb-16">
          Por que ser um(a) Instrutor(a) Alicerce?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <benefit.icon className="h-10 w-10 text-alicerce-orange mb-4" />
              <h3 className="text-xl font-bold text-alicerce-blue mb-3">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
