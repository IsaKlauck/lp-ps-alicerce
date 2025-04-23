
import React from 'react';
import { Lock, LockOpen, FileText, CheckSquare, FileUp, Users, GraduationCap, CheckCircle } from 'lucide-react';
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
    <section className="py-16 bg-white" id="processo">
      <div className="section-container">
        <h2 className="section-title text-center">Etapas do Processo Seletivo</h2>
        
        <div className="relative flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-start max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-alicerce-lightBlue z-0" />
          
          {steps.map((step, index) => (
            <TooltipProvider key={index} delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className={`relative flex flex-col items-center text-center z-10 w-full md:w-auto transition-all duration-300 ${step.isLocked ? 'opacity-50' : ''}`}>
                    <div className="bg-white rounded-full p-4 shadow-md border border-alicerce-lightBlue mb-4 relative">
                      {step.icon}
                      {step.lockIcon}
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
