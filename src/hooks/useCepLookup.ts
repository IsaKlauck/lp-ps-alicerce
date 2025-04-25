
import { useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { FormSchema } from '@/schemas/formSchema';
import { ViaCepResponse } from '@/types/form';

export const useCepLookup = (setValue: UseFormSetValue<FormSchema>) => {
  const [isLoadingCep, setIsLoadingCep] = useState(false);

  const lookupCep = async (cep: string) => {
    if (!cep.match(/^\d{5}-\d{3}$/)) return;

    setIsLoadingCep(true);
    try {
      const cleanCep = cep.replace(/\D/g, '');
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data = await response.json() as ViaCepResponse;

      if (!data.erro) {
        setValue('state', data.uf);
        setValue('city', data.localidade);
      }
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    } finally {
      setIsLoadingCep(false);
    }
  };

  return { lookupCep, isLoadingCep };
};
