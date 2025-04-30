
import React from 'react';

const PurposeSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-alicerce-blue">
            Ensine. Inspire. Transforme vidas com o Alicerce.
          </h2>
          
          <div className="space-y-4 text-xl text-gray-700">
            <p>Você acredita que a educação pode mudar o mundo?</p>
            <p>A gente também — e estamos fazendo isso acontecer todos os dias.</p>
            <p className="mt-6">
              No Alicerce, cada aula é uma oportunidade de transformar realidades. 
              Com uma metodologia inovadora, acessível e de alto impacto, 
              estamos acelerando a aprendizagem e abrindo portas 
              para milhares de estudantes em todo o Brasil. 
              Se você sonha em fazer parte de algo maior, 
              que usa a educação como instrumento de justiça social 
              e transformação, o seu lugar é com a gente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
