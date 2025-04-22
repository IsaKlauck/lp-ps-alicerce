
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Professora de Matemática",
      quote: "O Alicerce me deu propósito e me fez redescobrir o amor pela educação.",
      image: "/lovable-uploads/fdb297f4-a039-4905-ba5b-8fcef06190b7.png"
    },
    {
      name: "Pedro Santos",
      role: "Coordenador Pedagógico",
      quote: "Aqui encontrei um ambiente que realmente valoriza a educação transformadora.",
      image: "/lovable-uploads/fdb297f4-a039-4905-ba5b-8fcef06190b7.png"
    }
  ];

  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="section-container">
        <h2 className="section-title text-center">Depoimentos</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group perspective">
              <div className="relative transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-lg text-alicerce-blue">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <blockquote className="mt-4 text-lg italic text-gray-700">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
