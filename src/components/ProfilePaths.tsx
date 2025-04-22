
import React from 'react';
import { BookOpen, Users } from 'lucide-react';

const ProfilePaths: React.FC = () => {
  return (
    <section className="bg-alicerce-gray py-16" id="perfis">
      <div className="section-container">
        <h2 className="section-title text-center">Qual Caminho é o Seu?</h2>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          No Alicerce, temos dois perfis de educadores. Descubra qual se encaixa melhor para você!
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Qualifica Card */}
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
          
          {/* Reforço Card */}
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
        
        <div className="bg-alicerce-lightBlue p-6 rounded-lg mt-8 max-w-3xl mx-auto text-center">
          <p className="text-alicerce-blue text-lg">
            <span className="font-bold">🔍 Se você se encaixar nos dois</span>, será priorizado no Qualifica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfilePaths;
