
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

  // Verificar campos individuais
  console.log('Individual fields check:');
  Object.entries(formattedData).forEach(([key, value]) => {
    console.log(`- ${key}:`, value);
  });

  const requestBody = JSON.stringify(formattedData);
  console.log('JSON string being sent:', requestBody);
  console.log('JSON string length:', requestBody.length);

  // PRIMEIRO: Testar GET para verificar se o Apps Script está configurado
  console.log('=== TESTING APPS SCRIPT CONFIGURATION ===');
  try {
    const getResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('GET Response status:', getResponse.status);
    console.log('GET Response ok:', getResponse.ok);
    
    if (getResponse.ok) {
      const getResponseText = await getResponse.text();
      console.log('GET Response text:', getResponseText);
      
      try {
        const getResponseData = JSON.parse(getResponseText);
        console.log('GET Response parsed:', getResponseData);
        
        if (getResponseData.status === 'success') {
          console.log('✅ Apps Script está funcionando!');
          console.log('📋 Planilha ID:', getResponseData.spreadsheetId);
          console.log('📄 Aba:', getResponseData.sheetName);
          console.log('📊 Headers:', getResponseData.sheetInfo?.headers);
          console.log('📈 Última linha:', getResponseData.sheetInfo?.lastRowNumber);
        } else {
          console.log('❌ Apps Script retornou erro:', getResponseData.message);
        }
      } catch (parseError) {
        console.log('GET Response is not valid JSON');
      }
    } else {
      console.log('❌ GET Request failed with status:', getResponse.status);
    }
  } catch (getError) {
    console.log('❌ GET Request completely failed:', getError);
  }

  console.log('=== ATTEMPTING POST REQUEST ===');
  try {
    console.log('Making POST request...');
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
      body: requestBody,
    });
    
    console.log('POST request completed');
    console.log('Response status:', response.status);
    console.log('Response type:', response.type);
    
    // Com no-cors, não conseguimos ler a resposta, mas se não deu erro, assumimos sucesso
    console.log('✅ Form data sent successfully (no-cors mode)');
    
  } catch (error) {
    console.error('=== FORM SUBMISSION ERROR ===');
    console.error('Error during form submission:', error);
    console.error('Error type:', typeof error);
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
    console.error('=== END ERROR ===');
    throw new Error('Failed to submit form data');
  }
  
  console.log('=== END DEBUGGING ===');
};
