
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
    <section className="bg-gradient-to-br from-alicerce-orange to-alicerce-purple text-white py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Seja Protagonista da Educação no Brasil
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 mt-4">
            No Alicerce, você faz parte de algo maior. Aqui, reunimos instrutores(as) que acreditam num Brasil mais justo e cheio de oportunidades — e que transformam vidas todos os dias por meio da educação.
          </p>
          
          <div className="mt-8">
            <Button 
              className="bg-white text-alicerce-orange hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-md transition-all"
              onClick={scrollToApplicationForm}
            >
              QUERO ME INSCREVER AGORA
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg mt-12 flex flex-col gap-6 max-w-2xl mx-auto text-left">
            <div className="flex items-start gap-4">
              <Globe className="text-white h-8 w-8 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Estamos no Brasil todo — e de portas abertas para você!</h3>
                <div className="space-y-4 opacity-90">
                  <p>
                    Nosso processo seletivo é contínuo, porque acreditamos que grandes educadores merecem grandes oportunidades, o ano inteiro.
                  </p>
                  <p>
                    Temos polos espalhados por todo o país, e mesmo que não haja uma vaga imediata na sua região, seu perfil pode entrar para o nosso banco de talentos. Assim que surgir uma oportunidade perto de você — ou até mesmo remota —, entraremos em contato!
                  </p>
                  <p>
                    Se você compartilha da nossa paixão por transformar vidas por meio da educação, venha fazer parte desse movimento com a gente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
