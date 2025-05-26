import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { formSchema, type FormSchema } from '@/schemas/formSchema';
import { PersonalDataSection } from '@/components/form-sections/PersonalDataSection';
import { AccessibilitySection } from '@/components/form-sections/AccessibilitySection';
import { EducationSection } from '@/components/form-sections/EducationSection';
import { RelationshipSection } from '@/components/form-sections/RelationshipSection';
import { useCepLookup } from '@/hooks/useCepLookup';
import { SuccessModal } from '@/components/form-sections/SuccessModal';
import { useFormDataPreparation } from '@/hooks/useFormDataPreparation';
import { submitFormData } from '@/services/formSubmission';
import { useToast } from '@/components/ui/use-toast';

const ApplicationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      cpf: '',
      cep: '',
      birthDate: '',
      state: '',
      city: '',
      gender: '',
      ethnicity: '',
      hasDisability: 'Não',
      education: '',
      academicBackground: '',
      institutionType: '',
      howDidYouKnow: '',
      interestedInProject: 'Não',
    },
  });

  const { lookupCep, isLoadingCep } = useCepLookup(form.setValue);
  const { prepareFormData } = useFormDataPreparation();
  
  const selectedGender = form.watch('gender');
  const selectedEthnicity = form.watch('ethnicity');
  const hasDisability = form.watch('hasDisability');
  const howDidYouKnow = form.watch('howDidYouKnow');
  const interestedInProject = form.watch('interestedInProject');
  const selectedProject = form.watch('projectUnit');

  const onSubmit = async (data: FormSchema) => {
    setIsSubmitting(true);
    try {
      console.log('Form data submitted:', data);
      
      // Format the data according to Google Script requirements
      const formattedData = prepareFormData(data);
      console.log('Formatted data being sent:', formattedData);
      
      // Submit the form data with JSON
      await submitFormData(formattedData);
      console.log('Form submission request completed');

      // Show success toast
      toast({
        title: "Formulário enviado",
        description: "Sua inscrição foi recebida com sucesso!",
        duration: 5000,
      });

      // Open the success modal
      setIsSuccessModalOpen(true);
      form.reset();
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      
      // Show error toast
      toast({
        title: "Erro ao enviar formulário",
        description: "Ocorreu um erro ao enviar seu formulário. Por favor, tente novamente.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCepBlur = async (cep: string) => {
    await lookupCep(cep);
  };

  return (
    <section className="py-16 bg-white" id="apply-form">
      <div className="section-container">
        <h2 className="section-title text-center mb-8">Inscreva-se Agora</h2>
        <div className="max-w-3xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <PersonalDataSection 
                control={form.control}
                onCepBlur={handleCepBlur}
                selectedGender={selectedGender}
                selectedEthnicity={selectedEthnicity}
                isLoadingCep={isLoadingCep}
              />
              
              <AccessibilitySection 
                control={form.control}
                hasDisability={hasDisability}
              />

              <EducationSection 
                control={form.control}
              />

              <RelationshipSection
                control={form.control}
                howDidYouKnow={howDidYouKnow}
                interestedInProject={interestedInProject}
                selectedProject={selectedProject}
              />
              
              <div className="pt-6 text-center">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-alicerce-orange hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-md transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'ENVIAR INSCRIÇÃO'
                  )}
                </Button>
              </div>
            </form>
          </Form>
          
          <SuccessModal 
            isOpen={isSuccessModalOpen} 
            onOpenChange={setIsSuccessModalOpen} 
          />
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
