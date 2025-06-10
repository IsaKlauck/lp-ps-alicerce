
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
import { Quote, Heart } from "lucide-react";

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
    name: "Gabrielle D.",
    role: "Líder",
    content: "Meu maior 'case de sucesso' é ouvir dos alunos que me têm como uma referência de educadora amiga e acolhedora. É um orgulho que levo comigo.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    initials: "GD"
  },
  {
    id: 2,
    name: "Nathalya Q.",
    role: "Guia",
    content: "Ser guia é trabalhar com propósito e impacto. É fazer parte do desenvolvimento de alguém que pode mudar outras vidas. No Alicerce, tudo é pensado para que os alunos evoluam, acreditem em si e construam seu projeto de vida. Apesar dos desafios, vale muito a pena.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    initials: "NQ"
  },
  {
    id: 3,
    name: "Seliane C.",
    role: "Líder",
    content: "Para mim, ser líder é inspirar, acolher e caminhar junto. Acompanhar o desenvolvimento de cada criança me emociona e me ensina. É uma experiência onde estou presente, acredito no potencial de cada um e aprendo a ser uma pessoa melhor com eles.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    initials: "SC"
  },
  {
    id: 4,
    name: "Denys P.",
    role: "Guia",
    content: "Meu objetivo não é apenas desenvolver profissionais, mas sim impulsionar pessoas. Quando você se desenvolve como pessoa, esse crescimento impacta todas as áreas da sua vida.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    initials: "DP"
  },
  {
    id: 5,
    name: "Laura C.",
    role: "Líder",
    content: "Ser líder é poder observar o avanço de cada um com o brilho no olhar e o fogo dos sonhos acesos. É acreditar que a educação transforma vidas.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    initials: "LC"
  },
  {
    id: 6,
    name: "Ivan L.",
    role: "Líder",
    content: "Não me vejo em outro lugar. Amo tanto receber o amor de cada criança que já estou chegando na minha segunda caixa de cartinhas que guardo deles.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    initials: "IL"
  },
  {
    id: 7,
    name: "Márcia R.",
    role: "Líder",
    content: "Liderar é uma troca constante de saberes que transborda além do conhecimento e ecoa em forma de amor.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    initials: "MR"
  },
  {
    id: 8,
    name: "Débora D.",
    role: "Líder",
    content: "No Alicerce, aprendi a liderar pelo amor e encontrei o espaço onde meu propósito de transformar vidas ganhou forma, voz e nomes. Aprendi que educar vai muito além de ensinar: é acolher, inspirar e acreditar no potencial de cada criança.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    initials: "DD"
  }
];

const TestimonialsCarousel: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-alicerce-gray via-white to-alicerce-lightBlue relative overflow-hidden" id="testimonials-carousel">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-alicerce-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-alicerce-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-alicerce-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-alicerce-orange mr-3" />
            <h2 className="section-title mb-0">
              Vozes que Inspiram
            </h2>
            <Heart className="w-8 h-8 text-alicerce-orange ml-3" />
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Conheça as experiências transformadoras de nossos Líderes e Guias, 
            que todos os dias constroem uma educação baseada no amor, acolhimento e propósito.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-3 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:bg-white group overflow-hidden">
                    <CardContent className="p-8 h-full flex flex-col relative">
                      {/* Gradiente sutil no fundo do card */}
                      <div className="absolute inset-0 bg-gradient-to-br from-alicerce-orange/5 via-transparent to-alicerce-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Header com avatar e informações */}
                      <div className="flex items-center mb-8 relative z-10">
                        <div className="relative">
                          <Avatar className="h-20 w-20 mr-4 ring-4 ring-alicerce-orange/30 group-hover:ring-alicerce-orange/50 transition-all duration-300">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback className="bg-gradient-to-br from-alicerce-orange to-alicerce-purple text-white font-bold text-lg">
                              {testimonial.initials}
                            </AvatarFallback>
                          </Avatar>
                          {/* Badge do role */}
                          <div className="absolute -bottom-2 -right-2 bg-alicerce-blue text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
                            {testimonial.role}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-alicerce-blue mb-2 group-hover:text-alicerce-purple transition-colors duration-300">
                            {testimonial.name}
                          </h3>
                          <p className="text-alicerce-orange font-semibold text-sm uppercase tracking-wider">
                            {testimonial.role} Alicerce
                          </p>
                        </div>
                      </div>
                      
                      {/* Depoimento */}
                      <div className="flex-1 relative z-10">
                        <Quote className="absolute -top-4 -left-2 h-10 w-10 text-alicerce-orange/30 group-hover:text-alicerce-orange/50 transition-colors duration-300" />
                        <blockquote className="text-gray-700 text-base leading-relaxed pl-8 font-medium group-hover:text-gray-800 transition-colors duration-300">
                          "{testimonial.content}"
                        </blockquote>
                      </div>

                      {/* Decoração inferior */}
                      <div className="mt-6 pt-4 border-t border-alicerce-orange/20 relative z-10">
                        <div className="flex items-center justify-center">
                          <div className="w-12 h-1 bg-gradient-to-r from-alicerce-orange to-alicerce-purple rounded-full"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-16 bg-white hover:bg-alicerce-blue text-alicerce-blue hover:text-white border-2 border-alicerce-blue shadow-lg w-12 h-12" />
            <CarouselNext className="hidden md:flex -right-16 bg-white hover:bg-alicerce-blue text-alicerce-blue hover:text-white border-2 border-alicerce-blue shadow-lg w-12 h-12" />
          </Carousel>
        </div>

        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-alicerce-orange to-alicerce-purple p-8 rounded-2xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Seja Parte Dessa Transformação
            </h3>
            <p className="text-lg opacity-90">
              Cada história aqui é um convite para você escrever a sua própria jornada de impacto na educação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
