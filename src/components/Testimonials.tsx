

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
          
          <div className="hidden md:block space-y-6">
            <div className="relative">
              <img 
                src="/lovable-uploads/122d99a8-00df-48c8-ab2b-bb85c4778d08.png" 
                alt="Educadora Alicerce com estudantes" 
                className="rounded-lg shadow-2xl transform hover:scale-[1.02] transition-all duration-500 border-4 border-white/20 w-full h-auto object-cover" 
              />
            </div>
            <div className="relative ml-8 -mt-4">
              <img 
                src="/lovable-uploads/a3930f98-d452-4efd-a0c5-e146cd0bca58.png" 
                alt="Equipe Alicerce em atividade de formação" 
                className="rounded-lg shadow-xl transform hover:scale-[1.03] transition-all duration-700 border-3 border-white/15 w-5/6 h-auto object-cover rotate-2 hover:rotate-0" 
              />
            </div>
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
                src="https://www.youtube.com/embed/LH8EJ1k7fTc?autoplay=0&controls=1" 
                title="Missão Alicerce" 
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

