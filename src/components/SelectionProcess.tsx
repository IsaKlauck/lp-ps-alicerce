
import React from 'react';
import { Lock, LockOpen, FileText, CheckSquare, FileUp, Users, GraduationCap, AlertCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import CTAButton from './CTAButton';

const SelectionProcess: React.FC = () => {
  const steps = [
    {
      title: "Inscrição",
      icon: <FileText className="h-10 w-10 text-white" />,
      description: "Compartilhe sua trajetória e o que te motiva a transformar a educação conosco.",
      isLocked: false,
      lockIcon: <LockOpen className="h-6 w-6 text-green-500 absolute -top-2 -right-2" />
    },
    {
      title: "MAPA - Prova de Conhecimento",
      icon: <CheckSquare className="h-10 w-10 text-white" />,
      description: "Avaliação de conhecimentos essenciais para garantir que você se sinta preparado para ensinar.",
      isLocked: false,
      lockIcon: <LockOpen className="h-6 w-6 text-green-500 absolute -top-2 -right-2" />
    },
    {
      title: "Envio de Documentos",
      icon: <FileUp className="h-10 w-10 text-white" />,
      description: "Após bom desempenho na prova, envie seu currículo e comprovações acadêmicas.",
      isLocked: true,
      lockIcon: <Lock className="h-6 w-6 text-gray-400 absolute -top-2 -right-2" />
    },
    {
      title: "Triagem Curricular",
      icon: <CheckSquare className="h-10 w-10 text-white" />,
      description: "Nossa equipe analisa cuidadosamente seu perfil e experiências.",
      isLocked: true,
      lockIcon: <Lock className="h-6 w-6 text-gray-400 absolute -top-2 -right-2" />
    },
    {
      title: "Entrevista",
      icon: <Users className="h-10 w-10 text-white" />,
      description: "Um bate-papo para conhecermos melhor você e seu alinhamento com nossos valores.",
      isLocked: true,
      lockIcon: <Lock className="h-6 w-6 text-gray-400 absolute -top-2 -right-2" />
    },
    {
      title: "Formação Inicial",
      icon: <GraduationCap className="h-10 w-10 text-white" />,
      description: "Receba a Formação Pedagógica Alicerce e comece sua jornada de impacto na educação.",
      isLocked: true,
      lockIcon: <Lock className="h-6 w-6 text-gray-400 absolute -top-2 -right-2" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="processo">
      {/* Background design elements */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-alicerce-orange/10 rounded-full"></div>
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-alicerce-blue/10 rounded-full"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mx-auto bg-alicerce-teal/10 px-4 py-2 rounded-full mb-4">
            <span className="text-alicerce-teal font-medium">Jornada de seleção</span>
          </div>
          
          <h2 className="section-title text-center">Como Se Tornar um Educador Alicerce</h2>
          
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            CONHEÇA CADA ETAPA DO NOSSO PROCESSO SELETIVO
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <Alert variant="default" className="mb-8 border-amber-300 bg-amber-50 max-w-lg mx-auto">
            <AlertCircle className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-800">Atenção</AlertTitle>
            <AlertDescription className="text-amber-700">
              Todas as etapas do processo seletivo são eliminatórias. É necessário ser aprovado em cada fase para avançar à próxima.
            </AlertDescription>
          </Alert>
          
          <div className="absolute top-0 bottom-0 right-[42px] w-1 bg-alicerce-blue rounded-full"></div>
          
          {steps.map((step, index) => (
            <TooltipProvider key={index} delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative flex flex-row-reverse items-start mb-14 group">
                    <div className="rounded-full p-4 shadow-lg relative z-10 ml-6 bg-alicerce-blue group-hover:scale-110 transition-all duration-300">
                      {step.icon}
                      {step.lockIcon}
                    </div>
                    <div className="flex-1 text-right bg-white p-5 rounded-lg shadow-md group-hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                      <h3 className="font-semibold text-alicerce-blue text-xl mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="left" className="max-w-[250px] p-4 bg-alicerce-blue text-white">
                  <p>{step.description}</p>
                  {step.isLocked ? (
                    <div className="mt-2 text-sm text-yellow-200">Esta etapa é desbloqueada após concluir as anteriores.</div>
                  ) : (
                    <div className="mt-2 text-sm text-green-200">Esta etapa está disponível para você agora!</div>
                  )}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        
        <CTAButton />
      </div>
    </section>
  );
};

export default SelectionProcess;
