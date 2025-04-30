
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToApplicationForm = () => {
    const applicationForm = document.getElementById('apply-form');
    if (applicationForm) {
      applicationForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-alicerce-orange to-alicerce-purple text-white py-20 md:py-28 relative">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Seja Protagonista da Educação no Brasil
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 mt-6">
              No Alicerce, você faz parte de algo maior. Aqui, reunimos 
              instrutores(as) que acreditam num Brasil mais justo 
              e cheio de oportunidades.
            </p>
            
            <div className="flex justify-center md:justify-start mt-10">
              <Button 
                className="bg-white text-alicerce-orange hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-md transition-all transform hover:scale-105"
                onClick={scrollToApplicationForm}
              >
                QUERO ME INSCREVER AGORA
              </Button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="/lovable-uploads/fdb297f4-a039-4905-ba5b-8fcef06190b7.png" 
                  alt="Líder Alicerce ensinando" 
                  className="rounded-lg shadow-lg transform hover:scale-102 transition-all duration-300 h-48 w-full object-cover"
                />
                <img 
                  src="/lovable-uploads/cf571c92-f4b8-49b1-9bd1-809e0ad8bc64.png" 
                  alt="Professores Alicerce" 
                  className="rounded-lg shadow-lg transform hover:scale-102 transition-all duration-300 h-64 w-full object-cover"
                />
              </div>
              <div className="mt-8 space-y-4">
                <img 
                  src="/lovable-uploads/71b5f496-1978-4f63-8a9b-9d123760bd21.png" 
                  alt="Alunos Alicerce" 
                  className="rounded-lg shadow-lg transform hover:scale-102 transition-all duration-300 h-64 w-full object-cover"
                />
                <img 
                  src="/lovable-uploads/752f9bd2-08a8-4807-bf02-7722b618feb2.png" 
                  alt="Equipe Alicerce" 
                  className="rounded-lg shadow-lg transform hover:scale-102 transition-all duration-300 h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg mt-14 mx-auto max-w-4xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white/20 p-3 rounded-full shrink-0">
              <Globe className="text-white h-8 w-8" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-xl mb-4 text-center md:text-left">Estamos no Brasil todo — e de portas abertas para você!</h3>
              <div className="space-y-4 opacity-90">
                <p>
                  Nosso processo seletivo é contínuo, porque acreditamos que grandes 
                  educadores merecem grandes oportunidades, o ano inteiro.
                </p>
                <p>
                  Temos polos espalhados por todo o país, e mesmo que não haja uma vaga 
                  imediata na sua região, seu perfil pode entrar para o nosso 
                  banco de talentos.
                </p>
                <p>
                  Se você compartilha da nossa paixão por transformar vidas por meio 
                  da educação, venha fazer parte desse movimento com a gente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
