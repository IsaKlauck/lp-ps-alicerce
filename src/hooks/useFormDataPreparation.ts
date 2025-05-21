
import { FormSchema } from "@/schemas/formSchema";
import { FormattedData } from "@/services/formSubmission";

export const useFormDataPreparation = () => {
  const prepareFormData = (data: FormSchema): FormattedData => {
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
        ambassadorName: data.ambassadorName || "",
        interestedInProject: data.interestedInProject || "Não",
        projectUnit: data.projectUnit || "",
        otherProject: data.otherProject || ""
      },
      EducationSection: {
        education: data.education || "",
        completionYear: data.completionYear || "",
        expectedCompletionYear: data.expectedCompletionYear || "",
        academicBackground: data.academicBackground || "",
        institutionType: data.institutionType || "",
        schoolType: data.schoolType.join(", ") || ""
      },
      submissionDate: new Date().toISOString()
    };
  };

  return { prepareFormData };
};
