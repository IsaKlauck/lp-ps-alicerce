
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Laura Silva",
    role: "Aluna Alicerce",
    quote:
      "Aqui tem um aprendizado diferente do que na escola. Se você perguntar, eles não vão te oprimir. Aqui eles explicam para você quantas vezes você precisar para aprender. Eu gosto muito desse jeito.",
    image: "/lovable-uploads/752f9bd2-08a8-4807-bf02-7722b618feb2.png",
  },
  {
    name: "Carlos Santos",
    role: "Aluno Alicerce",
    quote:
      'Um curso voltado para pessoas negras, onde eu olhava para todos alunos da sala e via gente negra, eu olhei para os professores e via professoras negras me ensinando... Foi uma emoção, foi um sentimento de "eu posso também estar ali", que eu nunca tinha sentido antes.',
    image: "/lovable-uploads/752f9bd2-08a8-4807-bf02-7722b618feb2.png",
  },
  {
    name: "André Oliveira",
    role: "Aluno Alicerce",
    quote:
      "Tive que interromper meus estudos no sétimo ano, e depois disso, só trabalhei e cuidei da minha família. Gosto muito de aprender e evoluir, porque nós somos o espelho da nossa família. Meu maior sonho é conquistar uma posição aqui na firma, poder subir de cargo e alcançar essa conquista.",
    image: "/lovable-uploads/752f9bd2-08a8-4807-bf02-7722b618feb2.png",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      className="py-16"
      style={{
        background:
          "linear-gradient(90deg, #EE7203 0%, #3F1F71 100%)",
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

        <p className="text-center text-lg text-white max-w-3xl mx-auto mt-12">
          Junte-se a milhares de alunos que já transformaram suas vidas através da educação Alicerce
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
