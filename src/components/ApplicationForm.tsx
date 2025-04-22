
import React from 'react';
import { Button } from '@/components/ui/button';

const ApplicationForm: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="apply-form">
      <div className="section-container">
        <h2 className="section-title text-center">Inscreva-se Agora</h2>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Clique no botão abaixo para iniciar sua inscrição
        </p>

        <div className="max-w-2xl mx-auto text-center">
          <Button 
            onClick={() => window.open('https://mqmowuha.forms.app/formulario-de-inscricao-processo-seletivo', '_blank')}
            className="bg-alicerce-orange hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-md transition-all"
          >
            COMEÇAR MINHA INSCRIÇÃO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
