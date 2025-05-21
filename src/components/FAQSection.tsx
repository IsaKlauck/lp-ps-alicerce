
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
      answer: "Recebemos inscrições de professores formados ou em formação e de universitários com até 30 anos. Cada perfil tem requisitos específicos, alinhados com nossas diferentes oportunidades."
    },
    {
      question: "Como funciona o MAPA?",
      answer: "O MAPA é nossa avaliação de conhecimentos, dividida em três trilhas: Leitura, Matemática e Inglês (opcional). É uma etapa importante do processo seletivo que acontece após sua inscrição inicial."
    },
    {
      question: "Preciso ter experiência?",
      answer: "Para o Qualifica, valorizamos candidatos com experiência prévia em educação. Já para o Reforço, aceitamos candidatos sem experiência anterior, desde que demonstrem paixão pelo ensino e boa comunicação."
    },
    {
      question: "Quanto tempo dura o processo?",
      answer: "O processo seletivo completo geralmente leva de 2 a 3 semanas, dependendo da sua disponibilidade para cada etapa e da demanda atual. Como nosso processo é contínuo, mesmo após finalizar todas as etapas, você pode entrar em nosso banco de talentos."
    },
    {
      question: "Posso atuar 100% online?",
      answer: "Sim! Para o Qualifica temos opções totalmente remotas ou híbridas. Para o Reforço, oferecemos principalmente vagas presenciais em nossos diversos polos pelo Brasil, mas também temos algumas oportunidades online."
    },
    {
      question: "O que é o MOVAA?",
      answer: "O MOVAA é nosso programa de desenvolvimento profissional que visa formar líderes e guias de excelência, impulsionando seus conhecimentos técnicos, pedagógicos e profissionais através de experiências práticas. O programa oferece níveis progressivos que reconhecem e incentivam sua jornada na metodologia Alicerce."
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
