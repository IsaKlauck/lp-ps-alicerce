import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2 } from 'lucide-react';
import { fetchCities, fetchProjects } from '@/lib/api';

const formSchema = z.object({
  name: z.string().min(3, { message: "Nome completo é obrigatório" }),
  phone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, { 
    message: "Telefone deve seguir o formato (00) 00000-0000" 
  }),
  email: z.string().email({ message: "E-mail inválido" }),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
    message: "CPF deve seguir o formato 000.000.000-00"
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
  disabilityDetails: z.string().optional().refine(val => {
    return val !== undefined && val.length > 0;
  }, {
    message: "Este campo é obrigatório se você possui deficiência",
    path: ["disabilityDetails"],
  }),
  
  education: z.string().min(1, { message: "Grau de escolaridade é obrigatório" }),
  academicBackground: z.string().min(3, { message: "Formação acadêmica é obrigatória" }),
  schoolType: z.array(z.string()).refine(value => value.length > 0, {
    message: "Selecione pelo menos um tipo de escola",
  }),
  
  howDidYouKnow: z.string().min(1, { message: "Este campo é obrigatório" }),
  otherSource: z.string().optional(),
  interestedInProject: z.string(),
  projectUnit: z.string().optional().refine(val => {
    return val !== undefined && val.length > 0;
  }, {
    message: "Selecione uma unidade ou projeto",
    path: ["projectUnit"],
  }),
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
);

const applyMask = (value: string, mask: string): string => {
  let result = '';
  let valueIndex = 0;
  
  for (let i = 0; i < mask.length && valueIndex < value.length; i++) {
    if (mask[i] === '0') {
      if (/\d/.test(value[valueIndex])) {
        result += value[valueIndex++];
      } else {
        valueIndex++;
        i--;
      }
    } else {
      result += mask[i];
    }
  }
  
  return result;
};

