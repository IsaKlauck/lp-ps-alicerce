
import React from 'react';

const AlicerceLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="https://alicerceedu.com.br/logo_alicerce_educacao.svg"
        alt="Alicerce Educação"
        className="h-12"
      />
    </div>
  );
};

export default AlicerceLogo;
