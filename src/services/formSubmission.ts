// Google Apps Script Web App URL
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyD5X-_Z0I9TF8i1x-l7mNtDv3GbPtOZvfTNJ22KYgxFhcaucjVQ-LvZx-amQ3ZbtVp/exec";

export type FormattedData = {
  // Coluna B: Nome Completo
  name: string;
  // Coluna C: E-mail
  email: string;
  // Coluna D: CPF
  cpf: string;
  // Coluna E: Data de Nascimento
  birthDate: string;
  // Coluna F: Idade (calculada automaticamente)
  age: string;
  // Coluna G: Telefone
  phone: string;
  // Coluna H: Estado (UF)
  state: string;
  // Coluna I: Cidade
  city: string;
  // Coluna J: Bairro
  neighborhood: string;
  // Coluna K: Gênero
  gender: string;
  // Coluna L: Raça/Etnia
  ethnicity: string;
  // Coluna M: Deficiência
  hasDisability: string;
  // Coluna N: Descrição da deficiência
  disabilityDetails: string;
  // Coluna O: Como conheceu o Alicerce?
  howDidYouKnow: string;
  // Coluna P: Projeto de interesse
  projectInterest: string;
  // Coluna Q: Grau de Escolaridade
  education: string;
  // Coluna R: Formação
  course: string;
  // Coluna S: Modalidade
  courseType: string;
  // Coluna T: Ano de conclusão ou previsão
  completionYear: string;
  // Coluna U: Tipo de universidade
  institutionType: string;
  // Data de submissão (para controle interno)
  submissionDate: string;
};

export const submitFormData = async (formattedData: FormattedData): Promise<void> => {
  try {
    // Log the exact data being sent
    console.log('Sending form data (raw):', formattedData);
    console.log('Sending form data (stringified):', JSON.stringify(formattedData, null, 2));
    
    // Log specific fields we're concerned about
    console.log('Debug - Neighborhood:', formattedData.neighborhood);
    console.log('Debug - CourseType:', formattedData.courseType);
    console.log('Debug - CompletionYear:', formattedData.completionYear);
    console.log('Debug - InstitutionType:', formattedData.institutionType);

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
      body: JSON.stringify(formattedData),
    });
    
    console.log('Form data sent successfully');
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}; 