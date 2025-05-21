
import * as z from 'zod';
import { validateCpfAlgorithm } from '@/utils/cpfValidator';

export const formSchema = z.object({
  name: z.string().min(3, { message: "Nome completo é obrigatório" }),
  phone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, { 
    message: "Telefone deve seguir o formato (00) 00000-0000" 
  }),
  email: z.string().email({ message: "E-mail inválido" }),
  cpf: z.string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
      message: "CPF deve seguir o formato 000.000.000-00"
    })
    .refine((cpf) => validateCpfAlgorithm(cpf), {
      message: "CPF inválido"
    }),
  cep: z.string().regex(/^\d{5}-\d{3}$/, {
    message: "CEP deve seguir o formato 00000-000"
  }),
  birthDate: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, {
    message: "Data deve seguir o formato DD/MM/AAAA"
  }),
  state: z.string().min(1, { message: "Estado é obrigatório" }),
  city: z.string().min(1, { message: "Cidade é obrigatória" }),
  gender: z.string().min(1, { message: "Gênero é obrigatório" }),
  otherGender: z.string().optional(),
  ethnicity: z.string().min(1, { message: "Raça/Etnia é obrigatória" }),
  otherEthnicity: z.string().optional(),
  hasDisability: z.string(),
  disabilityDetails: z.string().optional(),
  education: z.string().min(1, { message: "Grau de escolaridade é obrigatório" }),
  completionYear: z.string().optional(),
  expectedCompletionYear: z.string().optional(),
  academicBackground: z.string().min(3, { message: "Formação acadêmica é obrigatória" }),
  schoolType: z.array(z.string()).refine(value => value.length > 0, {
    message: "Selecione pelo menos um tipo de escola",
  }),
  howDidYouKnow: z.string().min(1, { message: "Este campo é obrigatório" }),
  otherSource: z.string().optional(),
  interestedInProject: z.string(),
  projectUnit: z.string().optional(),
  otherProject: z.string().optional(),
}).refine(
  (data) => !(data.gender === 'Outro' && !data.otherGender), {
    message: "Por favor, especifique seu gênero",
    path: ["otherGender"],
  }
).refine(
  (data) => !(data.ethnicity === 'Outro' && !data.otherEthnicity), {
    message: "Por favor, especifique sua etnia",
    path: ["otherEthnicity"],
  }
).refine(
  (data) => !(data.hasDisability === 'Sim' && !data.disabilityDetails), {
    message: "Por favor, descreva sua deficiência",
    path: ["disabilityDetails"],
  }
).refine(
  (data) => !(data.howDidYouKnow === 'Outro' && !data.otherSource), {
    message: "Por favor, especifique como conheceu o Alicerce",
    path: ["otherSource"],
  }
).refine(
  (data) => !(data.interestedInProject === 'Sim' && !data.projectUnit), {
    message: "Por favor, selecione uma unidade ou projeto",
    path: ["projectUnit"],
  }
).refine(
  (data) => !(data.projectUnit === 'Outro' && !data.otherProject), {
    message: "Por favor, especifique o projeto",
    path: ["otherProject"],
  }
).refine(
  (data) => !(data.education === 'Superior Concluido' && !data.completionYear), {
    message: "Por favor, informe o ano de conclusão",
    path: ["completionYear"],
  }
).refine(
  (data) => !(data.education === 'Superior Cursando' && !data.expectedCompletionYear), {
    message: "Por favor, informe a previsão de conclusão",
    path: ["expectedCompletionYear"],
  }
);

export type FormSchema = z.infer<typeof formSchema>;
