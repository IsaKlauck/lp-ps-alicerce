
import React from 'react';
import { BookOpen, GraduationCap, Users } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: BookOpen,
    title: "Reforço Escolar",
    description: "Metodologia exclusiva que potencializa o aprendizado em Matemática e Português para alunos do 3º ao 9º ano. Transformamos dificuldades em potencialidades."
  },
  {
    icon: GraduationCap,
    title: "Qualifica",
    description: "Preparamos jovens e adultos para o mercado de trabalho e para os vestibulares com um curso completo de Português e Matemática que vai além do ensino tradicional."
  },
  {
    icon: Users,
    title: "Projetos Sociais",
    description: "Democratizamos o acesso à educação de qualidade através de parcerias com ONGs, fundações e empresas comprometidas com a transformação social."
  }
];

const TransformationalServices: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24" id="servicos">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-alicerce-blue mb-6">
          Nossos Serviços Transformacionais
        </h2>
        
        <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
          Como instrutor(a) Alicerce, você fará parte de um dos nossos programas educacionais 
          de alto impacto que mudam vidas por todo o Brasil.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="bg-alicerce-lightBlue p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
            >
              <service.icon className="h-16 w-16 text-alicerce-blue mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-alicerce-blue mb-4 text-center">{service.title}</h3>
              <p className="text-gray-700 text-left flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button 
            className="bg-alicerce-orange text-white hover:bg-orange-600 transition-transform hover:scale-105 mx-auto"
            onClick={() => {
              const applicationForm = document.getElementById('apply-form');
              if (applicationForm) {
                applicationForm.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            QUERO FAZER PARTE DESSE TIME
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransformationalServices;
