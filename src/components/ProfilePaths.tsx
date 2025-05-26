
import React from 'react';
import { GraduationCap, Users, BookOpen, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import CTAButton from './CTAButton';

const ProfilePaths: React.FC = () => {
  const profiles = [
    {
      icon: GraduationCap,
      title: "Recém-Formado",
      description: "Você acabou de se formar e quer começar sua carreira com propósito? No Alicerce, oferecemos mentoria e formação para que você se torne um educador de excelência desde o início.",
      requirements: ["Graduação concluída", "Paixão pela educação", "Vontade de aprender"]
    },
    {
      icon: Users,
      title: "Educador Experiente",
      description: "Você já tem experiência em sala de aula e busca um ambiente que valorize seu conhecimento? Aqui você encontrará novos desafios e metodologias inovadoras para potencializar seu impacto.",
      requirements: ["Experiência em educação", "Busca por inovação", "Liderança natural"]
    },
    {
      icon: BookOpen,
      title: "Profissional em Transição",
      description: "Você vem de outra área mas sempre sonhou em educar? Nosso programa de formação te preparará para essa nova jornada, aproveitando suas habilidades anteriores.",
      requirements: ["Graduação em qualquer área", "Desejo de mudança", "Experiência profissional"]
    },
    {
      icon: Lightbulb,
      title: "Especialista Técnico",
      description: "Você tem expertise técnica e quer compartilhar conhecimento? Na qualificação profissional, você formará jovens e adultos em áreas específicas do mercado de trabalho.",
      requirements: ["Expertise técnica", "Experiência de mercado", "Capacidade de ensinar"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden" id="perfis">
      {/* Background design elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-alicerce-orange/10 rounded-full -translate-x-1/2"></div>
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-alicerce-blue/10 rounded-full translate-x-1/2"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mx-auto bg-alicerce-orange/10 px-4 py-2 rounded-full mb-4">
            <span className="text-alicerce-orange font-medium">Encontre seu lugar</span>
          </div>
          
          <h2 className="section-title text-center">Caminhos para Diferentes Perfis</h2>
          
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            Independente do seu background, há uma oportunidade esperando por você no Alicerce. 
            Descubra qual caminho combina mais com seu perfil e experiência.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {profiles.map((profile, index) => (
            <Card key={profile.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white rounded-3xl h-full">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-gradient-to-br from-alicerce-orange to-alicerce-purple rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                  <profile.icon className="h-8 w-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-alicerce-blue">{profile.title}</h3>
              </CardHeader>
              <CardContent className="px-6 pb-8 flex-1 flex flex-col">
                <p className="text-gray-600 mb-6 flex-1">{profile.description}</p>
                
                <div>
                  <h4 className="font-semibold text-alicerce-blue mb-3">Você se identifica se tem:</h4>
                  <ul className="space-y-2">
                    {profile.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-alicerce-orange rounded-full mr-3 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <CTAButton text="ENCONTRE SUA OPORTUNIDADE" />
      </div>
    </section>
  );
};

export default ProfilePaths;
