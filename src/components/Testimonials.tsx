
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const testimonials = [
  {
    name: "Josiele",
    location: "MG",
    quote: "Ser Líder para mim é poder ajudar no processo de ensino e aprendizagem de cada criança e adolescente que são a nós confiados!",
    image: "https://conteudo.alicerceedu.com.br/hubfs/o-alicerce/IMG_9072%20-%20Josiele%20Regina%20(1).jpg",
  },
  {
    name: "Gabriela",
    location: "BA",
    quote: "Ser uma líder Alicerce é ter uma viagem de autoconhecimento todos os dias, onde descobri meu papel transformando a vida de jovens e crianças e tornando os sonhos delas, a cada dia que passa, mais próximo da realidade.",
    image: "https://conteudo.alicerceedu.com.br/hubfs/o-alicerce/576A4730%20-%20Gabi%20de%20Jesus.jpg",
  },
  {
    name: "Raphael",
    location: "RJ",
    quote: "Ser líder Alicerce é acordar todos os dias sabendo que meu trabalho é contribuir para transformação de vidas.",
    image: "https://conteudo.alicerceedu.com.br/hubfs/o-alicerce/IMG_7441%20-%20Raphael%20Antunes.JPG",
  },
  {
    name: "Ana Paula",
    location: "SP",
    quote: "Fazer parte do Alicerce é participar ativamente de uma transformação social através da educação. Aqui, cada dia é uma oportunidade de impactar positivamente a vida dos nossos alunos.",
    image: "https://conteudo.alicerceedu.com.br/hubfs/o-alicerce/IMG_6669%20-%20Ana%20Paula%20Rocha.JPG",
  },
  {
    name: "Ricardo",
    location: "RJ",
    quote: "O que mais me encanta no Alicerce é ver como nossa metodologia e dedicação fazem diferença real na vida dos alunos. É gratificante fazer parte de um time que realmente se importa.",
    image: "https://conteudo.alicerceedu.com.br/hubfs/o-alicerce/IMG_6650-1%20-%20Ricardo%20Carneiro.JPG",
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

          <div className="flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="bg-white hover:bg-gray-100 text-alicerce-purple font-semibold flex items-center gap-2 px-6 py-8 text-lg"
                >
                  <Video className="w-6 h-6" />
                  Assistir ao Vídeo Institucional
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl w-[90vw] p-0 border-none bg-transparent">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/alkBt-sSrc8?autoplay=1"
                    title="Vídeo Institucional Alicerce"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    className="w-full h-full rounded-lg shadow-xl"
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
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
