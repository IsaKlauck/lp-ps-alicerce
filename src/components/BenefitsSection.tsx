
import React from 'react';
import { DollarSign, Clock, BookOpen, Users, Heart, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import CTAButton from './CTAButton';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Remuneração Competitiva",
      description: "Salários atrativos e compatíveis com o mercado, valorizando seu conhecimento e dedicação."
    },
    {
      icon: Clock,
      title: "Flexibilidade de Horários",
      description: "Diferentes cargas horárias disponíveis para se adequar ao seu estilo de vida."
    },
    {
      icon: BookOpen,
      title: "Formação Continuada",
      description: "Investimento constante no seu desenvolvimento profissional através de capacitações e workshops."
    },
    {
      icon: Users,
      title: "Ambiente Colaborativo",
      description: "Faça parte de uma equipe unida, onde todos trabalham pelo mesmo objetivo transformador."
    },
    {
      icon: Heart,
      title: "Propósito Real",
      description: "Veja diariamente o impacto positivo do seu trabalho na vida de crianças, jovens e adultos."
    },
    {
      icon: Trophy,
      title: "Reconhecimento",
      description: "Sua dedicação é valorizada e reconhecida através de programas de mérito e crescimento."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="beneficios">
      {/* Background design elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-alicerce-teal/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-alicerce-purple/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mx-auto bg-alicerce-purple/10 px-4 py-2 rounded-full mb-4">
            <span className="text-alicerce-purple font-medium">Seus benefícios</span>
          </div>
          
          <h2 className="section-title text-center">O que Oferecemos para Você</h2>
          
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            Ser um educador Alicerce vai muito além de um emprego. É fazer parte de uma 
            família que valoriza seu crescimento pessoal e profissional.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={benefit.title} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white rounded-2xl">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-gradient-to-br from-alicerce-blue to-alicerce-teal rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                  <benefit.icon className="h-8 w-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-alicerce-blue">{benefit.title}</h3>
              </CardHeader>
              <CardContent className="text-center px-6 pb-8">
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <CTAButton />
      </div>
    </section>
  );
};

export default BenefitsSection;
