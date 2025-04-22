
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
      answer: "O processo começa com a inscrição no processo seletivo. Em seguida, os candidatos devem realizar o MAPA (uma avaliação dividida em três trilhas): Leitura, Matemática e Inglês (opcional)."
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
    }
  ];

  return (
    <section className="py-16 bg-alicerce-gray" id="faq">
      <div className="section-container">
        <h2 className="section-title text-center">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto mt-8">
          <Accordion type="single" collapsible className="bg-white rounded-xl overflow-hidden shadow-md">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-alicerce-lightBlue last:border-0">
                <AccordionTrigger className="px-6 py-4 text-left text-alicerce-blue hover:text-alicerce-orange hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  {faq.answer}
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
