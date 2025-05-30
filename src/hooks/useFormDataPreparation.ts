
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

  const prepareFormData = (data: FormSchema): any => {
    console.log('Form data being prepared:', data);
    
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
    let projectUnitValue = "";
    if (data.interestedInProject === "Sim") {
      if (data.projectUnit === "Outro" && data.otherProject) {
        projectUnitValue = data.otherProject;
      } else {
        projectUnitValue = data.projectUnit || "";
      }
    }

    // Prepare completion year (either completed or expected)
    let completionYearValue = "";
    if (data.completionYear) {
      completionYearValue = data.completionYear;
    } else if (data.expectedCompletionYear) {
      completionYearValue = data.expectedCompletionYear;
    }

    // Format data according to Google Apps Script structure
    const formattedData = {
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
        ethnicity: ethnicityValue
      },
      AccessibilitySection: {
        hasDisability: data.hasDisability || "Não",
        disabilityDetails: data.disabilityDetails || ""
      },
      EducationSection: {
        education: data.education || "",
        course: data.course || "",
        courseType: data.courseType || "",
        university: data.university || "",
        completionYear: completionYearValue,
        institutionType: data.institutionType || "",
        academicBackground: data.course || "" // Usando course como academicBackground
      },
      RelationshipSection: {
        howDidYouKnow: howDidYouKnowValue,
        projectUnit: projectUnitValue
      },
      submissionDate: new Date().toISOString()
    };

    console.log('Formatted data for Google Apps Script:', formattedData);
    console.log('Neighborhood value:', formattedData.PersonalDataSection.neighborhood);
    console.log('Course type value:', formattedData.EducationSection.courseType);
    console.log('Completion year value:', formattedData.EducationSection.completionYear);
    console.log('Institution type value:', formattedData.EducationSection.institutionType);

    return formattedData;
  };

  return { prepareFormData };
};
