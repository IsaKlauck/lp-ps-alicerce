
import React from 'react';
import { Heart, TrendingUp, Users, GraduationCap, Star, Briefcase, DollarSign, Clock, BookOpen, Trophy } from 'lucide-react';

const benefits = [{
  icon: DollarSign,
  title: "Trabalho com Propósito",
  description: "Seja mais que um instrutor: seja exemplo, referência e agente de transformação na vida dos estudantes."
}, {
  icon: Clock,
  title: "Propósito e Carreira",
  description: "Combinamos impacto social com crescimento profissional exponencial para quem quer fazer a diferença."
}, {
  icon: BookOpen,
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
  icon: Trophy,
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
          
          <h2 className="text-4xl md:text-5xl font-bold text-center text-alicerce-blue mb-6">O que Oferecemos para Você</h2>
          
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            Ser um educador Alicerce vai muito além de um emprego. É fazer parte de uma família 
            que valoriza seu crescimento pessoal e profissional.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* First row */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div 
                key={benefit.title} 
                className="bg-white p-8 rounded-lg shadow-sm text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-alicerce-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-alicerce-blue mb-4">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          {/* Second row */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.slice(3, 6).map((benefit, index) => (
              <div 
                key={benefit.title} 
                className="bg-white p-8 rounded-lg shadow-sm text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-alicerce-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-alicerce-blue mb-4">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center pt-6">
            <button 
              className="bg-alicerce-blue text-white hover:bg-blue-700 transition-colors px-8 py-4 text-lg font-semibold rounded-md shadow-lg" 
              onClick={() => {
                const applicationForm = document.getElementById('apply-form');
                if (applicationForm) {
                  applicationForm.scrollIntoView({
                    behavior: 'smooth'
                  });
                }
              }}
            >
              QUERO SER LÍDER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
