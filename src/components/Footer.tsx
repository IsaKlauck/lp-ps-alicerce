
import React from 'react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-alicerce-blue text-white py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Alicerce Educação</h2>
            <p className="text-lg opacity-90">
              "O Alicerce acredita no poder da educação que transforma vidas."
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/alicerceeducacao/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/alicerceeducacao/" 
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
              className="inline-block btn-secondary bg-transparent text-white border-white hover:bg-white/10"
            >
              Visite nosso site principal
            </a>

            <p className="mt-4 text-sm opacity-70">
              © {new Date().getFullYear()} Alicerce Educação. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
