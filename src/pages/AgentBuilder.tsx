import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowLeft, Bot, Building2, MessageSquare, BookOpen, Settings2, Save, RotateCcw, FlaskConical } from "lucide-react";
import { toast } from "sonner";

// Schema de validação com Zod
const agentFormSchema = z.object({
  // 1) Dados do Cliente / Tenant
  tenantName: z.string().min(2, "Nome da empresa deve ter pelo menos 2 caracteres"),
  whatsappNumber: z.string()
    .min(10, "Número do WhatsApp deve ter pelo menos 10 dígitos")
    .regex(/^[\d+]+$/, "Número deve conter apenas dígitos ou começar com +"),
  tenantIdentifier: z.string().optional(),

  // 2) Persona e Comportamento do Agente
  agentName: z.string().min(2, "Nome do agente deve ter pelo menos 2 caracteres"),
  persona: z.string().min(10, "Descreva a persona com pelo menos 10 caracteres"),
  tone: z.string().min(1, "Selecione um tom de voz"),
  goal: z.string().min(10, "Descreva o objetivo com pelo menos 10 caracteres"),
  welcomeMessage: z.string().min(10, "Mensagem de boas-vindas deve ter pelo menos 10 caracteres"),

  // 3) Regras e Conhecimento
  rules: z.string().optional(),
  knowledgeBase: z.string().optional(),
  maxCharacters: z.coerce.number().min(50).max(4000).optional(),

  // 4) Configurações Técnicas
  model: z.string().optional(),
  temperature: z.number().min(0).max(1).optional(),
  evolutionInstance: z.string().min(1, "ID da instância Evolution é obrigatório"),
  evolutionApiKey: z.string().optional(),
  evolutionServerUrl: z.string()
    .url("URL do servidor Evolution deve ser válida")
    .min(1, "URL do servidor Evolution é obrigatória"),
});

type AgentFormData = z.infer<typeof agentFormSchema>;

const toneOptions = [
  { value: "profissional", label: "Profissional" },
  { value: "acolhedor", label: "Acolhedor" },
  { value: "descontraido", label: "Descontraído" },
  { value: "formal", label: "Formal" },
  { value: "amigavel", label: "Amigável" },
];

const modelOptions = [
  { value: "gpt-4.1-mini", label: "GPT-4.1 Mini" },
  { value: "gpt-4.1", label: "GPT-4.1" },
  { value: "gpt-4.1-pro", label: "GPT-4.1 Pro" },
];

