
import React from 'react';
import { Button } from '@/components/ui/button';

interface CTAButtonProps {
  className?: string;
  text?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  className = "", 
  text = "QUERO FAZER PARTE DESSE TIME" 
}) => {
  const scrollToApplicationForm = () => {
    const applicationForm = document.getElementById('apply-form');
    if (applicationForm) {
      applicationForm.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`flex justify-center mt-16 ${className}`}>
      <Button 
        className="bg-alicerce-blue text-white hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg px-8 py-6 text-lg" 
        onClick={scrollToApplicationForm}
      >
        {text}
      </Button>
    </div>
  );
};

export default CTAButton;
