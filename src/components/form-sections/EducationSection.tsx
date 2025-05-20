
import React from 'react';
import { Control } from 'react-hook-form';
import { FormSchema } from '@/schemas/formSchema';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface EducationSectionProps {
  control: Control<FormSchema>;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ control }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-alicerce-blue mb-6">3. Educação</h3>
      <div className="space-y-6">
        <FormField
          control={control}
          name="education"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Grau de Escolaridade*</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione seu grau de escolaridade" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Ensino Fundamental">Ensino Fundamental</SelectItem>
                  <SelectItem value="Ensino Médio">Ensino Médio</SelectItem>
                  <SelectItem value="Superior Incompleto">Superior Incompleto</SelectItem>
                  <SelectItem value="Superior Completo">Superior Completo</SelectItem>
                  <SelectItem value="Pós-graduação">Pós-graduação</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="academicBackground"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Formação Acadêmica*</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ex: Direito - UFMG, 2020"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="schoolType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de Escola no Ensino Básico*</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => field.onChange([value])}
                  value={field.value?.[0] || ""}
                  className="space-y-2"
                >
                  {[
                    { id: 'public', label: 'Pública' },
                    { id: 'private', label: 'Particular sem bolsa' },
                    { id: 'scholarship', label: 'Particular com bolsa' },
                  ].map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.label} id={option.id} />
                      <label htmlFor={option.id} className="text-sm font-medium">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
