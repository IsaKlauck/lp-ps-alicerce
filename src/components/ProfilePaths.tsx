
import React from 'react';
import { BookOpen, Users, ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
const ProfilePaths: React.FC = () => {
  const scrollToApplicationForm = () => {
    const applicationForm = document.getElementById('application-form');
    if (applicationForm) {
      applicationForm.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="bg-alicerce-gray py-16 md:py-24 relative" id="perfis">
      {/* Background design elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mx-auto bg-alicerce-purple/10 px-4 py-2 rounded-full mb-4">
            <span className="text-alicerce-purple font-medium">Suas oportunidades</span>
          </div>
          
          <h2 className="section-title text-center mb-6">Dois caminhos para transformar com a gente</h2>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
            No Alicerce, você pode atuar como Líder ou Guia, 
            de acordo com seu perfil e momento profissional.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Guia Alicerce */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover transform transition-all hover:-translate-y-2 border border-alicerce-lightBlue">
            <div className="bg-gradient-to-r from-alicerce-blue to-alicerce-blue/80 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">💼 Guia Alicerce</h3>
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700 text-left border-l-4 border-alicerce-blue pl-4 italic">
                Para profissionais com formação em licenciatura 
                e experiência em sala de aula, da rede pública ou particular, 
                formados em diversas áreas, focados no ensino 
                de adultos que não concluíram os estudos.
              </p>
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex items-center gap-2 text-left">
                  <div className="h-2 w-2 rounded-full bg-alicerce-blue"></div>
                  <span><strong>Licenciado e com experiência em sala de aula</strong></span>
                </div>
                <div className="flex items-center gap-2 text-left">
                  <div className="h-2 w-2 rounded-full bg-alicerce-blue"></div>
                  <span>Vagas presenciais e online</span>
                </div>
                <div className="flex items-center gap-2 text-left">
                  <div className="h-2 w-2 rounded-full bg-alicerce-blue"></div>
                  <span>Contratação como prestador(a) de serviço (PJ via MEI)</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-left">
                  <div className="h-2 w-2 rounded-full bg-alicerce-blue"></div>
                  <span>Valor hora: R$35,43</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Líder Alicerce */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover transform transition-all hover:-translate-y-2 border border-alicerce-lightBlue">
            <div className="bg-gradient-to-r from-alicerce-orange to-alicerce-orange/80 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">✨ Líder Alicerce</h3>
              <Users className="h-10 w-10 text-white" />
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700 text-left border-l-4 border-alicerce-orange pl-4 italic">
                Para jovens universitários(as) ou recém-formados(as), 
                com vontade de ensinar e aprender, que ensinam português, 
                matemática, inglês e habilidades essenciais 
                para crianças e jovens.
              </p>
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex items-center gap-2 text-left">
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                  <span><strong>Universitários ou recém formados de qualquer área</strong></span>
                </div>
                <div className="flex items-center gap-2 text-left">
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                  <span>Vagas presenciais e online</span>
                </div>
                <div className="flex items-center gap-2 text-left">
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                  <span>Contratação como prestador(a) de serviço (PJ via MEI)</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-left">
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                  <span>Valor hora: R$17,71</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information Section */}
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 border-l-4 border-alicerce-purple">
          <h3 className="text-xl font-bold text-alicerce-blue mb-4">📌 Importante:</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3 text-left">
              <div className="h-2 w-2 rounded-full bg-alicerce-orange mt-2.5 flex-shrink-0"></div>
              <span>Ambos têm carga horária flexível, permitindo conciliar 
              seus estudos ou atividades com o impacto positivo na educação.</span>
            </li>
            <li className="flex items-start gap-3 text-left">
              <div className="h-2 w-2 rounded-full bg-alicerce-orange mt-2.5 flex-shrink-0"></div>
              <span>Aqui no Alicerce, o vínculo não é empregatício, 
              e sim de prestação de serviço com propósito. A contratação 
              via PJ (MEI) permite mais autonomia e flexibilidade.</span>
            </li>
            <li className="flex items-start gap-3 text-left">
              <div className="h-2 w-2 rounded-full bg-alicerce-orange mt-2.5 flex-shrink-0"></div>
              <span>Nossa carga horária é pensada para se adaptar à sua rotina, 
              inclusive se você estiver na universidade.</span>
            </li>
          </ul>
        </div>

        {/* MOVAA Program Section */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-alicerce-blue/5 to-alicerce-orange/5 rounded-xl shadow-md p-8 relative overflow-hidden border border-gray-100">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10">
            <div className="inline-block bg-alicerce-blue/10 px-4 py-2 rounded-full mb-6">
              <span className="text-alicerce-blue font-medium">Crescimento contínuo</span>
            </div>
            <h3 className="text-xl font-bold text-alicerce-blue mb-5">🚀 MOVAA — Nosso plano de desenvolvimento contínuo</h3>
            <p className="text-gray-700 mb-6 max-w-2xl text-left">
              Todos os(as) instrutores(as) do Alicerce têm acesso ao MOVAA: 
              um plano de formação e crescimento que te acompanha 
              ao longo da sua jornada conosco.
            </p>
            <p className="text-gray-700 mb-4 text-left">O MOVAA é composto por trilhas de aprendizagem, 
            mentorias e formações que te ajudam a:</p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-center gap-3 text-left">
                <div className="h-2 w-2 rounded-full bg-alicerce-blue"></div>
                <span>Evoluir como educador(a), comunicador(a) e líder</span>
              </li>
              <li className="flex items-center gap-3 text-left">
                <div className="h-2 w-2 rounded-full bg-alicerce-blue"></div>
                <span>Desenvolver habilidades socioemocionais e didática</span>
              </li>
              <li className="flex items-center gap-3 text-left">
                <div className="h-2 w-2 rounded-full bg-alicerce-blue"></div>
                <span>Se preparar para desafios dentro e fora da sala de aula</span>
              </li>
            </ul>
            <p className="text-lg font-semibold text-alicerce-blue text-center mt-6">
              Com o MOVAA, o crescimento acontece junto com o impacto.
            </p>
          </div>
        </div>

        <div className="text-center mt-14">
          <ArrowDown className="w-10 h-10 text-alicerce-orange mx-auto animate-bounce mb-6" />
          <Button onClick={scrollToApplicationForm} className="bg-alicerce-orange hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-md transition-all transform hover:scale-105 shadow-lg">Quero ser um(a) instrutor(a) Alicerce</Button>
        </div>
      </div>
    </section>;
};
export default ProfilePaths;
