
import React from 'react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import AlicerceLogo from './AlicerceLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-alicerce-blue text-white py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <AlicerceLogo className="mb-6" darkBackground={true} />
            <p className="text-lg opacity-90">
              "Através da educação, transformamos vidas e construímos um Brasil mais justo."
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/alicerceedu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/alicerceedu/?_l=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/alicerceeducacao" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="text-right">
            <a 
              href="https://alicerceedu.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-md transition-all"
            >
              Conheça mais sobre o Alicerce
            </a>

            <p className="mt-6 text-sm opacity-70">
              © {new Date().getFullYear()} Alicerce Educação. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
