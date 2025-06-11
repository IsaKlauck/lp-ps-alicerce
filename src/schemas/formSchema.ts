
import { z } from 'zod';

const validateAge = (birthDate: string): boolean => {
  if (!birthDate) return false;
  
  const [day, month, year] = birthDate.split('/').map(Number);
  if (!day || !month || !year) return false;
  
  const birth = new Date(year, month - 1, day);
  const today = new Date();
  const age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    return age - 1 >= 16;
  }
  
  return age >= 16;
};

export const formSchema = z.object({
  // Dados Pessoais
  name: z.string().min(1, "Nome é obrigatório"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  email: z.string().email("E-mail inválido"),
  cpf: z.string().min(1, "CPF é obrigatório"),
  cep: z.string().min(1, "CEP é obrigatório"),
  address: z.string().optional(),
  neighborhood: z.string().optional(),
  birthDate: z.string()
    .min(1, "Data de nascimento é obrigatória")
    .refine(validateAge, "Você deve ter pelo menos 16 anos"),
  state: z.string().min(1, "Estado é obrigatório"),
  city: z.string().min(1, "Cidade é obrigatória"),
  gender: z.string().min(1, "Gênero é obrigatório"),
  otherGender: z.string().optional(),
  ethnicity: z.string().min(1, "Raça/Etnia é obrigatória"),
  otherEthnicity: z.string().optional(),
  
  // Acessibilidade
  hasDisability: z.string(),
  disabilityDetails: z.string().optional(),
  
  // Educação
  education: z.string().min(1, "Escolaridade é obrigatória"),
  course: z.string().optional(),
  courseType: z.string().optional(),
  university: z.string().optional(),
  completionYear: z.string().optional(),
  expectedCompletionYear: z.string().optional(),
  academicBackground: z.string().optional(),
  institutionType: z.string().optional(),
  
  // Relacionamento
  howDidYouKnow: z.string().min(1, "Como conheceu o Alicerce é obrigatório"),
  otherSource: z.string().optional(),
  ambassadorName: z.string().optional(),
  interestedInProject: z.string(),
  projectUnit: z.string().optional(),
  otherProject: z.string().optional(),
}).refine((data) => {
  if (data.gender === "Outro" && !data.otherGender) {
    return false;
  }
  return true;
}, {
  message: "Especifique seu gênero",
  path: ["otherGender"]
}).refine((data) => {
  if (data.ethnicity === "Outro" && !data.otherEthnicity) {
    return false;
  }
  return true;
}, {
  message: "Especifique sua raça/etnia",
  path: ["otherEthnicity"]
}).refine((data) => {
  if (data.hasDisability === "Sim" && !data.disabilityDetails) {
    return false;
  }
  return true;
}, {
  message: "Descreva sua deficiência",
  path: ["disabilityDetails"]
}).refine((data) => {
  if (data.howDidYouKnow === "Outro" && !data.otherSource) {
    return false;
  }
  return true;
}, {
  message: "Especifique como conheceu o Alicerce",
  path: ["otherSource"]
}).refine((data) => {
  if (data.howDidYouKnow === "Embaixador" && !data.ambassadorName) {
    return false;
  }
  return true;
}, {
  message: "Nome do embaixador é obrigatório",
  path: ["ambassadorName"]
}).refine((data) => {
  if (data.interestedInProject === "Sim" && !data.projectUnit) {
    return false;
  }
  return true;
}, {
  message: "Selecione uma unidade do projeto",
  path: ["projectUnit"]
}).refine((data) => {
  if (data.projectUnit === "Outro" && !data.otherProject) {
    return false;
  }
  return true;
}, {
  message: "Especifique o projeto",
  path: ["otherProject"]
}).refine((data) => {
  // Validate education fields based on education level
  const requiresHigherEducationFields = [
    'Superior Concluido', 
    'Superior Cursando', 
    'Pós-graduação', 
    'Mestrado', 
    'Doutorado'
  ].includes(data.education);
  
  if (requiresHigherEducationFields) {
    // Curso é obrigatório para todos os níveis superiores
    if (!data.course || data.course.trim() === '') {
      return false;
    }
    
    // Modalidade é obrigatória para todos os níveis superiores
    if (!data.courseType) {
      return false;
    }
    
    // Universidade é obrigatória para todos os níveis superiores
    if (!data.university || data.university.trim() === '') {
      return false;
    }
    
    // Tipo de universidade é obrigatório para todos os níveis superiores
    if (!data.institutionType) {
      return false;
    }
    
    // Ano de conclusão específico por nível
    const isGraduated = ['Superior Concluido', 'Pós-graduação', 'Mestrado', 'Doutorado'].includes(data.education);
    const isCurrentlyStudying = data.education === 'Superior Cursando';
    
    if (isGraduated && (!data.completionYear || data.completionYear.trim() === '')) {
      return false;
    }
    
    if (isCurrentlyStudying && (!data.expectedCompletionYear || data.expectedCompletionYear.trim() === '')) {
      return false;
    }
  }
  
  return true;
}, {
  message: "Preencha todos os campos obrigatórios de educação",
  path: ["course"]
});

export type FormSchema = z.infer<typeof formSchema>;
