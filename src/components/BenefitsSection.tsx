
import React from 'react';
import { Heart, TrendingUp, Users, GraduationCap, Star, Briefcase } from 'lucide-react';

const benefits = [{
  icon: Star,
  title: "Trabalhar com propósito",
  description: "Você é mais que um instrutor: é exemplo, referência e agente de mudança."
}, {
  icon: TrendingUp,
  title: "Propósito sem abrir mão da carreira",
  description: "Oferecemos um trabalho com grande propósito mas com possibilidades de crescimento profissional exponenciais."
}, {
  icon: GraduationCap,
  title: "Trilha de desenvolvimento pensada em você",
  description: "O MOVAA é nosso programa de desenvolvimento gamificado, que conta com benefícios incríveis."
}, {
  icon: Users,
  title: "Rede nacional",
  description: "Conexão com outras pessoas apaixonadas pelo mesmo propósito."
}, {
  icon: Heart,
  title: "Impacto com afeto",
  description: "Aqui, ensinar vai além do conteúdo: é sobre transformar com intenção."
}, {
  icon: Briefcase,
  title: "Flexibilidade com responsabilidade",
  description: "Tenha autonomia para planejar sua rotina com propósito e impacto."
}];

const BenefitsSection: React.FC = () => {
  return <section className="bg-alicerce-gray py-16 md:py-24 relative" id="beneficios">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-5"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mx-auto bg-alicerce-blue/10 px-4 py-2 rounded-full mb-4">
            <span className="text-alicerce-blue font-medium">Por que nos escolher</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-center text-alicerce-blue mb-6">Por que ser um(a) instrutor(a) Alicerce?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => <div key={benefit.title} className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 ${index % 6 === 0 ? 'border-red-500' : index % 6 === 1 ? 'border-yellow-500' : index % 6 === 2 ? 'border-green-500' : index % 6 === 3 ? 'border-blue-500' : index % 6 === 4 ? 'border-purple-500' : 'border-orange-500'}`}>
              <benefit.icon className={`h-12 w-12 mb-4 ${index % 6 === 0 ? 'text-red-500' : index % 6 === 1 ? 'text-yellow-500' : index % 6 === 2 ? 'text-green-500' : index % 6 === 3 ? 'text-blue-500' : index % 6 === 4 ? 'text-purple-500' : 'text-orange-500'}`} />
              <h3 className="text-xl font-bold text-alicerce-blue mb-3 text-left">{benefit.title}</h3>
              <p className="text-gray-700 text-left">{benefit.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};

export default BenefitsSection;
