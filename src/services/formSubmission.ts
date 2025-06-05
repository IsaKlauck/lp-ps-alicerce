// Google Apps Script Web App URL
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby1k17NXP4px1XZjeIl_XT6Y0neRUp9uVYz6KNV6S_aHK8uAWDYAORp2emua638pjbv/exec";

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

  const requestBody = JSON.stringify(formattedData);
  console.log('JSON string being sent:', requestBody);
  console.log('JSON string length:', requestBody.length);

  try {
    console.log('Attempting normal fetch request first...');
    
    // First attempt: Normal request to get proper response
    let response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });
    
    console.log('Normal fetch - Response status:', response.status);
    console.log('Normal fetch - Response ok:', response.ok);
    
    if (response.ok) {
      const responseText = await response.text();
      console.log('Normal fetch - Response text:', responseText);
      
      try {
        const responseData = JSON.parse(responseText);
        console.log('Normal fetch - Parsed response:', responseData);
        
        if (responseData.status === 'success') {
          console.log('Form data successfully submitted via normal fetch');
          return;
        } else {
          throw new Error(`Server responded with error: ${responseData.message || 'Unknown error'}`);
        }
      } catch (parseError) {
        console.log('Response is not valid JSON, but request was successful');
        return;
      }
    } else {
      console.log('Normal fetch failed, trying with no-cors mode...');
      throw new Error('Normal fetch failed');
    }
    
  } catch (normalError) {
    console.log('Normal fetch error:', normalError);
    console.log('Attempting fallback with no-cors mode...');
    
    try {
      // Fallback: no-cors mode
      const noCorsResponse = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: requestBody,
      });
      
      console.log('No-cors fetch - Response status:', noCorsResponse.status);
      console.log('No-cors fetch - Response type:', noCorsResponse.type);
      
      // With no-cors, we can't read the response, but if no error was thrown, 
      // we assume it was successful
      console.log('Form data sent via no-cors mode (cannot verify server response)');
      
    } catch (noCorsError) {
      console.error('=== BOTH FETCH ATTEMPTS FAILED ===');
      console.error('Normal fetch error:', normalError);
      console.error('No-cors fetch error:', noCorsError);
      console.error('=== END ERROR ===');
      throw new Error('Failed to submit form data via both normal and no-cors modes');
    }
  }
  
  console.log('=== END DEBUGGING ===');
};
