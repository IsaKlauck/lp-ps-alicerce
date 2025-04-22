
import React from 'react';
import { FileText, CheckSquare, FileUp, Users, GraduationCap, CheckCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SelectionProcess: React.FC = () => {
  const steps = [
    {
      title: "Inscrição",
      icon: <FileText className="h-10 w-10 text-alicerce-orange" />,
      description: "Preencha o formulário online com seus dados e informações profissionais"
    },
    {
      title: "Prova de Conhecimento",
      icon: <CheckSquare className="h-10 w-10 text-alicerce-orange" />,
      description: "Realize o MAPA - nossa avaliação de conhecimentos pedagógicos e específicos"
    },
    {
      title: "Envio de Documentos",
      icon: <FileUp className="h-10 w-10 text-alicerce-orange" />,
      description: "Forneça seus documentos pessoais e comprovantes de formação acadêmica"
    },
    {
      title: "Entrevista",
      icon: <Users className="h-10 w-10 text-alicerce-orange" />,
      description: "Conversa com nosso time de recrutamento para conhecer melhor seu perfil"
    },
    {
      title: "Formação Inicial",
      icon: <GraduationCap className="h-10 w-10 text-alicerce-orange" />,
      description: "Participe do programa de formação inicial para educadores Alicerce"
    },
    {
      title: "Boas-vindas!",
      icon: <CheckCircle className="h-10 w-10 text-alicerce-orange" />,
      description: "Parabéns! Você agora faz parte do time de educadores do Alicerce"
    }
  ];

  return (
    <section className="py-16 bg-white" id="processo">
      <div className="section-container">
        <h2 className="section-title text-center">Etapas do Processo Seletivo</h2>
        
        <div className="mb-12 max-w-3xl mx-auto text-center space-y-6">
          <p className="text-lg text-gray-700">
            O Alicerce Educação inicia novos projetos todos os meses em diferentes regiões do Brasil. 
            Para garantir agilidade e qualidade nos processos seletivos, mantemos um Banco de Talentos 
            ativo e atualizado.
          </p>
          <p className="text-lg text-gray-700">
            Mesmo que não haja uma vaga imediata disponível na sua cidade ou região, 
            você pode se cadastrar e ser chamado assim que surgir uma nova oportunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4 p-0">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-alicerce-blue">Reforço Escolar</h3>
              <p className="text-gray-700">
                Aulas para crianças e jovens de 5 a 18 anos, com foco no desenvolvimento 
                das competências essenciais para a vida e o futuro.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4 p-0">
              <div className="text-3xl mb-4">👩‍🏫</div>
              <h3 className="text-xl font-semibold text-alicerce-blue">Qualificação para Adultos</h3>
              <p className="text-gray-700">
                Aulas para maiores de 18 anos, voltadas ao fortalecimento das habilidades 
                básicas e preparação para o mundo do trabalho.
              </p>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Ao se cadastrar, seu perfil pode ser considerado em várias frentes de atuação, 
          tanto presenciais quanto online.
        </p>

        <div className="relative flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-start max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-alicerce-lightBlue z-0" />
          
          {/* Steps */}
          {steps.map((step, index) => (
            <TooltipProvider key={index} delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-col items-center text-center z-10 w-full md:w-auto card-hover">
                    <div className="bg-white rounded-full p-4 shadow-md border border-alicerce-lightBlue mb-4">
                      {step.icon}
                    </div>
                    <h3 className="font-semibold text-alicerce-blue text-lg mt-2">{step.title}</h3>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-[200px] p-4">
                  <p>{step.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectionProcess;
