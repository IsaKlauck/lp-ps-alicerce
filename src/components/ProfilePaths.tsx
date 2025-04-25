
import React from 'react';
import { BookOpen, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProfilePaths: React.FC = () => {
  const scrollToApplicationForm = () => {
    const applicationForm = document.getElementById('apply-form');
    if (applicationForm) {
      applicationForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-alicerce-gray py-16" id="perfis">
      <div className="section-container">
        <h2 className="section-title text-center">Qual Caminho é o Seu?</h2>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          No Alicerce, temos dois perfis de educadores. Descubra qual se encaixa melhor para você!
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
            <div className="bg-alicerce-blue p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Produto Qualifica</h3>
              <BookOpen className="h-10 w-10 text-alicerce-orange" />
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-alicerce-orange"></div>
                  <span>Para professores licenciados (formados ou cursando)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-alicerce-orange"></div>
                  <span>Com mais experiência na área educacional</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-alicerce-orange"></div>
                  <span>Vagas online ou híbridas</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
            <div className="bg-alicerce-blue p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Produto Reforço</h3>
              <Users className="h-10 w-10 text-alicerce-orange" />
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-alicerce-orange"></div>
                  <span>Para universitários com até 30 anos</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-alicerce-orange"></div>
                  <span>Com ou sem experiência anterior</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-alicerce-orange"></div>
                  <span>Vagas em polos presenciais</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={scrollToApplicationForm}
            className="bg-alicerce-orange hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-md transition-all"
          >
            QUERO ME INSCREVER
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfilePaths;
