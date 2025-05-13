import React from 'react';
import { BookOpen, GraduationCap, Users } from 'lucide-react';
import { Button } from './ui/button';
const services = [{
  icon: BookOpen,
  title: "Reforço Escolar",
  description: "Metodologia exclusiva que potencializa o aprendizado em Matemática e Português para alunos do 3º ao 9º ano. Transformamos dificuldades em potencialidades."
}, {
  icon: GraduationCap,
  title: "Qualifica",
  description: "Preparamos jovens e adultos para o mercado de trabalho e para os vestibulares com um curso completo de Português e Matemática que vai além do ensino tradicional."
}, {
  icon: Users,
  title: "Projetos Sociais",
  description: "Democratizamos o acesso à educação de qualidade através de parcerias com ONGs, fundações e empresas comprometidas com a transformação social."
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
          {services.map((service, index) => <div key={service.title} className="bg-alicerce-lightBlue p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full border border-white">
              <div className={`rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto 
                ${index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-orange-100' : 'bg-purple-100'}`}>
                <service.icon className={`h-9 w-9 ${index === 0 ? 'text-blue-600' : index === 1 ? 'text-orange-600' : 'text-purple-600'}`} />
              </div>
              <h3 className="text-2xl font-bold text-alicerce-blue mb-4 text-center">{service.title}</h3>
              <p className="text-gray-700 text-left flex-grow">{service.description}</p>
            </div>)}
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