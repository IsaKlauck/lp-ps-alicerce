
import React from 'react';
import { Heart, Users, Target } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import CTAButton from './CTAButton';

const PurposeSection: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Amor pela Educação",
      description: "Acreditamos no poder transformador da educação e no impacto que um educador dedicado pode causar na vida de seus alunos."
    },
    {
      icon: Users,
      title: "Compromisso Social",
      description: "Trabalhamos para reduzir desigualdades e criar oportunidades reais de crescimento para todos os brasileiros."
    },
    {
      icon: Target,
      title: "Excelência e Inovação",
      description: "Buscamos constantemente novas metodologias e abordagens para tornar o aprendizado mais efetivo e envolvente."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-alicerce-lightBlue/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-alicerce-orange/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mx-auto bg-alicerce-blue/10 px-4 py-2 rounded-full mb-4">
            <span className="text-alicerce-blue font-medium">Nosso propósito</span>
          </div>
          
          <h2 className="section-title text-center">Por que Existimos</h2>
          
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            No Alicerce, acreditamos que a educação é a base de uma sociedade mais justa e próspera. 
            Nosso trabalho vai além do ensino - é sobre criar pontes para o futuro.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <Card key={value.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white rounded-3xl">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-alicerce-blue rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                  <value.icon className="h-8 w-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-alicerce-blue">{value.title}</h3>
              </CardHeader>
              <CardContent className="text-center px-6 pb-8">
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <CTAButton />
      </div>
    </section>
  );
};

export default PurposeSection;
