
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
  
  // Aumentando o tamanho da logo para 3x maior (de h-12 para h-36)
  const logoSizeClass = "h-36";
  
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoUrl}
        alt="Alicerce Educação"
        className={`${logoSizeClass} transition-all duration-300`}
      />
    </div>
  );
};

export default AlicerceLogo;
