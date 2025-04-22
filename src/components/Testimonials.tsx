
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Professora de Matemática",
      quote: "O Alicerce me deu propósito e me fez redescobrir o amor pela educação.",
      image: "/lovable-uploads/cf571c92-f4b8-49b1-9bd1-809e0ad8bc64.png"
    },
    {
      name: "Pedro Santos",
      role: "Coordenador Pedagógico",
      quote: "Aqui encontrei um ambiente que realmente valoriza a educação transformadora.",
      image: "/lovable-uploads/cf571c92-f4b8-49b1-9bd1-809e0ad8bc64.png"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-alicerce-blue/5 to-alicerce-blue/10" id="testimonials">
      <div className="section-container">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="text-alicerce-orange h-6 w-6" />
          <h2 className="section-title text-center mb-0">Depoimentos</h2>
          <Sparkles className="text-alicerce-orange h-6 w-6" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group perspective hover:cursor-pointer">
              <div className="relative transform-style-3d transition-transform duration-700 group-hover:rotate-y-180 h-full">
                {/* Front of card */}
                <div className="absolute w-full h-full backface-hidden">
                  <Card className="bg-gradient-to-br from-alicerce-blue to-alicerce-blue/90 h-full">
                    <CardContent className="p-6 text-white">
                      <div className="flex items-center space-x-4">
                        <img
                          src={testimonial.image}
                          alt=""
                          className="w-16 h-16 rounded-full object-cover ring-2 ring-white/20"
                        />
                        <div>
                          <h3 className="font-bold text-lg">{testimonial.name}</h3>
                          <p className="text-white/80">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Back of card */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                  <Card className="bg-white h-full">
                    <CardContent className="p-6 flex items-center justify-center h-full">
                      <blockquote className="text-lg italic text-gray-700 text-center">
                        "{testimonial.quote}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
