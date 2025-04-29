
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Josiele",
    location: "MG",
    quote: "Ser Líder para mim é poder ajudar no processo de ensino e aprendizagem de cada criança e adolescente que são a nós confiados!",
    image: "/lovable-uploads/beacddef-a10a-4102-ada9-dbd4c42c02e8.png",
  },
  {
    name: "Gabriela",
    location: "BA",
    quote: "Ser uma líder Alicerce é ter uma viagem de autoconhecimento todos os dias, onde descobri meu papel transformando a vida de jovens e crianças e tornando os sonhos delas, a cada dia que passa, mais próximo da realidade.",
    image: "/lovable-uploads/beacddef-a10a-4102-ada9-dbd4c42c02e8.png",
  },
  {
    name: "Raphael",
    location: "RJ",
    quote: "Ser líder Alicerce é acordar todos os dias sabendo que meu trabalho é contribuir para transformação de vidas.",
    image: "/lovable-uploads/beacddef-a10a-4102-ada9-dbd4c42c02e8.png",
  },
  {
    name: "Ana Paula",
    location: "SP",
    quote: "Fazer parte do Alicerce é participar ativamente de uma transformação social através da educação. Aqui, cada dia é uma oportunidade de impactar positivamente a vida dos nossos alunos.",
    image: "/lovable-uploads/beacddef-a10a-4102-ada9-dbd4c42c02e8.png",
  },
  {
    name: "Ricardo",
    location: "RJ",
    quote: "O que mais me encanta no Alicerce é ver como nossa metodologia e dedicação fazem diferença real na vida dos alunos. É gratificante fazer parte de um time que realmente se importa.",
    image: "/lovable-uploads/beacddef-a10a-4102-ada9-dbd4c42c02e8.png",
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

        <div className="max-w-6xl mx-auto">
          <Carousel 
            opts={{ loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="bg-alicerce-purple rounded-lg p-6 h-full flex flex-col">
                      <div className="flex items-center justify-center mb-6">
                        <div className="relative">
                          <div className="w-32 h-32 rounded-full bg-alicerce-orange overflow-hidden">
                            <Avatar className="w-full h-full">
                              <AvatarImage 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                className="object-cover"
                              />
                              <AvatarFallback className="text-2xl">
                                {testimonial.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                        </div>
                      </div>
                      
                      <blockquote className="text-white text-center text-lg italic mb-4 flex-grow">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="text-right text-white mt-2">
                        <p className="font-bold text-xl">{testimonial.name} - {testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white text-alicerce-purple border-none hover:bg-gray-100 hover:text-alicerce-purple" />
            <CarouselNext className="bg-white text-alicerce-purple border-none hover:bg-gray-100 hover:text-alicerce-purple" />
          </Carousel>
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
