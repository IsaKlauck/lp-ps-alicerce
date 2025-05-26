
import React from 'react';
import { Button } from '@/components/ui/button';

const PurposeSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png')] opacity-5"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-block mx-auto bg-alicerce-lightBlue px-4 py-2 rounded-full mb-2">
            <span className="text-alicerce-blue font-medium">Nossa Missão</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-center text-alicerce-blue">Educar é Transformar — Faça Parte Dessa História</h2>
          
          <div className="space-y-5 text-xl text-gray-700 text-center">
            <p>Você acredita que a educação tem o poder de mudar o mundo?</p>
            <p>A gente também — e estamos fazendo isso acontecer todos os dias.</p>
            <p className="mt-6">
              No Alicerce, cada aula é uma oportunidade de transformar realidades. 
              Com metodologias que realmente funcionam, estamos acelerando o aprendizado 
              e abrindo portas para milhares de estudantes brasileiros.
            </p>
            <p>
              Se você sonha em fazer parte de algo maior, que usa a educação como 
              ferramenta de justiça social e transformação, seu lugar é aqui.
            </p>
          </div>
          
          <div className="flex justify-center pt-6">
            <Button 
              className="bg-alicerce-orange text-white hover:bg-orange-600 transition-transform hover:scale-105 px-8 py-6 text-lg font-semibold shadow-lg" 
              onClick={() => {
                const applicationForm = document.getElementById('apply-form');
                if (applicationForm) {
                  applicationForm.scrollIntoView({
                    behavior: 'smooth'
                  });
                }
              }}
            >
              QUERO SER LÍDER
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
