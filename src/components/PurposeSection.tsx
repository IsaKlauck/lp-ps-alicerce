
import React from 'react';
import { Button } from '@/components/ui/button';

const PurposeSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-alicerce-blue">
            Ensine. Inspire. Transforme vidas com o Alicerce.
          </h2>
          
          <div className="space-y-4 text-xl text-gray-700 text-left">
            <p>Você acredita que a educação pode mudar o mundo?</p>
            <p>A gente também — e estamos fazendo isso acontecer todos os dias.</p>
            <p className="mt-6">
              No Alicerce, cada aula é uma oportunidade de transformar realidades. 
              Com uma metodologia inovadora, acessível e de alto impacto, estamos 
              acelerando a aprendizagem e abrindo portas para milhares 
              de estudantes em todo o Brasil.
            </p>
            <p>
              Se você sonha em fazer parte de algo maior, que usa a educação 
              como instrumento de justiça social e transformação, 
              o seu lugar é com a gente.
            </p>
          </div>
          
          <div className="flex justify-center pt-4">
            <Button 
              className="bg-alicerce-orange text-white hover:bg-orange-600 transition-transform hover:scale-105"
              onClick={() => {
                const applicationForm = document.getElementById('apply-form');
                if (applicationForm) {
                  applicationForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              QUERO FAZER PARTE DESSA MISSÃO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
