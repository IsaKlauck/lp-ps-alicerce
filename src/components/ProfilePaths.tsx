
import React from 'react';
import { BookOpen, Users, ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProfilePaths: React.FC = () => {
  const scrollToApplicationForm = () => {
    const applicationForm = document.getElementById('apply-form');
    if (applicationForm) {
      applicationForm.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section className="bg-alicerce-gray py-16 md:py-24 relative" id="perfis">
      {/* Background design elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mx-auto bg-alicerce-purple/10 px-4 py-2 rounded-full mb-4">
            <span className="text-alicerce-purple font-medium">Suas oportunidades</span>
          </div>
          
          <h2 className="section-title text-center mb-6">Duas Jornadas, Um Mesmo Propósito</h2>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
            No Alicerce, você pode trilhar seu caminho como Líder ou Guia, 
            de acordo com seu perfil e momento na carreira.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Líder Alicerce */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover transform transition-all hover:-translate-y-2 border border-alicerce-lightBlue h-full">
            <div className="bg-gradient-to-r from-alicerce-orange to-alicerce-orange/80 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Líder Alicerce</h3>
              <Users className="h-10 w-10 text-white" />
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700 border-l-4 border-alicerce-orange pl-4 italic">
                Ideal para universitários(as) ou recém-formados(as) 
                apaixonados por ensinar e aprender, que desejam compartilhar 
                conhecimentos em português, matemática, inglês e habilidades 
                essenciais com crianças e jovens.
              </p>
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                  <span><strong>Universitários ou recém-formados de qualquer área</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                  <span>Vagas presenciais e online</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                  <span>Contratação como prestador(a) de serviço (PJ via MEI)</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                  <span>Valor hora: R$17,71</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Guia Alicerce */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover transform transition-all hover:-translate-y-2 border border-alicerce-lightBlue h-full">
            <div className="bg-gradient-to-r from-alicerce-blue to-alicerce-blue/80 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Guia Alicerce</h3>
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700 border-l-4 border-alicerce-blue pl-4 italic">
                Para profissionais com formação em licenciatura 
                e experiência em sala de aula, focados no ensino 
                de adultos que buscam retomar e concluir seus estudos.
              </p>
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-alicerce-blue"></div>
                  <span><strong>Licenciado e com experiência em sala de aula</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-alicerce-blue"></div>
                  <span>Vagas presenciais e online</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-alicerce-blue"></div>
                  <span>Contratação como prestador(a) de serviço (PJ via MEI)</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <div className="h-2 w-2 rounded-full bg-alicerce-blue"></div>
                  <span>Valor hora: R$35,43</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information Section */}
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 border-l-4 border-alicerce-purple">
          <h3 className="text-xl font-bold text-alicerce-blue mb-4">Modelo de trabalho flexível com propósito</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-alicerce-orange mt-2.5 flex-shrink-0"></div>
              <span>Carga horária adaptável, permitindo conciliar 
              estudos ou outras atividades com seu impacto positivo na educação.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-alicerce-orange mt-2.5 flex-shrink-0"></div>
              <span>Modelo de prestação de serviço (MEI) que oferece 
              autonomia e flexibilidade para organizar sua rotina.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-alicerce-orange mt-2.5 flex-shrink-0"></div>
              <span>Possibilidade de atuar em diferentes formatos e horários,
              inclusive conciliando com a universidade.</span>
            </li>
          </ul>
        </div>

        {/* MOVAA Program Section - Updated */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-alicerce-blue/5 to-alicerce-orange/5 rounded-xl shadow-md p-8 relative overflow-hidden border border-gray-100">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-alicerce-blue/10 px-4 py-2 rounded-full mb-6">
                <span className="text-alicerce-blue font-medium">Crescimento contínuo</span>
              </div>
              <h3 className="text-xl font-bold text-alicerce-blue mb-5">Seu crescimento tem nome: MOVAA 🚀</h3>
              <p className="text-gray-700 mb-4">
                O programa gamificado que reconhece e valoriza seu desenvolvimento no Alicerce
              </p>
              <p className="text-gray-700 mb-4">
                Ser instrutor(a) no Alicerce é muito mais do que dar aula — é entrar em uma jornada real de evolução.
              </p>
              <p className="text-gray-700 mb-4">
                Com o MOVAA (Movimento de Aprendizagem Ativa), você avança por três níveis de crescimento — Alfa, Beta e Gama — e é reconhecido(a) por cada passo que dá.
              </p>
              <p className="text-gray-700 mb-4">
                Ao longo dessa jornada, você desenvolve habilidades como educador(a), comunicador(a) e líder, e ainda conquista:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start gap-3">
                  <span>🔸</span>
                  <span>Mentorias e formações exclusivas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>🔸</span>
                  <span>Benefícios e recompensas a cada avanço</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>🔸</span>
                  <span>Aumento na remuneração de acordo com seu nível</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>🔸</span>
                  <span>Reconhecimento visível do seu impacto na missão do Alicerce</span>
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                Tudo isso com um modelo gamificado que torna sua evolução mais clara, motivadora e recompensadora.
              </p>
              <p className="text-gray-700 mb-4">
                ➡️ Você cresce. Sua carreira avança. Seu impacto transforma.
              </p>
              <p className="text-gray-700 font-medium">
                No Alicerce, quem ensina também aprende — e é valorizado por isso.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/85b8fe00-a4f4-418c-bbd3-c7b0167b8ac0.png" 
                alt="Níveis de crescimento MOVAA: Alfa, Beta e Gama" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-14">
          <ArrowDown className="w-10 h-10 text-alicerce-orange mx-auto animate-bounce mb-6" />
          <Button 
            onClick={scrollToApplicationForm} 
            className="bg-alicerce-orange hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-md transition-all transform hover:scale-105 shadow-lg"
          >
            QUERO INICIAR MINHA JORNADA ALICERCE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfilePaths;
