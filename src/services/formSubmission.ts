// Google Apps Script Web App URL
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw8zS4XYrQZJQwphAvuK1OO8zqv-rivyPwWTwo2XQwLlmLIWEgb4Bn-zn5YYC8OAAl8/exec";

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
  console.log('=== FORM SUBMISSION STARTED ===');
  console.log('Data being sent:', formattedData);

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedData),
    });
    
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Request failed`);
    }
    
    const responseData = await response.json();
    console.log('Response data:', responseData);
    
    if (responseData.status !== 'success') {
      throw new Error(`Server error: ${responseData.message || 'Unknown error'}`);
    }
    
    console.log('✅ Form submitted successfully!');
    
  } catch (error) {
    console.error('=== FORM SUBMISSION ERROR ===');
    console.error('Error during form submission:', error);
    throw new Error('Failed to submit form data');
  }
  
  console.log('=== FORM SUBMISSION COMPLETED ===');
};
