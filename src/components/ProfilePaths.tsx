
import React from 'react';
import { BookOpen, Users, ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProfilePaths: React.FC = () => {
  const scrollToApplicationForm = () => {
    const applicationForm = document.getElementById('application-form');
    if (applicationForm) {
      applicationForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-alicerce-gray py-16 md:py-24" id="perfis">
      <div className="section-container">
        <h2 className="section-title text-center mb-6">Dois Caminhos para Transformar com a Gente</h2>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          No Alicerce, você pode atuar como Líder ou Guia, 
          de acordo com seu perfil e momento profissional.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Guia Alicerce */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover transform transition-all hover:-translate-y-2">
            <div className="bg-alicerce-blue p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">💼 Guia Alicerce</h3>
              <BookOpen className="h-10 w-10 text-alicerce-orange" />
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700 text-center">
                Para profissionais com formação em licenciatura 
                e experiência em sala de aula, da rede pública ou particular, 
                formados em diversas áreas, focados no ensino 
                de adultos que não concluíram os estudos.
              </p>
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex items-center gap-2 justify-end">
                  <span>Vagas presenciais e online</span>
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <span>Contratação como prestador(a) de serviço (PJ via MEI)</span>
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                </div>
                <div className="flex items-center gap-2 font-semibold justify-end">
                  <span>Valor hora: R$35,43</span>
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Líder Alicerce */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover transform transition-all hover:-translate-y-2">
            <div className="bg-alicerce-blue p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">✨ Líder Alicerce</h3>
              <Users className="h-10 w-10 text-alicerce-orange" />
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700 text-center">
                Para jovens universitários(as) ou recém-formados(as), 
                com vontade de ensinar e aprender, que ensinam português, 
                matemática, inglês e habilidades essenciais 
                para crianças e jovens.
              </p>
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex items-center gap-2 justify-end">
                  <span>Vagas presenciais e online</span>
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <span>Contratação como prestador(a) de serviço (PJ via MEI)</span>
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                </div>
                <div className="flex items-center gap-2 font-semibold justify-end">
                  <span>Valor hora: R$17,71</span>
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information Section */}
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-alicerce-blue mb-4 text-center">📌 Importante:</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3 justify-end">
              <span className="text-right">Ambos têm carga horária flexível, permitindo conciliar 
              seus estudos ou atividades com o impacto positivo na educação.</span>
              <div className="h-2 w-2 rounded-full bg-alicerce-orange mt-2.5 flex-shrink-0"></div>
            </li>
            <li className="flex items-start gap-3 justify-end">
              <span className="text-right">Aqui no Alicerce, o vínculo não é empregatício, 
              e sim de prestação de serviço com propósito. A contratação 
              via PJ (MEI) permite mais autonomia e flexibilidade.</span>
              <div className="h-2 w-2 rounded-full bg-alicerce-orange mt-2.5 flex-shrink-0"></div>
            </li>
            <li className="flex items-start gap-3 justify-end">
              <span className="text-right">Nossa carga horária é pensada para se adaptar à sua rotina, 
              inclusive se você estiver na universidade.</span>
              <div className="h-2 w-2 rounded-full bg-alicerce-orange mt-2.5 flex-shrink-0"></div>
            </li>
          </ul>
        </div>

        {/* MOVAA Program Section */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-alicerce-blue/5 to-alicerce-orange/5 rounded-xl shadow-md p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-alicerce-blue mb-5 text-center">🚀 MOVAA — Nosso plano de desenvolvimento contínuo</h3>
            <p className="text-gray-700 mb-6 text-center max-w-2xl mx-auto">
              Todos os(as) instrutores(as) do Alicerce têm acesso ao MOVAA: 
              um plano de formação e crescimento que te acompanha 
              ao longo da sua jornada conosco.
            </p>
            <p className="text-gray-700 mb-4 text-center">O MOVAA é composto por trilhas de aprendizagem, 
            mentorias e formações que te ajudam a:</p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-center gap-3 justify-end">
                <span>Evoluir como educador(a), comunicador(a) e líder</span>
                <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
              </li>
              <li className="flex items-center gap-3 justify-end">
                <span>Desenvolver habilidades socioemocionais e didática</span>
                <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
              </li>
              <li className="flex items-center gap-3 justify-end">
                <span>Se preparar para desafios dentro e fora da sala de aula</span>
                <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
              </li>
            </ul>
            <p className="text-lg font-semibold text-alicerce-blue text-center mt-6">
              Com o MOVAA, o crescimento acontece junto com o impacto.
            </p>
          </div>
        </div>

        <div className="text-center mt-14">
          <ArrowDown className="w-10 h-10 text-alicerce-orange mx-auto animate-bounce mb-6" />
          <Button 
            onClick={scrollToApplicationForm}
            className="bg-alicerce-orange hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-md transition-all transform hover:scale-105"
          >
            QUERO ME INSCREVER
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfilePaths;
