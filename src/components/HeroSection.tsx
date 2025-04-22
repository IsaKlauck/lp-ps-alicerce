
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-alicerce-blue to-alicerce-blue/90 text-white py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Seja Protagonista da Educação no Brasil
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 mt-4">
            No Alicerce, você faz parte de algo maior. Aqui, formamos educadores que acreditam num Brasil mais justo e cheio de oportunidades.
          </p>
          
          <div className="mt-8">
            <Button 
              className="bg-alicerce-orange hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-md transition-all"
              onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              QUERO ME INSCREVER AGORA
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mt-12 flex items-start gap-4 max-w-2xl mx-auto">
            <Globe className="text-alicerce-orange h-8 w-8 mt-1 flex-shrink-0" />
            <div className="text-left">
              <h3 className="font-bold text-lg">Estamos no Brasil todo!</h3>
              <p className="opacity-90 mt-1">
                Nosso processo é contínuo e temos polos espalhados por todo o país. Mesmo que não haja vaga imediata, seu perfil pode entrar no nosso banco de talentos — e você será chamado assim que surgir uma oportunidade na sua região ou online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
