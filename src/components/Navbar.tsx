
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import AlicerceLogo from './AlicerceLogo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Serviços", href: "#servicos" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Perfis", href: "#perfis" },
    { name: "Processo Seletivo", href: "#processo" },
    { name: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <AlicerceLogo className="h-12" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href.substring(1));
              }}
              className={`font-medium hover:text-alicerce-orange transition-colors ${isScrolled ? 'text-alicerce-blue' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex justify-center">
            <Button
              className="bg-alicerce-orange hover:bg-orange-600 text-white transition-transform hover:scale-105"
              onClick={() => scrollToSection('apply-form')}
            >
              Inscreva-se
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            className={isScrolled ? 'text-alicerce-blue' : 'text-white'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-alicerce-blue hover:text-alicerce-orange transition-colors py-2 text-left"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.substring(1));
                }}
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex justify-center">
              <Button
                className="bg-alicerce-orange hover:bg-orange-600 text-white w-full"
                onClick={() => scrollToSection('apply-form')}
              >
                Inscreva-se
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
