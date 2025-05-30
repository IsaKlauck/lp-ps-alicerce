
import { FormSchema } from "@/schemas/formSchema";
import { FormattedData } from "@/services/formSubmission";

export const useFormDataPreparation = () => {
  const prepareFormData = (data: FormSchema): FormattedData => {
    // Prepare the howDidYouKnow field with ambassador name if applicable
    let howDidYouKnowValue = data.howDidYouKnow || "";
    if (data.howDidYouKnow === "Embaixador" && data.ambassadorName) {
      howDidYouKnowValue = `Embaixador; ${data.ambassadorName}`;
    }

    // Prepare gender field with other specification if applicable
    let genderValue = data.gender || "";
    if (data.gender === "Outro" && data.otherGender) {
      genderValue = `Outro; ${data.otherGender}`;
    }

    // Prepare ethnicity field with other specification if applicable
    let ethnicityValue = data.ethnicity || "";
    if (data.ethnicity === "Outro" && data.otherEthnicity) {
      ethnicityValue = `Outro; ${data.otherEthnicity}`;
    }

    // Prepare project interest field with other specification if applicable
    let projectUnitValue = data.projectUnit || "";
    if (data.projectUnit === "Outro" && data.otherProject) {
      projectUnitValue = `Outro; ${data.otherProject}`;
    }

    // Prepare education source field with other specification if applicable
    let howDidYouKnowSourceValue = data.howDidYouKnow || "";
    if (data.howDidYouKnow === "Outro" && data.otherSource) {
      howDidYouKnowSourceValue = `Outro; ${data.otherSource}`;
    }

    return {
      PersonalDataSection: {
        name: data.name || "",
        email: data.email || "",
        cpf: data.cpf || "",
        birthDate: data.birthDate || "",
        phone: data.phone || "",
        cep: data.cep || "",
        address: data.address || "",
        neighborhood: data.neighborhood || "", // Garantindo que bairro seja enviado (coluna J)
        state: data.state || "",
        city: data.city || "",
        gender: genderValue,
        otherGender: data.otherGender || "",
        ethnicity: ethnicityValue,
        otherEthnicity: data.otherEthnicity || ""
      },
      AccessibilitySection: {
        hasDisability: data.hasDisability || "Não",
        disabilityDetails: data.disabilityDetails || ""
      },
      RelationshipSection: {
        howDidYouKnow: data.howDidYouKnow === "Embaixador" ? howDidYouKnowValue : (data.howDidYouKnow === "Outro" ? howDidYouKnowSourceValue : data.howDidYouKnow || ""),
        otherSource: data.otherSource || "",
        ambassadorName: data.ambassadorName || "",
        interestedInProject: data.interestedInProject || "Não",
        projectUnit: projectUnitValue,
        otherProject: data.otherProject || ""
      },
      EducationSection: {
        education: data.education || "",
        course: data.course || "",
        courseType: data.courseType || "",
        university: data.university || "",
        completionYear: data.completionYear || "",
        expectedCompletionYear: data.expectedCompletionYear || "",
        academicBackground: data.academicBackground || "",
        institutionType: data.institutionType || ""
      },
      submissionDate: new Date().toISOString()
    };
  };

  return { prepareFormData };
};
