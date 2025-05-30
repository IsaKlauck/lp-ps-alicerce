
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Márcia Romão da Silva",
    role: "Líder",
    content: "Ser líder pra mim é muito mais que dar ordens, é inspirar, orientar e guiar os estudantes na construção do seu aprendizado. Liderar é uma troca constante de saberes que transborda além do conhecimento cognitivo e ecoa em forma de amor.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    initials: "MS"
  },
  {
    id: 2,
    name: "Denys Pinheiro",
    role: "Guia",
    content: "Participei de um projeto inovador de Orientação Profissional em parceria do Alicerce Educação com a COBAP. Mergulhamos fundo em temas cruciais...O resultado? Profissionais ainda melhores, com feedbacks espetaculares sobre transição de carreira e crescimento exponencial em seus cargos. Como sempre digo: meu objetivo não é apenas desenvolver profissionais, mas sim impulsionar pessoas. E quando você se desenvolve como pessoa, esse crescimento reverbera e impacta todas as áreas da sua vida, dentro e fora do ambiente de trabalho! Foi muito especial para mim fazer parte disso tudo!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    initials: "DP"
  },
  {
    id: 3,
    name: "Débora Dias",
    role: "Líder",
    content: "Minha liderança no Alicerce foi marcada por uma frase de Freud: \"Como fica forte uma pessoa quando está segura de ser amada.\" Foi ali que compreendi: meu verdadeiro propósito sempre foi transformar vidas. E a ferramenta mais poderosa para isso é, e sempre será, a educação. No Alicerce, isso foi possível. Aqui, aprendi a liderar pelo amor e pelo exemplo. Entendi que educar vai muito além de ensinar conteúdos — é sobre enxergar o outro, acolher, inspirar e acreditar no potencial de cada criança. Cada desafio enfrentado, cada conquista compartilhada, reforçou em mim a certeza de que transformar realidades começa com gestos simples, mas potentes. No Alicerce, encontrei o espaço onde meu propósito ganhou forma, voz e nomes.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    initials: "DD"
  }
];

const TestimonialsCarousel: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-alicerce-gray" id="testimonials-carousel">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Depoimentos de Nossos Líderes e Guias
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça as experiências e reflexões de quem já faz parte da família Alicerce, 
            transformando vidas através da educação.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="flex items-center mb-6">
                        <Avatar className="h-16 w-16 mr-4 ring-4 ring-alicerce-orange/20">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-alicerce-orange text-white font-semibold text-lg">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold text-xl text-alicerce-blue mb-1">
                            {testimonial.name}
                          </h3>
                          <p className="text-alicerce-orange font-semibold text-sm uppercase tracking-wide">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex-1 relative">
                        <Quote className="absolute top-0 left-0 h-8 w-8 text-alicerce-orange/20 -mt-2 -ml-2" />
                        <blockquote className="text-gray-700 italic text-base leading-relaxed pl-6">
                          "{testimonial.content}"
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-alicerce-blue hover:bg-alicerce-purple text-white border-0" />
            <CarouselNext className="hidden md:flex -right-12 bg-alicerce-blue hover:bg-alicerce-purple text-white border-0" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <p className="text-alicerce-blue font-semibold text-lg">
            Faça parte dessa transformação. Sua jornada começa aqui.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
