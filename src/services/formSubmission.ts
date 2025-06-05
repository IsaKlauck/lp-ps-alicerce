
// Google Apps Script Web App URL
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwoggMPtk0cnGUzeD97sncp_iMVhxAExOcB5pyaheUiKEQnGpCw7Ax0PulTyrmR7mVP/exec";

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
  console.log('=== DEBUGGING FORM SUBMISSION ===');
  console.log('Google Script URL:', GOOGLE_SCRIPT_URL);
  console.log('Data being sent:', JSON.stringify(formattedData, null, 2));
  
  // Log each field individually for debugging
  console.log('Individual fields check:');
  console.log('- name:', formattedData.name);
  console.log('- email:', formattedData.email);
  console.log('- cpf:', formattedData.cpf);
  console.log('- birthDate:', formattedData.birthDate);
  console.log('- age:', formattedData.age);
  console.log('- phone:', formattedData.phone);
  console.log('- state:', formattedData.state);
  console.log('- city:', formattedData.city);
  console.log('- neighborhood:', formattedData.neighborhood);
  console.log('- gender:', formattedData.gender);
  console.log('- ethnicity:', formattedData.ethnicity);
  console.log('- hasDisability:', formattedData.hasDisability);
  console.log('- disabilityDetails:', formattedData.disabilityDetails);
  console.log('- howDidYouKnow:', formattedData.howDidYouKnow);
  console.log('- projectInterest:', formattedData.projectInterest);
  console.log('- education:', formattedData.education);
  console.log('- course:', formattedData.course);
  console.log('- courseType:', formattedData.courseType);
  console.log('- completionYear:', formattedData.completionYear);
  console.log('- institutionType:', formattedData.institutionType);
  console.log('- submissionDate:', formattedData.submissionDate);

  try {
    console.log('Making fetch request...');
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors', // Essential for Google Apps Script
      body: JSON.stringify(formattedData),
    });
    
    console.log('Fetch request completed');
    console.log('Response status:', response.status);
    console.log('Response type:', response.type);
    
    // Log the exact JSON being sent
    const jsonString = JSON.stringify(formattedData);
    console.log('JSON string being sent:', jsonString);
    console.log('JSON string length:', jsonString.length);
    
    // We can't read the response due to CORS restrictions with no-cors mode
    // But we log that the data was sent
    console.log('Form data sent successfully');
    console.log('=== END DEBUGGING ===');
  } catch (error) {
    console.error('=== FETCH ERROR ===');
    console.error('Error details:', error);
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    console.error('=== END ERROR ===');
    throw error;
  }
};
