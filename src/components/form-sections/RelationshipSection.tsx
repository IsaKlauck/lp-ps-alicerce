
import React from 'react';
import { Control } from 'react-hook-form';
import { FormSchema } from '@/schemas/formSchema';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';

interface RelationshipSectionProps {
  control: Control<FormSchema>;
  howDidYouKnow: string;
  interestedInProject: string;
  selectedProject: string;
}

export const RelationshipSection: React.FC<RelationshipSectionProps> = ({
  control,
  howDidYouKnow,
  interestedInProject,
  selectedProject,
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-alicerce-blue mb-6">4. Relacionamento com o Alicerce</h3>
      <div className="space-y-6">
        <FormField
          control={control}
          name="howDidYouKnow"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Como conheceu o Alicerce?*</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione como nos conheceu" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Redes Sociais">Redes sociais</SelectItem>
                  <SelectItem value="Indicação">Indicação de amigo(a) ou familiar</SelectItem>
                  <SelectItem value="Embaixador">Embaixador(a) do Alicerce</SelectItem>
                  <SelectItem value="Site">Site ou blog</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {howDidYouKnow === 'Embaixador' && (
          <FormField
            control={control}
            name="ambassadorName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do(a) embaixador(a)*</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome completo ou como a pessoa é conhecida" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {howDidYouKnow === 'Outro' && (
          <FormField
            control={control}
            name="otherSource"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Especifique como conheceu o Alicerce*</FormLabel>
                <FormControl>
                  <Input placeholder="Digite como conheceu o Alicerce" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={control}
          name="interestedInProject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tem interesse em algum projeto específico?*</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Sim" id="project-yes" />
                    <label htmlFor="project-yes">Sim</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Não" id="project-no" />
                    <label htmlFor="project-no">Não</label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {interestedInProject === 'Sim' && (
          <FormField
            control={control}
            name="projectUnit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Qual projeto tem interesse?*</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome do projeto de seu interesse" {...field} />
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
