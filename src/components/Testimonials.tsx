
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Testimonials: React.FC = () => {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      id="testimonials"
    >
      {/* Gradient background with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-alicerce-orange via-alicerce-orange/90 to-alicerce-purple"></div>
      
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="section-container relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
          Venha transformar vidas com o Alicerce Educação!
        </h2>

        <div className="max-w-4xl mx-auto text-white space-y-6 mb-16">
          <p className="text-lg md:text-xl text-center mx-auto">
            No Alicerce, acreditamos no poder da educação que coloca o estudante no centro do aprendizado. 
            Nossa missão é criar oportunidades reais para que crianças, adolescentes e adultos 
            possam desenvolver suas competências e habilidades para o futuro.
          </p>
          
          <p className="text-lg md:text-xl text-center mx-auto">
            Seja como Líder ou Guia, você será peça-chave para inspirar e engajar nossos estudantes, 
            utilizando metodologias ativas e promovendo um ambiente acolhedor, 
            colaborativo e empático.
          </p>
          
          <p className="text-lg md:text-xl text-center mx-auto">
            Aqui, cada jornada é única – inclusive a sua. Oferecemos formação, 
            acompanhamento contínuo e espaço para que você cresça junto com 
            a nossa missão.
          </p>
          
          <p className="text-2xl font-bold italic text-center mt-10">
            Alicerce Educação – onde vidas se constroem e sonhos se realizam.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Conheça mais sobre o Alicerce
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

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-10 max-w-3xl mx-auto mt-20 text-right shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto(a) para transformar vidas com a gente?
            </h3>
            <p className="text-white text-xl mb-2">A educação transforma.</p>
            <p className="text-white text-lg mb-8">
              E com você, ela pode ir ainda mais longe. Vem mudar vidas com a gente!
            </p>
            <div className="flex justify-end">
              <Button 
                onClick={() => {
                  const element = document.getElementById('application-form');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white hover:bg-gray-100 text-alicerce-purple font-semibold text-lg px-8 py-4 transform hover:scale-105 transition-all shadow-lg"
              >
                QUERO ME INSCREVER AGORA
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
