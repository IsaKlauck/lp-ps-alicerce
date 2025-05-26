
import { useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { FormSchema } from '@/schemas/formSchema';
import { ViaCepResponse } from '@/types/form';
import { toast } from 'sonner';

export const useCepLookup = (setValue: UseFormSetValue<FormSchema>) => {
  const [isLoadingCep, setIsLoadingCep] = useState(false);

  const lookupCep = async (cep: string) => {
    if (!cep.match(/^\d{5}-\d{3}$/)) return;

    setIsLoadingCep(true);
    try {
      const cleanCep = cep.replace(/\D/g, '');
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data = await response.json() as ViaCepResponse;

      if (data.erro) {
        toast.error('CEP não encontrado');
        return;
      }

      setValue('address', data.logradouro);
      setValue('neighborhood', data.bairro);
      setValue('state', data.uf);
      setValue('city', data.localidade);
      toast.success('Endereço preenchido automaticamente');
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      toast.error('Erro ao buscar CEP. Tente novamente.');
    } finally {
      setIsLoadingCep(false);
    }
  };

  return { lookupCep, isLoadingCep };
};
