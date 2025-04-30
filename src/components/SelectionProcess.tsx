
import React from 'react';
import { Lock, LockOpen, FileText, CheckSquare, FileUp, Users, GraduationCap } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SelectionProcess: React.FC = () => {
  const steps = [
    {
      title: "Inscrição",
      icon: <FileText className="h-10 w-10 text-alicerce-orange" />,
      description: "Preencha o formulário e conte sobre sua trajetória e interesse em transformar a educação com a gente.",
      isLocked: false,
      lockIcon: <LockOpen className="h-6 w-6 text-green-500 absolute -top-2 -right-2" />
    },
    {
      title: "MAPA - Prova de Conhecimento",
      icon: <CheckSquare className="h-10 w-10 text-alicerce-orange" />,
      description: "Avaliamos seus conhecimentos em conteúdos essenciais. Queremos que você se sinta confiante para ensinar.",
      isLocked: false,
      lockIcon: <LockOpen className="h-6 w-6 text-green-500 absolute -top-2 -right-2" />
    },
    {
      title: "Envio de Documentos",
      icon: <FileUp className="h-10 w-10 text-alicerce-orange" />,
      description: "Caso tenha bom desempenho na prova, você envia currículo e comprovações de formação ou matrícula.",
      isLocked: true,
      lockIcon: <Lock className="h-6 w-6 text-gray-400 absolute -top-2 -right-2" />
    },
    {
      title: "Triagem Curricular",
      icon: <CheckSquare className="h-10 w-10 text-alicerce-orange" />,
      description: "Nosso time analisa seu perfil e experiências.",
      isLocked: true,
      lockIcon: <Lock className="h-6 w-6 text-gray-400 absolute -top-2 -right-2" />
    },
    {
      title: "Entrevista",
      icon: <Users className="h-10 w-10 text-alicerce-orange" />,
      description: "Uma conversa para nos conhecermos melhor e entendermos seu alinhamento com nossos valores.",
      isLocked: true,
      lockIcon: <Lock className="h-6 w-6 text-gray-400 absolute -top-2 -right-2" />
    },
    {
      title: "Formação Inicial",
      icon: <GraduationCap className="h-10 w-10 text-alicerce-orange" />,
      description: "Você recebe a Formação Pedagógica Alicerce e começa sua jornada de impacto na educação.",
      isLocked: true,
      lockIcon: <Lock className="h-6 w-6 text-gray-400 absolute -top-2 -right-2" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="processo">
      <div className="section-container">
        <h2 className="section-title text-center mb-16">Etapas do Processo Seletivo</h2>
        
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute top-0 bottom-0 right-[42px] w-1 bg-alicerce-lightBlue" />
          
          {steps.map((step, index) => (
            <TooltipProvider key={index} delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className={`relative flex flex-row-reverse items-start mb-14 ${step.isLocked ? 'opacity-50' : ''}`}>
                    <div className="bg-white rounded-full p-4 shadow-md border border-alicerce-lightBlue relative z-10 ml-6">
                      {step.icon}
                      {step.lockIcon}
                    </div>
                    <div className="flex-1 text-right">
                      <h3 className="font-semibold text-alicerce-blue text-xl mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="left" className="max-w-[250px] p-4">
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
