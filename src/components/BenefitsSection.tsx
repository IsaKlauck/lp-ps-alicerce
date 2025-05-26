
import React from 'react';
import { Heart, TrendingUp, Users, GraduationCap, Star, Briefcase } from 'lucide-react';

const benefits = [{
  icon: Star,
  title: "Trabalho com Propósito",
  description: "Seja mais que um instrutor: seja exemplo, referência e agente de transformação na vida dos estudantes."
}, {
  icon: TrendingUp,
  title: "Propósito e Carreira",
  description: "Combinamos impacto social com crescimento profissional exponencial para quem quer fazer a diferença."
}, {
  icon: GraduationCap,
  title: "Desenvolvimento Contínuo",
  description: "O MOVAA, nosso programa gamificado de desenvolvimento, oferece formação exclusiva e benefícios únicos."
}, {
  icon: Users,
  title: "Rede Nacional",
  description: "Conecte-se com uma comunidade de educadores apaixonados pelo mesmo propósito em todo o Brasil."
}, {
  icon: Heart,
  title: "Impacto com Afeto",
  description: "Aqui, ensinar vai além do conteúdo: é sobre transformar com intenção e construir conexões genuínas."
}, {
  icon: Briefcase,
  title: "Flexibilidade Responsável",
  description: "Tenha autonomia para planejar sua rotina equilibrando propósito, impacto e vida pessoal."
}];

const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-alicerce-gray py-16 md:py-24 relative" id="beneficios">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-5"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mx-auto bg-alicerce-blue/10 px-4 py-2 rounded-full mb-4">
            <span className="text-alicerce-blue font-medium">Seus benefícios</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-center text-alicerce-blue mb-6">Por que se juntar ao Alicerce?</h2>
          
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            Fazer parte do Alicerce é mais do que um trabalho — é uma jornada de crescimento, 
            propósito e impacto real na sociedade.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title} 
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 ${
                index % 6 === 0 ? 'border-red-500' : 
                index % 6 === 1 ? 'border-yellow-500' : 
                index % 6 === 2 ? 'border-green-500' : 
                index % 6 === 3 ? 'border-blue-500' : 
                index % 6 === 4 ? 'border-purple-500' : 'border-orange-500'
              }`}
            >
              <benefit.icon 
                className={`h-12 w-12 mb-4 ${
                  index % 6 === 0 ? 'text-red-500' : 
                  index % 6 === 1 ? 'text-yellow-500' : 
                  index % 6 === 2 ? 'text-green-500' : 
                  index % 6 === 3 ? 'text-blue-500' : 
                  index % 6 === 4 ? 'text-purple-500' : 'text-orange-500'
                }`} 
              />
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
