
import React from 'react';
import { Control } from 'react-hook-form';
import { FormSchema } from '@/schemas/formSchema';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

interface AccessibilitySectionProps {
  control: Control<FormSchema>;
  hasDisability: string;
}

export const AccessibilitySection: React.FC<AccessibilitySectionProps> = ({
  control,
  hasDisability,
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-alicerce-blue mb-6">2. Acessibilidade</h3>
      <div className="space-y-6">
        <FormField
          control={control}
          name="hasDisability"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Possui deficiência?*</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Sim" id="disability-yes" />
                    <label htmlFor="disability-yes">Sim</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Não" id="disability-no" />
                    <label htmlFor="disability-no">Não</label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {hasDisability === 'Sim' && (
          <FormField
            control={control}
            name="disabilityDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descreva sua deficiência e necessidades*</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Descreva suas necessidades específicas..."
                    className="resize-none"
                    {...field}
                  />
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
