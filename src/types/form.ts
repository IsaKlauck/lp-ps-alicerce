
export type FormData = {
  name: string;
  phone: string;
  email: string;
  cpf: string;
  birthDate: string;
  cep: string;
  state: string;
  city: string;
  gender: string;
  otherGender?: string;
  ethnicity: string;
  otherEthnicity?: string;
  hasDisability: string;
  disabilityDetails?: string;
  education: string;
  academicBackground: string;
  schoolType: string[];
  howDidYouKnow: string;
  otherSource?: string;
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
