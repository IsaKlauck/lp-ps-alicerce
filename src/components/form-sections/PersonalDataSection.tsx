import React from 'react';
import { Control } from 'react-hook-form';
import { FormSchema } from '@/schemas/formSchema';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCepLookup } from '@/hooks/useCepLookup';
import { applyMask } from '@/utils/masks';

interface PersonalDataSectionProps {
  control: Control<FormSchema>;
  onCepBlur: (cep: string) => void;
  selectedGender: string;
  selectedEthnicity: string;
  isLoadingCep: boolean;
}

export const PersonalDataSection: React.FC<PersonalDataSectionProps> = ({
  control,
  onCepBlur,
  selectedGender,
  selectedEthnicity,
  isLoadingCep
}) => {
  const states = [
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'ES', label: 'Espírito Santo' },
    { value: 'GO', label: 'Goiás' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraima' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantins' }
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-alicerce-blue mb-6">1. Dados Pessoais</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Nome completo*</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone*</FormLabel>
              <FormControl>
                <Input 
                  placeholder="(00) 00000-0000"
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    field.onChange(applyMask(value, '(00) 00000-0000'));
                  }}
                  maxLength={15}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail*</FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="exemplo@email.com"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="cpf"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CPF*</FormLabel>
              <FormControl>
                <Input 
                  placeholder="000.000.000-00"
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    field.onChange(applyMask(value, '000.000.000-00'));
                  }}
                  maxLength={14}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="cep"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CEP*</FormLabel>
              <FormControl>
                <Input 
                  placeholder="00000-000"
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    const maskedValue = applyMask(value, '00000-000');
                    field.onChange(maskedValue);
                    if (maskedValue.length === 9) {
                      onCepBlur(maskedValue);
                    }
                  }}
                  maxLength={9}
                  disabled={isLoadingCep}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="birthDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data de Nascimento*</FormLabel>
              <FormControl>
                <Input 
                  placeholder="DD/MM/AAAA"
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    field.onChange(applyMask(value, '00/00/0000'));
                  }}
                  maxLength={10}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estado*</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um estado" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {states.map(state => (
                    <SelectItem key={state.value} value={state.value}>
                      {state.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cidade*</FormLabel>
              <FormControl>
                <Input placeholder="Digite sua cidade" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gênero*</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione seu gênero" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Feminino">Feminino</SelectItem>
                  <SelectItem value="Masculino">Masculino</SelectItem>
                  <SelectItem value="Não-binário">Não-binário</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {selectedGender === 'Outro' && (
          <FormField
            control={control}
            name="otherGender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Especifique seu gênero*</FormLabel>
                <FormControl>
                  <Input placeholder="Especifique seu gênero" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        
        <FormField
          control={control}
          name="ethnicity"
          render={({ field }) => (
            <FormItem className={selectedGender === 'Outro' ? "md:col-start-1" : ""}>
              <FormLabel>Raça/Etnia*</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione sua raça/etnia" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Preto">Preto</SelectItem>
                  <SelectItem value="Pardo">Pardo</SelectItem>
                  <SelectItem value="Branco">Branco</SelectItem>
                  <SelectItem value="Indígena">Indígena</SelectItem>
                  <SelectItem value="Amarelo">Amarelo</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {selectedEthnicity === 'Outro' && (
          <FormField
            control={control}
            name="otherEthnicity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Especifique sua raça/etnia*</FormLabel>
                <FormControl>
                  <Input placeholder="Especifique sua raça/etnia" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </div>
    </div>
  );
};
