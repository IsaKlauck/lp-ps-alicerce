
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="testimonials">
      {/* Gradient background with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-alicerce-orange via-alicerce-orange/90 to-alicerce-purple"></div>
      
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="section-container relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
          Educação que Transforma Vidas
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="max-w-2xl text-white space-y-6">
            <p className="text-lg md:text-xl">
              No Alicerce, colocamos o estudante no centro do aprendizado. 
              Nossa missão é criar oportunidades reais para crianças, jovens e adultos 
              desenvolverem suas competências para construir um futuro melhor.
            </p>
            
            <p className="text-lg md:text-xl">
              Como Líder ou Guia, você será essencial para inspirar e engajar nossos estudantes, 
              usando metodologias ativas e promovendo um ambiente acolhedor, 
              colaborativo e empático.
            </p>
            
            <p className="text-lg md:text-xl">
              Sua jornada aqui será única e especial. Oferecemos formação contínua, 
              acompanhamento próximo e espaço para você crescer junto com 
              a nossa missão.
            </p>
            
            <p className="text-2xl font-bold italic mt-10">
              Alicerce Educação — Onde o futuro se constrói e sonhos ganham asas.
            </p>
          </div>
          
          <div className="hidden md:block">
            <img 
              src="/lovable-uploads/c752a26b-6f89-4931-8436-685252f4a718.png" 
              alt="Instrutor orientando estudantes em qualificação profissional" 
              className="rounded-lg shadow-2xl transform hover:scale-[1.01] transition-all border-4 border-white/20 w-full h-auto object-cover" 
            />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Conheça o Alicerce em Ação
          </h3>

          {/* Centralized video with full player visibility and better styling */}
          <div className="max-w-4xl mx-auto px-4">
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.01] border-4 border-white/20">
              <iframe 
                src="https://www.youtube.com/embed/alkBt-sSrc8?autoplay=0&controls=1" 
                title="Vídeo Institucional Alicerce" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
                allowFullScreen 
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-10 max-w-3xl mx-auto mt-20 text-center shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto(a) para fazer a diferença?
            </h3>
            <p className="text-white text-xl mb-6">
              A educação transforma vidas — e com você, esse impacto pode ir ainda mais longe.
            </p>
            <div className="flex justify-center">
              <Button 
                onClick={() => {
                  const element = document.getElementById('apply-form');
                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }
                }} 
                className="bg-white hover:bg-gray-100 text-alicerce-purple font-semibold text-lg px-8 py-4 transform hover:scale-105 transition-all shadow-lg"
              >
                QUERO COMEÇAR MINHA JORNADA
              </Button>
            </div>
            <div className="mt-8 text-center">
              <ArrowDown className="w-10 h-10 text-white mx-auto animate-bounce mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
