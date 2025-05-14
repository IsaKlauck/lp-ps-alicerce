
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/components/ui/use-toast';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { formSchema, type FormSchema } from '@/schemas/formSchema';
import { PersonalDataSection } from '@/components/form-sections/PersonalDataSection';
import { AccessibilitySection } from '@/components/form-sections/AccessibilitySection';
import { EducationSection } from '@/components/form-sections/EducationSection';
import { RelationshipSection } from '@/components/form-sections/RelationshipSection';
import { useCepLookup } from '@/hooks/useCepLookup';

// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/a/macros/alicerceedu.com.br/s/AKfycby_FyYviaEedOlCjsLF0LDUReAlHTrNy8kt60DExEdlFeEI7T5ZQ79jAs9e9JG3t_9O/exec";

const ApplicationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
      schoolType: [],
      howDidYouKnow: '',
      interestedInProject: 'Não',
    },
  });

  const { lookupCep, isLoadingCep } = useCepLookup(form.setValue);
  
  const selectedGender = form.watch('gender');
  const selectedEthnicity = form.watch('ethnicity');
  const hasDisability = form.watch('hasDisability');
  const howDidYouKnow = form.watch('howDidYouKnow');
  const interestedInProject = form.watch('interestedInProject');
  const selectedProject = form.watch('projectUnit');

  const prepareFormData = (data: FormSchema) => {
    return {
      PersonalDataSection: {
        name: data.name || "",
        email: data.email || "",
        cpf: data.cpf || "",
        birthDate: data.birthDate || "",
        phone: data.phone || "",
        cep: data.cep || "",
        state: data.state || "",
        city: data.city || "",
        gender: data.gender || "",
        ethnicity: data.ethnicity || ""
      },
      AccessibilitySection: {
        hasDisability: data.hasDisability || "Não",
        disabilityDetails: data.disabilityDetails || ""
      },
      RelationshipSection: {
        howDidYouKnow: data.howDidYouKnow || "",
        interestedInProject: data.interestedInProject || "Não",
        projectUnit: data.projectUnit || ""
      },
      EducationSection: {
        education: data.education || "",
        academicBackground: data.academicBackground || "",
        schoolType: data.schoolType.join(", ") || ""
      },
      submissionDate: new Date().toISOString()
    };
  };

  const onSubmit = async (data: FormSchema) => {
    setIsSubmitting(true);
    try {
      console.log('Form data submitted:', data);
      
      // Format the data according to Google Script requirements
      const formattedData = prepareFormData(data);
      console.log('Formatted data:', formattedData);
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // Required for cross-origin requests
        body: JSON.stringify(formattedData),
      });

      toast({
        title: "Sucesso!",
        description: "Inscrição realizada com sucesso! Em breve entraremos em contato.",
      });
      form.reset();
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar sua inscrição. Por favor, tente novamente.",
        variant: "destructive",
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
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
