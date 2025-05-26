
export type FormData = {
  name: string;
  phone: string;
  email: string;
  cpf: string;
  birthDate: string;
  cep: string;
  address?: string;
  neighborhood?: string;
  state: string;
  city: string;
  gender: string;
  otherGender?: string;
  ethnicity: string;
  otherEthnicity?: string;
  hasDisability: string;
  disabilityDetails?: string;
  education: string;
  completionYear?: string;
  expectedCompletionYear?: string;
  academicBackground: string;
  institutionType: string;
  howDidYouKnow: string;
  otherSource?: string;
  ambassadorName?: string;
  interestedInProject: string;
  projectUnit?: string;
  otherProject?: string;
};

export type ViaCepResponse = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: boolean;
};
