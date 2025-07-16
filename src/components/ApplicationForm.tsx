
import React from 'react';

const ApplicationForm: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="apply-form">
      <div className="section-container">
        <h2 className="section-title text-center mb-8">Inscreva-se Agora</h2>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf5UuLXo5mF79ZfGFRp0RgpxW18Z-2G-x3r44TO59oTb1jCCA/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Formulário de Inscrição"
              className="rounded-lg"
            >
              Carregando...
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
