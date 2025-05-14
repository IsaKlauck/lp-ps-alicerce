
import React from 'react';
import { BookOpen, GraduationCap, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';

const services = [{
  icon: Users,
  title: "Educação Infantil",
  subtitle: "Um lugar seguro para o desenvolvimento cognitivo",
  description: "Os primeiros anos de vida são fundamentais para o desenvolvimento integral das crianças. Por isso, nosso foco está no desenvolvimento sensorial e cognitivo, proporcionando atividades que despertam a curiosidade, a criatividade e a capacidade de explorar o mundo ao redor. Em formato presencial, com flexibilidade de 4, 6, 8 ou 12 horas por dia."
}, {
  icon: BookOpen,
  title: "Reforço Escolar",
  subtitle: "Um lugar seguro e um futuro para crianças e jovens",
  description: "Para as crianças e jovens que buscam um lugar seguro e um futuro promissor, o contraturno escolar do Alicerce Educação oferece atividades que vão além das aulas tradicionais. Proporcionamos um ambiente acolhedor que estimula o desenvolvimento integral de cada aluno, em formato presencial ou online e com a flexibilidade de 3x ou 5x na semana."
}, {
  icon: GraduationCap,
  title: "Qualifica",
  subtitle: "Recuperar o tempo perdido e abrir novos horizontes para o sucesso",
  description: "Para jovens e adultos que precisam recuperar o tempo perdido, nosso programa de qualificação profissional foca na recuperação da base educacional e no desenvolvimento de habilidades técnicas e socioemocionais para garantir o sucesso de cada aluno. Também em formato presencial ou online e com a flexibilidade de 3x ou 5x na semana."
}];

const TransformationalServices: React.FC = () => {
  return <section className="bg-white py-16 md:py-24 relative overflow-hidden" id="servicos">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-alicerce-lightBlue rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-alicerce-orange rounded-full translate-x-1/2 translate-y-1/2 opacity-10"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mx-auto bg-alicerce-orange/10 px-4 py-2 rounded-full mb-4">
            <span className="text-alicerce-orange font-medium">O que fazemos</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-center text-alicerce-blue mb-6">Nossas frentes de transformação</h2>
          
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            Como instrutor(a) Alicerce, você fará parte de um dos nossos programas educacionais 
            de alto impacto que mudam vidas por todo o Brasil.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => 
            <div key={service.title} className="relative">
              <Card className="border-0 bg-alicerce-orange text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-3xl mt-12">
                <CardHeader className="relative pt-16 pb-4 text-center">
                  {/* Icon circle positioned to overlap the card border */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-alicerce-blue rounded-full p-5 w-24 h-24 flex items-center justify-center shadow-lg">
                      <service.icon className="h-12 w-12 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center">{service.title}</h3>
                </CardHeader>
                <CardContent className="pb-8 px-6">
                  <h4 className="font-medium text-lg mb-4 text-center">{service.subtitle}</h4>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
        
        <div className="flex justify-center mt-16">
          <Button className="bg-alicerce-orange text-white hover:bg-orange-600 transition-transform hover:scale-105 shadow-lg px-8 py-6 text-lg" onClick={() => {
          const applicationForm = document.getElementById('apply-form');
          if (applicationForm) {
            applicationForm.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }}>
            QUERO FAZER PARTE DESSE TIME
          </Button>
        </div>
      </div>
    </section>;
};

export default TransformationalServices;
