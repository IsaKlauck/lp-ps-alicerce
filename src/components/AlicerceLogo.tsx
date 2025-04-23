
import React from 'react';

const AlicerceLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/public/lovable-uploads/71b5f496-1978-4f63-8a9b-9d123760bd21.png"
        alt="Alicerce Educação"
        className="h-12"
      />
    </div>
  );
};

export default AlicerceLogo;
