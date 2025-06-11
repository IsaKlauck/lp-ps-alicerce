
import React from 'react';
import { Control, useWatch } from 'react-hook-form';
import { FormSchema } from '@/schemas/formSchema';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';

interface EducationSectionProps {
  control: Control<FormSchema>;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ control }) => {
  // Use useWatch to properly track the education field changes
  const selectedEducation = useWatch({
    control,
    name: "education",
    defaultValue: ""
  });
  
  // Determine if user needs to fill higher education fields
  const requiresHigherEducationFields = [
    'Superior Concluido', 
    'Superior Cursando', 
    'Pós-graduação', 
    'Mestrado', 
    'Doutorado'
  ].includes(selectedEducation);
  
  // Determine if user is graduated or currently studying
  const isGraduated = ['Superior Concluido', 'Pós-graduação', 'Mestrado', 'Doutorado'].includes(selectedEducation);
  const isCurrentlyStudying = selectedEducation === 'Superior Cursando';

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
                  <SelectItem value="Superior Cursando">Ensino Superior Cursando</SelectItem>
                  <SelectItem value="Superior Concluido">Ensino Superior Concluído</SelectItem>
                  <SelectItem value="Pós-graduação">Pós-graduação</SelectItem>
                  <SelectItem value="Mestrado">Mestrado</SelectItem>
                  <SelectItem value="Doutorado">Doutorado</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Fields for higher education levels */}
        {requiresHigherEducationFields && (
          <>
            <FormField
              control={control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Curso*</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Ex: Direito, Administração, Engenharia Civil"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="courseType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Modalidade*</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="space-y-2"
                    >
                      {[
                        { id: 'licenciatura', label: 'Licenciatura' },
                        { id: 'bacharelado', label: 'Bacharelado' },
                        { id: 'tecnologo', label: 'Tecnólogo' },
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

            <FormField
              control={control}
              name="university"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Universidade*</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Ex: Universidade Federal de Minas Gerais"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="institutionType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de universidade*</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="space-y-2"
                    >
                      {[
                        { id: 'public', label: 'Pública' },
                        { id: 'private', label: 'Privada sem bolsa de estudos' },
                        { id: 'scholarship', label: 'Privada com bolsa de estudos' },
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

            {/* Graduation year for graduated students */}
            {isGraduated && (
              <FormField
                control={control}
                name="completionYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ano de Formação*</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ex: 2022"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* Expected completion year for current students */}
            {isCurrentlyStudying && (
              <FormField
                control={control}
                name="expectedCompletionYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Previsão de conclusão (ano)*</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ex: 2025"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
