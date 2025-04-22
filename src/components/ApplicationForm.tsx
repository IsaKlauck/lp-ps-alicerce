
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const ApplicationForm: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast({
      title: "Inscrição recebida!",
      description: "Agradecemos seu interesse. Em breve você receberá um email com os próximos passos.",
      duration: 5000,
    });
  };

  return (
    <section className="py-16 bg-white" id="apply-form">
      <div className="section-container">
        <h2 className="section-title text-center">Inscreva-se Agora</h2>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Preencha o formulário abaixo para iniciar seu processo seletivo
        </p>

        <div className="max-w-2xl mx-auto bg-alicerce-lightBlue/30 p-8 rounded-xl shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" placeholder="Seu nome completo" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu.email@exemplo.com" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" placeholder="(00) 00000-0000" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cidade">Cidade / Estado</Label>
                <Input id="cidade" placeholder="Sua cidade e estado" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="formation">Formação Acadêmica</Label>
                <Input id="formation" placeholder="Curso e instituição" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="profile">Perfil de Interesse</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="qualifica">Qualifica (Professores)</SelectItem>
                    <SelectItem value="reforco">Reforço (Universitários)</SelectItem>
                    <SelectItem value="ambos">Tenho interesse em ambos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full bg-alicerce-orange hover:bg-orange-600 text-white py-6">
                ENVIAR MINHA INSCRIÇÃO
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
