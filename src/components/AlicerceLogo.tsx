
import React from 'react';

interface AlicerceLogoProps {
  className?: string;
  darkBackground?: boolean;
}

const AlicerceLogo: React.FC<AlicerceLogoProps> = ({ 
  className = "", 
  darkBackground = false 
}) => {
  const logoUrl = darkBackground 
    ? "/lovable-uploads/bb35f8df-67e1-42e8-bbca-f7d59bb69345.png" 
    : "https://alicerceedu.com.br/logo_alicerce_educacao.svg";
  
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoUrl}
        alt="Alicerce Educação"
        className="h-12"
      />
    </div>
  );
};

export default AlicerceLogo;
