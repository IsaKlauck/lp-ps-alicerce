
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import CTAButton from './CTAButton';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Educadora Infantil",
      image: "/lovable-uploads/85b8fe00-a4f4-418c-bbd3-c7b0167b8ac0.png",
      quote: "Trabalhar no Alicerce transformou minha visão sobre educação. Aqui eu não apenas ensino, mas aprendo constantemente com meus alunos e colegas. É mais que um trabalho, é uma missão.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Instrutor de Reforço Escolar",
      image: "/lovable-uploads/4b1c0f60-9ecd-41ad-80e1-c52b7f831ab7.png",
      quote: "A metodologia do Alicerce me permitiu desenvolver abordagens inovadoras que realmente funcionam. Ver o progresso dos meus alunos é a maior recompensa que posso ter.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Instrutora de Qualificação Profissional",
      image: "/lovable-uploads/71b5f496-1978-4f63-8a9b-9d123760bd21.png",
      quote: "No Qualifica, tenho a oportunidade de preparar jovens e adultos para o mercado de trabalho. É emocionante ver como a educação pode mudar trajetórias de vida completamente.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-alicerce-lightBlue/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-alicerce-teal/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mx-auto bg-alicerce-teal/10 px-4 py-2 rounded-full mb-4">
            <span className="text-alicerce-teal font-medium">Quem já faz parte</span>
          </div>
          
          <h2 className="section-title text-center">Histórias de Sucesso</h2>
          
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            Conheça educadores que já fazem parte da família Alicerce e descobriram 
            o que é trabalhar com propósito e impacto real.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white rounded-3xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-alicerce-blue">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-alicerce-orange/20" />
                  <p className="text-gray-700 italic pl-6">{testimonial.quote}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <CTAButton text="SEJA VOCÊ O PRÓXIMO SUCESSO" />
      </div>
    </section>
  );
};

export default Testimonials;
