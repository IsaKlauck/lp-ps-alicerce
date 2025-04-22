
import React from 'react';
import { FileText, CheckSquare, File, Users, CheckCircle } from 'lucide-react';
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
      icon: <File className="h-10 w-10 text-alicerce-orange" />,
      description: "Forneça seus documentos pessoais e comprovantes de formação acadêmica"
    },
    {
      title: "Entrevista",
      icon: <Users className="h-10 w-10 text-alicerce-orange" />,
      description: "Conversa com nosso time de recrutamento para conhecer melhor seu perfil"
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
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Conheça o caminho até você se tornar um educador Alicerce
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-start max-w-5xl mx-auto relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-alicerce-lightBlue z-0"></div>
          
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
