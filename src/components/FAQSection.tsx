
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
      answer: "Temos vagas para professores formados ou em formação e para universitários com até 30 anos. Cada perfil tem requisitos específicos, mas ambos podem se inscrever em nosso processo contínuo."
    },
    {
      question: "Como funciona o MAPA?",
      answer: "O processo começa com a inscrição no processo seletivo. Em seguida, os candidatos devem realizar o MAPA (uma avaliação divididos em três trilhas): Leitura, Matemática e Inglês (opcional)."
    },
    {
      question: "Preciso ter experiência?",
      answer: "Para o Produto Qualifica, preferimos candidatos com experiência prévia na área educacional. Já para o Produto Reforço, aceitamos candidatos sem experiência anterior, desde que demonstrem paixão pelo ensino e boa comunicação."
    },
    {
      question: "Quanto tempo dura o processo?",
      answer: "O processo seletivo completo pode durar de 2 a 3 semanas, dependendo da disponibilidade do candidato para realizar cada etapa e da demanda atual. Como nosso processo é contínuo, mesmo após finalizar todas as etapas, você pode entrar em nosso banco de talentos."
    },
    {
      question: "Posso atuar 100% online?",
      answer: "Sim, para o Produto Qualifica temos opções de trabalho completamente remotas ou híbridas. Já para o Produto Reforço, as vagas são principalmente presenciais em nossos diversos polos espalhados pelo Brasil."
    },
    {
      question: "O que é o MOVAA?",
      answer: "O MOVAA é um programa de reconhecimento com objetivo de desenvolver líderes e guias, e assim impulsionar seus conhecimentos técnicos, pedagógicos e profissionais através de suas experiências práticas em sala de aula. Tudo isso por meio de níveis que reconhecem e incentivam essa jornada na metodologia Alicerce."
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
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b border-alicerce-lightBlue last:border-0 group"
              >
                <AccordionTrigger className="px-6 py-5 text-right text-alicerce-blue hover:text-alicerce-orange transition-colors duration-300 font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-gray-700 animate-slide-up bg-gray-50">
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
