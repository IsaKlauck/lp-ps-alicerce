
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
    <section className="bg-alicerce-gray py-16" id="perfis">
      <div className="section-container">
        <h2 className="section-title text-center mb-4">Dois Caminhos para Transformar com a Gente</h2>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          No Alicerce, você pode atuar como Líder ou Guia, 
          de acordo com seu perfil e momento profissional.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Guia Alicerce */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
            <div className="bg-alicerce-blue p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">💼 Guia Alicerce</h3>
              <BookOpen className="h-10 w-10 text-alicerce-orange" />
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700 text-center">
                Para profissionais com formação em licenciatura 
                e experiência em sala de aula, focados no ensino de adultos 
                que não concluíram os estudos. Capacitam seus alunos 
                em matérias fundamentais e habilidades 
                para o mercado de trabalho.
              </p>
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <p className="flex items-center gap-2 justify-center">
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                  <span>Vagas presenciais e online</span>
                </p>
                <p className="flex items-center gap-2 justify-center">
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                  <span>Contratação como prestador(a) de serviço (PJ via MEI)</span>
                </p>
                <p className="flex items-center gap-2 font-semibold justify-center">
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                  <span>Valor hora: R$35,43</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Líder Alicerce */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
            <div className="bg-alicerce-blue p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">✨ Líder Alicerce</h3>
              <Users className="h-10 w-10 text-alicerce-orange" />
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700 text-center">
                Para jovens universitários(as) ou recém-formados(as), 
                com vontade de ensinar e aprender, que ensinam português, 
                matemática, inglês e habilidades essenciais 
                para crianças e jovens. Com capacitação contínua, 
                tornam-se agentes de mudança na educação.
              </p>
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <p className="flex items-center gap-2 justify-center">
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                  <span>Vagas presenciais e online</span>
                </p>
                <p className="flex items-center gap-2 justify-center">
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                  <span>Contratação como prestador(a) de serviço (PJ via MEI)</span>
                </p>
                <p className="flex items-center gap-2 font-semibold justify-center">
                  <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                  <span>Valor hora: R$17,71</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information Section */}
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-alicerce-blue mb-4 text-center">📌 Importante:</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-alicerce-orange mt-2.5 flex-shrink-0"></div>
              <span className="text-center">Ambos têm carga horária flexível, permitindo conciliar 
              seus estudos ou atividades com o impacto positivo na educação.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-alicerce-orange mt-2.5 flex-shrink-0"></div>
              <span className="text-center">Aqui no Alicerce, o vínculo não é empregatício, 
              e sim de prestação de serviço com propósito. A contratação 
              via PJ (MEI) permite mais autonomia, flexibilidade e uma remuneração 
              transparente — baseada nas horas efetivamente trabalhadas.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-alicerce-orange mt-2.5 flex-shrink-0"></div>
              <span className="text-center">Nossa carga horária é pensada para se adaptar à sua rotina, 
              inclusive se você estiver na universidade.</span>
            </li>
          </ul>
        </div>

        {/* MOVAA Program Section */}
        <div className="mt-12 max-w-4xl mx-auto bg-white/80 rounded-xl shadow-md p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-alicerce-blue/10 to-alicerce-orange/10 z-0"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-alicerce-blue mb-4 text-center">🚀 MOVAA — Nosso plano de desenvolvimento contínuo</h3>
            <p className="text-gray-700 mb-4 text-center">
              Todos os(as) instrutores(as) do Alicerce têm acesso ao MOVAA: 
              um plano de formação e crescimento que te acompanha 
              ao longo da sua jornada conosco.
            </p>
            <p className="text-gray-700 mb-2 text-center">Ele é composto por trilhas de aprendizagem, 
            mentorias e formações que te ajudam a:</p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-center gap-2 justify-center">
                <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                <span>Evoluir como educador(a), comunicador(a) e líder</span>
              </li>
              <li className="flex items-center gap-2 justify-center">
                <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                <span>Desenvolver habilidades socioemocionais e didática</span>
              </li>
              <li className="flex items-center gap-2 justify-center">
                <div className="h-2 w-2 rounded-full bg-alicerce-orange"></div>
                <span>Se preparar para desafios dentro e fora da sala de aula</span>
              </li>
            </ul>
            <p className="text-lg font-semibold text-alicerce-blue text-center mt-6">
              Com o MOVAA, o crescimento acontece junto com o impacto.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <ArrowDown className="w-10 h-10 text-alicerce-orange mx-auto animate-bounce mb-4" />
          <Button 
            onClick={scrollToApplicationForm}
            className="bg-alicerce-orange hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-md transition-all"
          >
            QUERO ME INSCREVER
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfilePaths;
