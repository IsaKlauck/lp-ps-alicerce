import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Ana Paula Santos",
    role: "Líder Pedagógica Alicerce",
    quote: "Fazer parte do Alicerce é participar ativamente de uma transformação social através da educação. Aqui, cada dia é uma oportunidade de impactar positivamente a vida dos nossos alunos e contribuir para um futuro mais igualitário.",
    image: "/lovable-uploads/752f9bd2-08a8-4807-bf02-7722b618feb2.png",
  },
  {
    name: "Ricardo Oliveira",
    role: "Guia Alicerce Sênior",
    quote: "O que mais me encanta no Alicerce é ver como nossa metodologia e dedicação fazem diferença real na vida dos alunos. É gratificante fazer parte de um time que realmente se importa com a qualidade da educação.",
    image: "/lovable-uploads/752f9bd2-08a8-4807-bf02-7722b618feb2.png",
  },
  {
    name: "Mariana Silva",
    role: "Líder de Desenvolvimento",
    quote: "No Alicerce, não apenas ensinamos, mas crescemos junto com nossos alunos. É incrível fazer parte de uma equipe que está constantemente inovando e buscando as melhores formas de ensinar.",
    image: "/lovable-uploads/752f9bd2-08a8-4807-bf02-7722b618feb2.png",
  },
];

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
          Histórias que Inspiram
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border bg-white/70 shadow-md flex flex-col justify-between min-h-[260px] transition-all duration-200 hover:shadow-lg"
            >
              <CardContent className="p-6 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-alicerce-orange"
                  />
                  <div>
                    <div className="font-bold text-alicerce-purple text-base">{testimonial.name}</div>
                    <div className="text-sm text-alicerce-orange font-medium">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex-1 flex items-center mt-2">
                  <Quote className="text-alicerce-purple/60 w-5 h-5 mr-2 shrink-0" />
                  <blockquote className="text-gray-800 text-base italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Conheça mais sobre o Alicerce
          </h3>
          <p className="text-white text-lg mb-8">
            Assista ao nosso vídeo e descubra como estamos transformando a educação em todo o Brasil.
          </p>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/alkBt-sSrc8"
                title="Vídeo Institucional Alicerce"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-6">
            Depoimentos de Instrutores
          </h3>
          <p className="text-white text-lg mb-8">
            Veja quem já viveu essa transformação com a gente!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {[1, 2, 3].map((num) => (
              <Button 
                key={num}
                variant="outline" 
                className="bg-white hover:bg-gray-100 text-alicerce-purple"
                onClick={() => window.open('#', '_blank')}
              >
                🎥 Depoimento {num}
              </Button>
            ))}
          </div>

          <div className="bg-white/10 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto(a) para transformar vidas com a gente?
            </h3>
            <p className="text-white text-xl mb-2">A educação transforma.</p>
            <p className="text-white text-lg mb-8">
              E com você, ela pode ir ainda mais longe. Vem mudar vidas com a gente!
            </p>
            <Button 
              onClick={() => window.open('https://mqmowuha.forms.app/formulario-de-inscricao-processo-seletivo', '_blank')}
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
