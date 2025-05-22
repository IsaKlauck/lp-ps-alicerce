
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Quem pode se inscrever?",
      answer: "Temos vagas para professores formados ou em formação, além universitários com até 30 anos. Cada perfil tem requisitos específicos de acordo com o projeto e a região, mas ambos podem participar do nosso processo seletivo contínuo."
    },
    {
      question: "Como funciona a etapa de avaliação (MAPA)?",
      answer: "Após a inscrição, você fará o MAPA — uma avaliação diagnóstica inicial nas trilhas de Leitura, Matemática e, opcionalmente, Inglês. Essa etapa nos ajuda a conhecer melhor o seu perfil e a direcionar sua trilha de formação, de acordo com os princípios da metodologia Alicerce."
    },
    {
      question: "Preciso ter experiência?",
      answer: "Depende do produto! No Produto Qualifica, buscamos candidatos com experiência prévia na área educacional. No Produto Reforço, não exigimos experiência: valorizamos a paixão por ensinar e boa comunicação."
    },
    {
      question: "Quanto tempo dura o processo?",
      answer: "O processo seletivo completo costuma durar de 2 a 3 semanas, dependendo da sua disponibilidade e da demanda do momento. Como nosso processo é contínuo, mesmo após concluir todas as etapas, você pode ser incluído em nosso banco de talentos e ser chamado futuramente."
    },
    {
      question: "Posso atuar 100% online?",
      answer: "Sim, em alguns casos! Embora a maioria das nossas vagas seja presencial, também temos oportunidades remotas, dependendo da região e do projeto. Mas quando presencial, contamos com polos em diversas cidades do Brasil."
    },
    {
      question: "O que é o MOVAA?",
      answer: "O MOVAA é o nosso programa de reconhecimento e desenvolvimento de quem atua conosco. Ele aprofunda o conhecimento prático e pedagógico, além de certificar líderes e guias em diferentes níveis dentro da metodologia Alicerce. É uma jornada gamificada com oportunidades únicas, que possibilita o aumento na remuneração como instrutor conforme avança na trilha."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-alicerce-gray relative" id="faq">
      {/* Background design elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum-dark.png')] opacity-5"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mx-auto bg-alicerce-purple/10 px-4 py-2 rounded-full mb-4">
            <span className="text-alicerce-purple font-medium">Dúvidas frequentes</span>
          </div>
          <h2 className="section-title text-center">Perguntas Frequentes</h2>
          
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            Encontre respostas para as principais dúvidas sobre o processo seletivo e sobre o trabalho no Alicerce.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion 
            type="single" 
            collapsible 
            className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
          >
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b border-alicerce-lightBlue last:border-0 group"
              >
                <AccordionTrigger 
                  className="px-6 py-5 text-right text-alicerce-blue hover:text-alicerce-orange transition-colors duration-300 font-medium"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="px-6 pb-5 text-gray-700 animate-slide-up bg-gray-50"
                >
                  <div className="text-right">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
