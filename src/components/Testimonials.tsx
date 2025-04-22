
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Laura",
      role: "Aluna Alicerce",
      quote: "Aqui tem um aprendizado diferente do que na escola. Se você perguntar, eles não vão te oprimir. Aqui eles explicam para você quantas vezes você precisar para aprender. Eu gosto muito desse jeito.",
      image: "/lovable-uploads/752f9bd2-08a8-4807-bf02-7722b618feb2.png"
    },
    {
      name: "Carlos",
      role: "Aluno Alicerce",
      quote: "Um curso voltado para pessoas negras, onde eu olhava para todos alunos da sala e via gente negra, eu olhei para os professores e via professoras negras me ensinando... Foi uma emoção, foi um sentimento de "eu posso também estar ali", que eu nunca tinha sentido antes.",
      image: "/lovable-uploads/752f9bd2-08a8-4807-bf02-7722b618feb2.png"
    },
    {
      name: "André",
      role: "Aluno Alicerce",
      quote: "Tive que interromper meus estudos no sétimo ano, e depois disso, só trabalhei e cuidei da minha família. Gosto muito de aprender e evoluir, porque nós somos o espelho da nossa família. Meu maior sonho é conquistar uma posição aqui na firma, poder subir de cargo e alcançar essa conquista.",
      image: "/lovable-uploads/752f9bd2-08a8-4807-bf02-7722b618feb2.png"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-alicerce-purple/5 to-alicerce-blue/10" id="testimonials">
      <div className="section-container">
        <div className="flex items-center justify-center gap-2 mb-12">
          <Quote className="text-alicerce-orange h-8 w-8" />
          <h2 className="section-title text-center mb-0">Histórias que Inspiram</h2>
          <Quote className="text-alicerce-orange h-8 w-8" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group perspective">
              <div className="relative transform-style-3d transition-transform duration-700 group-hover:rotate-y-180 h-full">
                {/* Front of card */}
                <div className="absolute w-full h-full backface-hidden">
                  <Card className="bg-gradient-to-br from-alicerce-purple to-alicerce-blue h-full">
                    <CardContent className="p-8 text-white h-full flex flex-col justify-between">
                      <Quote className="h-12 w-12 mb-4 text-alicerce-orange opacity-80" />
                      <div>
                        <h3 className="font-bold text-xl text-alicerce-orange">{testimonial.name}</h3>
                        <p className="text-white/90">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Back of card */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                  <Card className="bg-white h-full">
                    <CardContent className="p-8 flex items-center justify-center h-full">
                      <blockquote className="text-lg text-gray-700">
                        "{testimonial.quote}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mt-12">
          Junte-se a milhares de alunos que já transformaram suas vidas através da educação Alicerce
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
