
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isVisible && (
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          className="bg-alicerce-orange text-white hover:bg-alicerce-orange/80 rounded-full h-12 w-12 shadow-lg"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ScrollTopButton;
