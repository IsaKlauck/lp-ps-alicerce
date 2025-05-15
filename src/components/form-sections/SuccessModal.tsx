
import React from 'react';
import { AlertCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface SuccessModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onOpenChange }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Parabéns! Etapa 1 Concluída
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 py-4">
          <div className="rounded-full bg-green-100 p-3">
            <svg 
              className="h-6 w-6 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          <div className="text-center space-y-2">
            <p>
              Sua inscrição foi recebida com sucesso!
            </p>
            <p>
              Por favor, verifique seu email para instruções sobre a próxima etapa do processo seletivo.
            </p>
            <div className="flex items-center justify-center mt-2 text-amber-600">
              <AlertCircle className="w-4 h-4 mr-1" />
              <p className="text-sm">
                Caso não receba o email nas próximas horas, entre em contato pelo email <a href="mailto:selecao@alicerceedu.com.br" className="underline text-blue-600">selecao@alicerceedu.com.br</a> ou com o representante Alicerce que está em contato com você.
              </p>
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button 
            onClick={() => onOpenChange(false)}
            className="bg-alicerce-orange hover:bg-orange-600 text-white font-medium"
          >
            Entendi
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