const ApplicationForm: React.FC = () => {
  const [cities, setCities] = useState<{ id: number; name: string }[]>([]);
  const [projects, setProjects] = useState<{ id: number; name: string; state: string }[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      cpf: '',
      birthDate: '',
      state: '',
      city: '',
      gender: '',
      ethnicity: '',
      hasDisability: 'Não',
      education: '',
      academicBackground: '',
      schoolType: [],
      howDidYouKnow: '',
      interestedInProject: 'Não',
    },
  });

  const selectedState = form.watch('state');
  const selectedGender = form.watch('gender');
  const selectedEthnicity = form.watch('ethnicity');
  const hasDisability = form.watch('hasDisability');
  const howDidYouKnow = form.watch('howDidYouKnow');
  const interestedInProject = form.watch('interestedInProject');
  const selectedProject = form.watch('projectUnit');

  useEffect(() => {
    if (selectedState) {
      const loadCities = async () => {
        try {
          const citiesData = await fetchCities(selectedState);
          setCities(citiesData || []);
          form.setValue('city', '');
        } catch (error) {
          console.error('Erro ao carregar cidades:', error);
          toast.error('Não foi possível carregar as cidades.');
        }
      };
      
      loadCities();
    }
  }, [selectedState, form]);

  useEffect(() => {
    if (selectedState) {
      const loadProjects = async () => {
        try {
          const projectsData = await fetchProjects(selectedState);
          setProjects(projectsData || []);
        } catch (error) {
          console.error('Erro ao carregar projetos:', error);
        }
      };
      
      loadProjects();
    }
  }, [selectedState]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      console.log('Form data submitted:', data);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Inscrição realizada com sucesso! Em breve entraremos em contato.');
      form.reset();
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast.error('Ocorreu um erro ao enviar sua inscrição. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const states = [
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'ES', label: 'Espírito Santo' },
    { value: 'GO', label: 'Goiás' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraima' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantins' }
  ];

  return (
    <section className="py-16 bg-white" id="apply-form">
      <div className="section-container">
        <h2 className="section-title text-center mb-8">Inscreva-se Agora</h2>
        <div className="max-w-3xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-alicerce-blue mb-6">1. Dados Pessoais</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel>Nome completo*</FormLabel>
                        <FormControl>
                          <Input placeholder="Digite seu nome completo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone*</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="(00) 00000-0000"
                            {...field}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '');
                              field.onChange(applyMask(value, '(00) 00000-0000'));
                            }}
                            maxLength={15}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail*</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="exemplo@email.com"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="cpf"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CPF*</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="000.000.000-00"
                            {...field}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '');
                              field.onChange(applyMask(value, '000.000.000-00'));
                            }}
                            maxLength={14}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="birthDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Data de Nascimento*</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="DD/MM/AAAA"
                            {...field}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '');
                              field.onChange(applyMask(value, '00/00/0000'));
                            }}
                            maxLength={10}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estado*</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione um estado" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {states.map(state => (
                              <SelectItem key={state.value} value={state.value}>
                                {state.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cidade*</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          value={field.value}
                          disabled={!selectedState || cities.length === 0}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={
                                !selectedState 
                                  ? "Selecione um estado primeiro" 
                                  : cities.length === 0
                                  ? "Carregando cidades..."
                                  : "Selecione uma cidade"
                              } />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {cities.map(city => (
                              <SelectItem key={city.id} value={city.name}>
                                {city.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gênero*</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione seu gênero" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Feminino">Feminino</SelectItem>
                            <SelectItem value="Masculino">Masculino</SelectItem>
                            <SelectItem value="Não-binário">Não-binário</SelectItem>
                            <SelectItem value="Outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {selectedGender === 'Outro' && (
                    <FormField
                      control={form.control}
                      name="otherGender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Especifique seu gênero*</FormLabel>
                          <FormControl>
                            <Input placeholder="Especifique seu gênero" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  
                  <FormField
                    control={form.control}
                    name="ethnicity"
                    render={({ field }) => (
                      <FormItem className={selectedGender === 'Outro' ? "md:col-start-1" : ""}>
                        <FormLabel>Raça/Etnia*</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione sua raça/etnia" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Preto">Preto</SelectItem>
                            <SelectItem value="Pardo">Pardo</SelectItem>
                            <SelectItem value="Branco">Branco</SelectItem>
                            <SelectItem value="Indígena">Indígena</SelectItem>
                            <SelectItem value="Amarelo">Amarelo</SelectItem>
                            <SelectItem value="Outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {selectedEthnicity === 'Outro' && (
                    <FormField
                      control={form.control}
                      name="otherEthnicity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Especifique sua raça/etnia*</FormLabel>
                          <FormControl>
                            <Input placeholder="Especifique sua raça/etnia" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-alicerce-blue mb-6">2. Acessibilidade</h3>
                
                <FormField
                  control={form.control}
                  name="hasDisability"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Possui deficiência?*</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex flex-row space-x-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Sim" id="disability-yes" />
                            <label htmlFor="disability-yes" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Sim
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Não" id="disability-no" />
                            <label htmlFor="disability-no" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Não
                            </label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {hasDisability === 'Sim' && (
                  <FormField
                    control={form.control}
                    name="disabilityDetails"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel>Descreva sua deficiência e necessidades*</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descreva sua deficiência e quais adaptações precisamos providenciar"
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-alicerce-blue mb-6">3. Educação</h3>
                <div className="grid grid-cols-1 gap-6">
                  
                  <FormField
                    control={form.control}
                    name="education"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Grau de Escolaridade*</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione seu grau de escolaridade" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Ensino Fundamental">Ensino Fundamental</SelectItem>
                            <SelectItem value="Ensino Médio">Ensino Médio</SelectItem>
                            <SelectItem value="Superior Incompleto">Superior Incompleto</SelectItem>
                            <SelectItem value="Superior Completo">Superior Completo</SelectItem>
                            <SelectItem value="Pós-graduação">Pós-graduação</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="academicBackground"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Formação Acadêmica*</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Ex: Direito - UFMG, 2020"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="schoolType"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel>Tipo de Escola no Ensino Básico*</FormLabel>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <FormField
                            control={form.control}
                            name="schoolType"
                            render={({ field }) => {
                              return (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes('Pública')}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, 'Pública'])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== 'Pública'
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Pública
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                          <FormField
                            control={form.control}
                            name="schoolType"
                            render={({ field }) => {
                              return (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes('Particular sem bolsa')}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, 'Particular sem bolsa'])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== 'Particular sem bolsa'
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Particular sem bolsa
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                          <FormField
                            control={form.control}
                            name="schoolType"
                            render={({ field }) => {
                              return (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes('Particular com bolsa')}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, 'Particular com bolsa'])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== 'Particular com bolsa'
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Particular com bolsa
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-alicerce-blue mb-6">4. Relacionamento com o Alicerce</h3>
                <div className="grid grid-cols-1 gap-6">
                  
                  <FormField
                    control={form.control}
                    name="howDidYouKnow"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Como conheceu o Alicerce?*</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Redes Sociais">Redes Sociais</SelectItem>
                            <SelectItem value="Indicação">Indicação</SelectItem>
                            <SelectItem value="Site">Site</SelectItem>
                            <SelectItem value="Evento">Evento</SelectItem>
                            <SelectItem value="Outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {howDidYouKnow === 'Outro' && (
                    <FormField
                      control={form.control}
                      name="otherSource"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Especifique como conheceu o Alicerce*</FormLabel>
                          <FormControl>
                            <Input placeholder="Especifique como nos conheceu" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  
                  <FormField
                    control={form.control}
                    name="interestedInProject"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Tem interesse em algum projeto?*</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex flex-row space-x-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="Sim" id="project-yes" />
                              <label htmlFor="project-yes" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Sim
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="Não" id="project-no" />
                              <label htmlFor="project-no" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Não
                              </label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {interestedInProject === 'Sim' && (
                    <FormField
                      control={form.control}
                      name="projectUnit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Selecione a unidade/projeto*</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            value={field.value}
                            disabled={!selectedState || projects.length === 0}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={
                                  !selectedState 
                                    ? "Selecione um estado primeiro" 
                                    : projects.length === 0
                                    ? "Sem projetos disponíveis neste estado"
                                    : "Selecione um projeto"
                                } />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {projects.map(project => (
                                <SelectItem key={project.id} value={project.name}>
                                  {project.name}
                                </SelectItem>
                              ))}
                              <SelectItem value="Outro">Outro</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  
                  {interestedInProject === 'Sim' && selectedProject === 'Outro' && (
                    <FormField
                      control={form.control}
                      name="otherProject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Especifique o projeto*</FormLabel>
                          <FormControl>
                            <Input placeholder="Especifique o projeto" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>
              </div>
              
              <div className="pt-6 text-center">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-alicerce-orange hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-md transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'ENVIAR INSCRIÇÃO'
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
