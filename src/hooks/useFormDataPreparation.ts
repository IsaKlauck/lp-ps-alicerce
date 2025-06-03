import { FormSchema } from "@/schemas/formSchema";
import { FormattedData } from "@/services/formSubmission";

export const useFormDataPreparation = () => {
  const calculateAge = (birthDate: string): string => {
    if (!birthDate) return "";
    
    const [day, month, year] = birthDate.split('/').map(Number);
    if (!day || !month || !year) return "";
    
    const birth = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age.toString();
  };

  const prepareFormData = (data: FormSchema): FormattedData => {
    // Prepare gender field with other specification if applicable
    let genderValue = data.gender || "";
    if (data.gender === "Outro" && data.otherGender) {
      genderValue = `${data.otherGender}`;
    }

    // Prepare ethnicity field with other specification if applicable
    let ethnicityValue = data.ethnicity || "";
    if (data.ethnicity === "Outro" && data.otherEthnicity) {
      ethnicityValue = `${data.otherEthnicity}`;
    }

    // Prepare how did you know field
    let howDidYouKnowValue = data.howDidYouKnow || "";
    if (data.howDidYouKnow === "Embaixador" && data.ambassadorName) {
      howDidYouKnowValue = `Embaixador: ${data.ambassadorName}`;
    } else if (data.howDidYouKnow === "Outro" && data.otherSource) {
      howDidYouKnowValue = `${data.otherSource}`;
    }

    // Prepare project interest field
    let projectInterestValue = "";
    if (data.interestedInProject === "Sim") {
      if (data.projectUnit === "Outro" && data.otherProject) {
        projectInterestValue = `Sim: ${data.otherProject}`;
      } else {
        projectInterestValue = `Sim: ${data.projectUnit || ""}`;
      }
    } else {
      projectInterestValue = "Não";
    }

    // Prepare completion year (either completed or expected)
    let completionYearValue = "";
    if (data.completionYear) {
      completionYearValue = data.completionYear;
    } else if (data.expectedCompletionYear) {
      completionYearValue = `Previsão: ${data.expectedCompletionYear}`;
    }

    const formattedData: FormattedData = {
      PersonalDataSection: {
        name: data.name || "",
        email: data.email || "",
        cpf: data.cpf || "",
        birthDate: data.birthDate || "",
        phone: data.phone || "",
        state: data.state || "",
        city: data.city || "",
        neighborhood: data.neighborhood || "",
        gender: genderValue,
        ethnicity: ethnicityValue,
      },
      AccessibilitySection: {
        hasDisability: data.hasDisability || "Não",
        disabilityDetails: data.disabilityDetails || "",
      },
      RelationshipSection: {
        howDidYouKnow: howDidYouKnowValue,
        projectUnit: projectInterestValue,
      },
      EducationSection: {
        education: data.education || "",
        academicBackground: data.course || "",
        courseType: data.courseType || "",
        completionYear: completionYearValue,
        institutionType: data.institutionType || "",
      },
      submissionDate: new Date().toISOString(),
    };

    return formattedData;
  };

  return { prepareFormData };
}; 