
import React from 'react';
import { BookOpen, GraduationCap, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';

const services = [{
  icon: Users,
  title: "Educação Infantil",
  subtitle: "Primeiros Passos para o Futuro",
  description: "Como instrutor(a) da Educação Infantil, você trabalhará com o desenvolvimento sensorial e cognitivo em fases cruciais da infância. Criará atividades envolventes que despertam curiosidade, estimulam criatividade e desenvolvem habilidades fundamentais. Flexibilidade de 4, 6, 8 ou 12 horas diárias em formato presencial."
}, {
  icon: BookOpen,
  title: "Reforço Escolar",
  subtitle: "Base sólida para o futuro",
  description: "Como instrutor(a) do Reforço Escolar, você criará um ambiente acolhedor onde crianças e jovens superam dificuldades acadêmicas e descobrem seu potencial. Trabalhará com metodologias que vão além do ensino tradicional, em formato presencial ou online, com flexibilidade de 3 ou 5 dias por semana."
}, {
  icon: GraduationCap,
  title: "Qualificação Profissional",
  subtitle: "educacao de jovens e e adultos",
  description: "Como instrutor(a) do Qualifica, você ajudará jovens e adultos a recuperarem sua base educacional enquanto desenvolvem habilidades técnicas e socioemocionais essenciais para o mercado. Seu papel será transformar vidas através da educação profissionalizante, com opções de trabalho presencial ou online, 3 ou 5 dias por semana."
}];

const TransformationalServices: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden" id="servicos">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-alicerce-lightBlue rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-alicerce-orange rounded-full translate-x-1/2 translate-y-1/2 opacity-10"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mx-auto bg-alicerce-orange/10 px-4 py-2 rounded-full mb-4">
            <span className="text-alicerce-orange font-medium">O que fazemos</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-center text-alicerce-blue mb-6">Áreas de Impacto</h2>
          
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            Como educador(a) Alicerce, você fará parte de um dos nossos programas 
            educacionais de alto impacto, transformando vidas por todo o Brasil.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={service.title} className="relative">
              <Card className="border-0 bg-alicerce-orange text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-3xl mt-12 h-full">
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
          ))}
        </div>

        {/* Gallery section with mixed images */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-alicerce-blue mb-8">
            Nossos Programas em Ação
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group">
              <img 
                src="/lovable-uploads/0a6740fb-61b1-433a-800b-0c51038a9dcf.png" 
                alt="Educadora Alicerce com estudantes do reforço escolar" 
                className="rounded-lg shadow-lg w-full h-48 object-cover transform group-hover:scale-105 transition-all duration-300" 
              />
              <div className="absolute inset-0 bg-alicerce-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Reforço Escolar</span>
              </div>
            </div>
            <div className="relative group">
              <img 
                src="/lovable-uploads/8082169e-2cc7-4d16-89b0-3d390ffccf3b.png" 
                alt="Estudantes em aula de qualificação profissional" 
                className="rounded-lg shadow-lg w-full h-48 object-cover transform group-hover:scale-105 transition-all duration-300" 
              />
              <div className="absolute inset-0 bg-alicerce-orange/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Qualificação Profissional</span>
              </div>
            </div>
            <div className="relative group">
              <img 
                src="/lovable-uploads/9c0b2c3b-08aa-4d77-902b-d217f63f0089.png" 
                alt="Instrutor orientando estudantes" 
                className="rounded-lg shadow-lg w-full h-48 object-cover transform group-hover:scale-105 transition-all duration-300" 
              />
              <div className="absolute inset-0 bg-alicerce-purple/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Educação Transformadora</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <Button 
            className="bg-alicerce-blue text-white hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg px-8 py-6 text-lg" 
            onClick={() => {
              const applicationForm = document.getElementById('apply-form');
              if (applicationForm) {
                applicationForm.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }}
          >
            QUERO COMEÇAR MINHA JORNADA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransformationalServices;
