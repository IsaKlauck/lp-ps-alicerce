
import React from 'react';

interface AlicerceLogoProps {
  className?: string;
  darkBackground?: boolean;
  isScrolled?: boolean;
}

const AlicerceLogo: React.FC<AlicerceLogoProps> = ({ 
  className = "", 
  darkBackground = false,
  isScrolled = false
}) => {
  const logoUrl = darkBackground 
    ? "/lovable-uploads/bb35f8df-67e1-42e8-bbca-f7d59bb69345.png" 
    : "https://alicerceedu.com.br/logo_alicerce_educacao.svg";
  
  // Tamanho grande quando não rolou (h-36) e pequeno quando rolou (h-12)
  const logoSizeClass = isScrolled ? "h-12" : "h-36";
  
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
