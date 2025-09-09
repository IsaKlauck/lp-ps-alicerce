import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
const HeroSection: React.FC = () => {
  const scrollToApplicationForm = () => {
    const applicationForm = document.getElementById('apply-form');
    if (applicationForm) {
      applicationForm.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="bg-gradient-to-br from-alicerce-orange to-alicerce-purple text-white py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden min-h-screen flex items-center">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="section-container relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center md:text-left space-y-6 sm:space-y-8 px-4 sm:px-0">
            <div className="inline-block bg-alicerce-purple/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-2 sm:mb-4">
              <span className="text-white font-medium text-sm sm:text-base">Processo Seletivo Contínuo</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforme Vidas pela Educação
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl opacity-90 leading-relaxed">
              No Alicerce, você faz parte de algo maior. Junte-se a educadores 
              apaixonados construindo um Brasil mais justo através do poder 
              transformador do conhecimento.
            </p>
            
            <div className="flex justify-center md:justify-start pt-4 sm:pt-6">
              <Button 
                className="bg-white text-alicerce-orange hover:bg-gray-100 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-md transition-all transform hover:scale-105 hover:shadow-xl shadow-lg w-full sm:w-auto max-w-xs sm:max-w-none" 
                onClick={scrollToApplicationForm}
              >
                <span className="block sm:hidden">COMEÇAR JORNADA</span>
                <span className="hidden sm:block">QUERO COMEÇAR MINHA JORNADA</span>
              </Button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="/lovable-uploads/0a6740fb-61b1-433a-800b-0c51038a9dcf.png" alt="Educadora Alicerce com estudantes" className="rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 h-48 w-full object-cover" />
                <img src="/lovable-uploads/60f7d322-8ea9-4808-835e-4b919830b7a0.png" alt="Educador Alicerce com alunas" className="rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 h-64 w-full object-cover" />
              </div>
              <div className="mt-8 space-y-4">
                <img src="/lovable-uploads/2961ccd4-9643-4c05-ae2b-69a7509ffb9f.png" alt="Educadora Alicerce orientando estudantes" className="rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 h-64 w-full object-cover" />
                <img src="/lovable-uploads/122d99a8-00df-48c8-ab2b-bb85c4778d08.png" alt="Educadora Alicerce com estudantes sorridentes" className="rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 h-48 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg mt-14 mx-auto max-w-4xl shadow-lg border border-white/20">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="bg-white/20 p-3 rounded-full shrink-0 shadow-inner">
              <Globe className="text-white h-8 w-8" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Oportunidades em Todo o Brasil</h3>
              <div className="space-y-4 opacity-90">
                <p>
                  Nosso processo seletivo está sempre aberto, porque acreditamos que grandes 
                  talentos merecem grandes oportunidades, o ano inteiro.
                </p>
                <p>
                  Com polos em diversas regiões do país, mesmo sem vagas imediatas na sua localidade, 
                  seu perfil pode fazer parte do nosso banco de talentos para futuras oportunidades.
                </p>
                <p>
                  Se você acredita na educação como caminho para transformar realidades,
                  venha ser parte desse movimento com a gente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;