const AgentBuilder = () => {
  const form = useForm<AgentFormData>({
    resolver: zodResolver(agentFormSchema),
    defaultValues: {
      tenantName: "",
      whatsappNumber: "",
      tenantIdentifier: "",
      agentName: "",
      persona: "",
      tone: "",
      goal: "",
      welcomeMessage: "",
      rules: "",
      knowledgeBase: "",
      maxCharacters: 500,
      model: "gpt-4.1-mini",
      temperature: 0.7,
      evolutionInstance: "",
      evolutionApiKey: "",
      evolutionServerUrl: "",
    },
  });

  const onSubmit = (data: AgentFormData) => {
    // TODO: Aqui será feita a integração com o backend (n8n/ERP)
    // Por enquanto apenas logamos os dados e mostramos um toast
    console.log("Dados do agente validados:", data);
    
    // Simulação de salvamento
    toast.success("Configuração salva (simulação)", {
      description: "Os dados foram validados. Integração com backend será implementada.",
    });
  };

  const handleReset = () => {
    form.reset();
    toast.info("Formulário resetado");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header simplificado */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/images/logo-mentoark.png" 
              alt="MentoArk" 
              className="h-8 md:h-10 object-contain"
            />
          </Link>
          
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar ao site
            </Button>
          </Link>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Título da página */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <Bot className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Configuração do Agente de Atendimento
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Configure como sua IA de atendimento via WhatsApp se comporta. Essas informações serão usadas 
            para personalizar as respostas automáticas do seu agente no n8n / Evolution API.
          </p>
        </div>

        {/* Formulário com Tabs */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-4xl mx-auto">
            <Tabs defaultValue="tenant" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-6">
                <TabsTrigger value="tenant" className="gap-2 text-xs sm:text-sm">
                  <Building2 className="h-4 w-4 hidden sm:block" />
                  Empresa
                </TabsTrigger>
                <TabsTrigger value="persona" className="gap-2 text-xs sm:text-sm">
                  <MessageSquare className="h-4 w-4 hidden sm:block" />
                  Persona
                </TabsTrigger>
                <TabsTrigger value="knowledge" className="gap-2 text-xs sm:text-sm">
                  <BookOpen className="h-4 w-4 hidden sm:block" />
                  Conhecimento
                </TabsTrigger>
                <TabsTrigger value="advanced" className="gap-2 text-xs sm:text-sm">
                  <Settings2 className="h-4 w-4 hidden sm:block" />
                  Avançado
                </TabsTrigger>
              </TabsList>

              {/* Tab 1: Dados do Cliente / Tenant */}
              <TabsContent value="tenant">
                <Card className="bg-card/50 border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      Dados do Cliente / Tenant
                    </CardTitle>
                    <CardDescription>
                      Informações básicas da sua empresa para identificação no sistema
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="tenantName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome da Empresa *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: MentoArk" {...field} />
                          </FormControl>
                          <FormDescription>
                            Nome que será usado para identificar sua conta
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="whatsappNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Número do WhatsApp *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: +5511999999999" {...field} />
                          </FormControl>
                          <FormDescription>
                            Número principal conectado à Evolution API
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="tenantIdentifier"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Identificador do Tenant</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: mentoark-001" {...field} />
                          </FormControl>
                          <FormDescription>
                            ID único usado internamente no backend (opcional)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Tab 2: Persona e Comportamento do Agente */}
              <TabsContent value="persona">
                <Card className="bg-card/50 border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Persona e Comportamento
                    </CardTitle>
                    <CardDescription>
                      Defina a personalidade e o comportamento do seu agente de atendimento
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="agentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome do Agente *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: Stella Mentoark" {...field} />
                          </FormControl>
                          <FormDescription>
                            Como o agente vai se apresentar aos clientes
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="persona"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Descrição da Persona *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Ex: Sou uma assistente virtual especializada em atendimento ao cliente, sempre prestativa e educada..."
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Descreva quem é o agente, sua função e características principais
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="tone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tom de Voz *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o tom de voz" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {toneOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Define como o agente se comunica com os clientes
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="goal"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Objetivo Principal *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Ex: Captar leads qualificados, agendar consultas e tirar dúvidas sobre nossos serviços..."
                              className="min-h-[80px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            O que o agente deve buscar alcançar em cada conversa
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="welcomeMessage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem de Boas-Vindas *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Ex: Olá! 👋 Sou a Stella, assistente virtual da MentoArk. Como posso ajudar você hoje?"
                              className="min-h-[80px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Primeira mensagem enviada quando um cliente inicia uma conversa
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Tab 3: Regras e Conhecimento */}
              <TabsContent value="knowledge">
                <Card className="bg-card/50 border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Regras e Conhecimento
                    </CardTitle>
                    <CardDescription>
                      Configure regras de comportamento e a base de conhecimento do agente
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="rules"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Regras de Comportamento</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={`Digite uma regra por linha, ex:\n- Nunca forneça informações falsas\n- Sempre encaminhe para atendente humano se não souber responder\n- Não discuta política ou religião`}
                              className="min-h-[120px] font-mono text-sm"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Defina regras que o agente deve seguir (uma por linha)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="knowledgeBase"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Base de Conhecimento</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Cole aqui informações importantes sobre sua empresa, produtos, serviços, FAQs, etc. Quanto mais detalhado, melhor o agente responderá..."
                              className="min-h-[200px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Informações que o agente usará para responder perguntas
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="maxCharacters"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Máximo de Caracteres por Resposta</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min={50}
                              max={4000}
                              placeholder="500"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Limite de caracteres em cada resposta da IA (50-4000)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Tab 4: Configurações Técnicas */}
              <TabsContent value="advanced">
                <Card className="bg-card/50 border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings2 className="h-5 w-5 text-primary" />
                      Configurações Técnicas (Avançado)
                    </CardTitle>
                    <CardDescription>
                      Configurações técnicas para integração com a Evolution API e modelo de IA
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="model"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Modelo de IA</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione o modelo" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {modelOptions.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              Modelo GPT usado para gerar respostas
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="temperature"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Temperatura: {field.value}</FormLabel>
                            <FormControl>
                              <Slider
                                min={0}
                                max={1}
                                step={0.1}
                                value={[field.value || 0.7]}
                                onValueChange={(value) => field.onChange(value[0])}
                                className="py-4"
                              />
                            </FormControl>
                            <FormDescription>
                              0 = mais preciso, 1 = mais criativo
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="border-t border-border/50 pt-6">
                      <h4 className="font-medium mb-4 text-foreground">Configuração Evolution API</h4>
                      
                      <div className="space-y-6">
                        <FormField
                          control={form.control}
                          name="evolutionInstance"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>ID da Instância Evolution *</FormLabel>
                              <FormControl>
                                <Input placeholder="Ex: minha-instancia-123" {...field} />
                              </FormControl>
                              <FormDescription>
                                Nome ou ID da instância configurada na Evolution API
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="evolutionServerUrl"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>URL do Servidor Evolution *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Ex: https://meu-servidor-evolution.com" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormDescription>
                                Endereço do seu servidor Evolution API
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="evolutionApiKey"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>API Key Evolution</FormLabel>
                              <FormControl>
                                <Input 
                                  type="password"
                                  placeholder="Chave de API (opcional)"
                                  {...field} 
                                />
                              </FormControl>
                              <FormDescription>
                                Chave de autenticação para a Evolution API (se necessário)
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
              <Button type="submit" size="lg" className="gap-2">
                <Save className="h-4 w-4" />
                Salvar agente
              </Button>
              
              <Button 
                type="button" 
                variant="secondary" 
                size="lg" 
                className="gap-2"
                onClick={handleReset}
              >
                <RotateCcw className="h-4 w-4" />
                Resetar
              </Button>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="lg" 
                        className="gap-2"
                        disabled
                      >
                        <FlaskConical className="h-4 w-4" />
                        Testar agente (em breve)
                      </Button>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Funcionalidade de teste será implementada em breve</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </form>
        </Form>
      </main>
    </div>
  );
};

export default AgentBuilder;
