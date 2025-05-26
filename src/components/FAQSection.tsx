import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQSection: React.FC = () => {
  const faqs = [{
    question: "Quem pode se inscrever?",
    answer: "Podem se inscrever pessoas com paixão por educação! Para atuar como líder, aceitamos universitários de qualquer área e recém-formados, desde que tenham interesse em desenvolver habilidades pedagógicas. Para atuar como guia, buscamos profissionais de licenciatura com experiência comprovada em sala de aula. Assim, acreditamos na valorização tanto de quem já tem trajetória no ensino quanto de quem deseja iniciar uma jornada impactando vidas!"
  }, {
    question: "Como funciona a etapa de avaliação (MAPA)?",
    answer: "O MAPA é uma avaliação online composta por até três provas: Português, Matemática e, opcionalmente, Inglês (caso tenha interesse em dar aulas de inglês). Essa etapa serve para verificar se você domina os conteúdos que irá ensinar. Para seguir no processo seletivo, é necessário atingir a nota mínima exigida."
  }, {
    question: "Preciso ter experiência?",
    answer: "Depende do produto! No Produto Qualifica, buscamos candidatos com experiência prévia na área educacional. No Produto Reforço, não exigimos experiência: valorizamos a paixão por ensinar e boa comunicação."
  }, {
    question: "Quanto tempo dura o processo?",
    answer: "O processo seletivo completo costuma durar de 2 a 3 semanas, dependendo da sua disponibilidade e da demanda do momento. Como nosso processo é contínuo, mesmo após concluir todas as etapas, você pode ser incluído em nosso banco de talentos e ser chamado futuramente."
  }, {
    question: "Posso atuar 100% online?",
    answer: "Sim, em alguns casos! Embora a maioria das vagas seja presencial, também temos oportunidades remotas em alguns projetos."
  }, {
    question: "Tem projeto em todo o Brasil?",
    answer: "Sim! Temos projetos iniciando toda semana em diversas cidades do país."
  }, {
    question: "O que é o MOVAA?",
    answer: "O MOVAA é o nosso programa de reconhecimento e desenvolvimento de quem atua conosco. Ele aprofunda o conhecimento prático e pedagógico, além de certificar líderes e guias em diferentes níveis dentro da metodologia Alicerce. É uma jornada gamificada com oportunidades únicas, que possibilita o aumento na remuneração como instrutor conforme avança na trilha."
  }];
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
          <Accordion type="single" collapsible className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-alicerce-lightBlue last:border-0 group">
                <AccordionTrigger className="px-6 py-5 text-left text-alicerce-blue hover:text-alicerce-orange transition-colors duration-300 font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-gray-700 animate-slide-up bg-gray-50">
                  <div className="text-left">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="flex justify-center mt-12">
          <Button 
            className="bg-alicerce-blue text-white hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg px-8 py-6 text-lg" 
            onClick={() => {
              const applicationForm = document.getElementById('apply-form');
              if (applicationForm) {
                applicationForm.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }}
          >
            ME INSCREVER AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
