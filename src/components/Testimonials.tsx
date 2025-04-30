
import React from "react";
import { Button } from "@/components/ui/button";

const Testimonials: React.FC = () => {
  return (
    <section
      className="py-16"
      style={{
        background: "linear-gradient(90deg, #EE7203 0%, #3F1F71 100%)",
      }}
      id="testimonials"
    >
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          Venha transformar vidas com o Alicerce Educação!
        </h2>

        <div className="max-w-4xl mx-auto text-white space-y-6 mb-16">
          <p className="text-lg">
            No Alicerce, acreditamos no poder da educação que coloca o estudante no centro do aprendizado. Nossa missão é criar oportunidades reais para que crianças, adolescentes e adultos possam desenvolver suas competências e habilidades para o futuro. Fazemos isso com uma metodologia inovadora, que vai além do conteúdo tradicional, valorizando o sonho, o protagonismo e o projeto de vida de cada um.
          </p>
          
          <p className="text-lg">
            Seja como Líder ou Guia, você será peça-chave para inspirar e engajar nossos estudantes, utilizando metodologias ativas e promovendo um ambiente acolhedor, colaborativo e empático. No dia a dia, você vai facilitar vivências significativas, estimular o desenvolvimento socioemocional e construir vínculos verdadeiros.
          </p>
          
          <p className="text-lg">
            Aqui, cada jornada é única – inclusive a sua. Oferecemos formação, acompanhamento contínuo e espaço para que você cresça junto com a nossa missão. Venha fazer parte de uma equipe apaixonada por inovação social e comprometida com um Brasil mais justo!
          </p>
          
          <p className="text-xl font-bold italic text-center mt-8">
            Alicerce Educação – onde vidas se constroem e sonhos se realizam.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Conheça mais sobre o Alicerce
          </h3>

          {/* Centralized video with full player visibility */}
          <div className="max-w-4xl mx-auto px-4">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/alkBt-sSrc8?autoplay=0&controls=1"
                title="Vídeo Institucional Alicerce"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-8 max-w-3xl mx-auto mt-20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto(a) para transformar vidas com a gente?
            </h3>
            <p className="text-white text-xl mb-2">A educação transforma.</p>
            <p className="text-white text-lg mb-8">
              E com você, ela pode ir ainda mais longe. Vem mudar vidas com a gente!
            </p>
            <Button 
              onClick={() => {
                const element = document.getElementById('application-form');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white hover:bg-gray-100 text-alicerce-purple font-semibold text-lg px-8 py-4"
            >
              QUERO ME INSCREVER AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
