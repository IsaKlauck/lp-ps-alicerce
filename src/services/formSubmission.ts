
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
  try {
    // Using no-cors mode, essential for working with public Google Apps Script
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors', // Essential for Google Apps Script
      body: JSON.stringify(formattedData),
    });
    
    // We can't read the response due to CORS restrictions with no-cors mode
    // But we log that the data was sent
    console.log('Form data sent:', formattedData);
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};


// // Google Apps Script Web App URL
// export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzKYcvGclBmr5xh1ZSj8mKSkmAItlb_qRKSVtB12wUzOh7sy4KYeOz15DGeiHDqaWO-/exec";

// export type FormattedData = {
//   PersonalDataSection: Record<string, string>;
//   AccessibilitySection: Record<string, string>;
//   RelationshipSection: Record<string, string>;
//   EducationSection: Record<string, string>;
//   submissionDate: string;
// };

// export const submitFormData = async (formattedData: FormattedData): Promise<void> => {
//   try {
//     console.log('Sending form data:', JSON.stringify(formattedData, null, 2));
//     await fetch(GOOGLE_SCRIPT_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       mode: 'no-cors',
//       body: JSON.stringify(formattedData),
//     });
//     console.log('Form data sent successfully');
//   } catch (error) {
//     console.error('Error submitting form:', error);
//     throw error;
//   }
// }; 