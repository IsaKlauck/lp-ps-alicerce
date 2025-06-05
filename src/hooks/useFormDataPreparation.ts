
import { FormSchema } from "@/schemas/formSchema";
import { FormattedData } from "@/services/formSubmission";

export const useFormDataPreparation = () => {
  const calculateAge = (birthDate: string): string => {
    console.log('Calculating age for birthDate:', birthDate);
    
    if (!birthDate) {
      console.log('No birthDate provided, returning empty string');
      return "";
    }
    
    const [day, month, year] = birthDate.split('/').map(Number);
    if (!day || !month || !year) {
      console.log('Invalid birthDate format, returning empty string');
      return "";
    }
    
    const birth = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    console.log('Calculated age:', age);
    return age.toString();
  };

  const prepareFormData = (data: FormSchema): FormattedData => {
    console.log('=== PREPARING FORM DATA ===');
    console.log('Raw form data received:', JSON.stringify(data, null, 2));
    
    // Prepare gender field with other specification if applicable
    let genderValue = data.gender || "";
    if (data.gender === "Outro" && data.otherGender) {
      genderValue = `${data.otherGender}`;
    }
    console.log('Processed gender:', genderValue);

    // Prepare ethnicity field with other specification if applicable
    let ethnicityValue = data.ethnicity || "";
    if (data.ethnicity === "Outro" && data.otherEthnicity) {
      ethnicityValue = `${data.otherEthnicity}`;
    }
    console.log('Processed ethnicity:', ethnicityValue);

    // Prepare how did you know field
    let howDidYouKnowValue = data.howDidYouKnow || "";
    if (data.howDidYouKnow === "Embaixador" && data.ambassadorName) {
      howDidYouKnowValue = `Embaixador: ${data.ambassadorName}`;
    } else if (data.howDidYouKnow === "Outro" && data.otherSource) {
      howDidYouKnowValue = `${data.otherSource}`;
    }
    console.log('Processed howDidYouKnow:', howDidYouKnowValue);

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
    console.log('Processed projectInterest:', projectInterestValue);

    // Prepare completion year (either completed or expected)
    let completionYearValue = "";
    if (data.completionYear) {
      completionYearValue = data.completionYear;
    } else if (data.expectedCompletionYear) {
      completionYearValue = `Previsão: ${data.expectedCompletionYear}`;
    }
    console.log('Processed completionYear:', completionYearValue);

    // Calculate age
    const calculatedAge = calculateAge(data.birthDate || "");

    const formattedData: FormattedData = {
      // Coluna B: Nome Completo
      name: data.name || "",
      // Coluna C: E-mail
      email: data.email || "",
      // Coluna D: CPF
      cpf: data.cpf || "",
      // Coluna E: Data de Nascimento
      birthDate: data.birthDate || "",
      // Coluna F: Idade (calculada automaticamente)
      age: calculatedAge,
      // Coluna G: Telefone
      phone: data.phone || "",
      // Coluna H: Estado (UF)
      state: data.state || "",
      // Coluna I: Cidade
      city: data.city || "",
      // Coluna J: Bairro
      neighborhood: data.neighborhood || "",
      // Coluna K: Gênero
      gender: genderValue,
      // Coluna L: Raça/Etnia
      ethnicity: ethnicityValue,
      // Coluna M: Deficiência
      hasDisability: data.hasDisability || "Não",
      // Coluna N: Descrição da deficiência
      disabilityDetails: data.disabilityDetails || "",
      // Coluna O: Como conheceu o Alicerce?
      howDidYouKnow: howDidYouKnowValue,
      // Coluna P: Projeto de interesse
      projectInterest: projectInterestValue,
      // Coluna Q: Grau de Escolaridade
      education: data.education || "",
      // Coluna R: Formação
      course: data.course || "",
      // Coluna S: Modalidade
      courseType: data.courseType || "",
      // Coluna T: Ano de conclusão ou previsão
      completionYear: completionYearValue,
      // Coluna U: Tipo de universidade
      institutionType: data.institutionType || "",
      // Data de submissão (para controle interno)
      submissionDate: new Date().toISOString()
    };

    console.log('=== FINAL FORMATTED DATA ===');
    console.log('Formatted data:', JSON.stringify(formattedData, null, 2));
    
    // Validate that all expected fields are present
    const requiredFields = ['name', 'email', 'cpf', 'birthDate', 'phone', 'state', 'city'];
    const missingFields = requiredFields.filter(field => !formattedData[field as keyof FormattedData]);
    
    if (missingFields.length > 0) {
      console.warn('Missing required fields:', missingFields);
    } else {
      console.log('All required fields are present');
    }
    
    console.log('=== END FORM DATA PREPARATION ===');

    return formattedData;
  };

  return { prepareFormData };
};
