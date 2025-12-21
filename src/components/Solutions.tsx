import { MessageSquare, Stethoscope, ShoppingCart, Wallet, ArrowRight, Check, Clock, Users, FileText, Calendar, CreditCard, BarChart3 } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";

interface SolutionProps {
  onOpenChat: () => void;
}

const solutionsData = [
  {
    id: "whatsapp",
    icon: MessageSquare,
    title: "Automação Inteligente para WhatsApp",
    description: "Transforme conversas em ações automáticas. A automação da MentoArk entende mensagens, toma decisões e executa tarefas como agendamentos, confirmações, registros e vendas, sem depender de atendimento manual.",
    gradient: "from-primary to-primary/70",
    steps: [
      "Cliente envia mensagem no WhatsApp",
      "A automação entende o pedido",
      "O sistema executa a ação necessária",
      "Cliente ou equipe recebe a resposta pronta"
    ],
    benefits: [
      { icon: Clock, text: "Atendimento 24h" },
      { icon: Check, text: "Redução de erros humanos" },
      { icon: MessageSquare, text: "Respostas rápidas e padronizadas" },
      { icon: Users, text: "Integração com sistemas" }
    ],
    cta: "Quero automatizar meu WhatsApp",
    integration: "Integra com todos os sistemas MentoArk"
  },
  {
    id: "clinicas",
    icon: Stethoscope,
    title: "Sistema de Gestão para Clínicas e Consultórios",
    description: "Sistema completo para organizar atendimentos médicos, prontuários, pacientes e agendas em um só lugar, de forma simples e segura.",
    gradient: "from-primary/80 to-primary/50",
    forWho: ["Clínicas", "Consultórios", "Profissionais da saúde"],
    features: [
      { icon: FileText, text: "Prontuário eletrônico" },
      { icon: Users, text: "Gestão de pacientes" },
      { icon: Calendar, text: "Agenda médica" },
      { icon: Clock, text: "Histórico de atendimentos" }
    ],
    cta: "Ver sistema para clínicas",
    integration: "Integra com automação WhatsApp para agendamentos e confirmações automáticas"
  },
  {
    id: "comercial",
    icon: ShoppingCart,
    title: "Sistema Comercial e PDV na Nuvem",
    description: "Controle vendas, caixa e operações do seu negócio com um sistema simples, rápido e organizado.",
    gradient: "from-accent to-accent/70",
    forWho: ["Lojas", "Comércios", "Prestadores de serviço"],
    features: [
      { icon: CreditCard, text: "PDV completo" },
      { icon: BarChart3, text: "Controle de vendas" },
      { icon: Wallet, text: "Gestão de caixa" },
      { icon: FileText, text: "Relatórios básicos" }
    ],
    cta: "Conhecer sistema comercial",
    integration: "Integração opcional com automação de WhatsApp para vendas e atendimento automático"
  },
  {
    id: "financeiro",
    icon: Wallet,
    title: "Sistema Financeiro e de Controle",
    description: "Organize informações financeiras, registros e processos de forma centralizada e segura.",
    gradient: "from-primary to-accent",
    forWho: ["Empresas", "Financeiras", "Prestadores de serviço"],
    features: [
      { icon: FileText, text: "Registro de operações" },
      { icon: BarChart3, text: "Controle financeiro" },
      { icon: Users, text: "Organização de dados" },
      { icon: Calendar, text: "Relatórios" }
    ],
    cta: "Ver sistema financeiro",
    integration: "Integra com automação WhatsApp para consultas e notificações automáticas"
  }
];

export const Solutions = ({ onOpenChat }: SolutionProps) => {
  return (
    <section id="solucoes" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none opacity-30" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Nossas{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Soluções
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Sistemas e automações desenvolvidos para resolver problemas reais do seu dia a dia
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-16">
          {solutionsData.map((solution, index) => {
            const Icon = solution.icon;
            const isEven = index % 2 === 0;
            
            return (
              <ScrollReveal 
                key={solution.id}
                animation={isEven ? "fade-up" : "fade-up"}
                delay={index * 100}
              >
                <div className={`glass rounded-3xl p-8 lg:p-12 ${index === 0 ? 'border-primary/30' : ''}`}>
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Content */}
                    <div className={!isEven ? 'lg:col-start-2' : ''}>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6`}>
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                        {solution.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 text-lg">
                        {solution.description}
                      </p>

                      {/* For Who */}
                      {solution.forWho && (
                        <div className="mb-6">
                          <p className="text-sm font-semibold text-primary mb-2">Para quem:</p>
                          <div className="flex flex-wrap gap-2">
                            {solution.forWho.map((who, i) => (
                              <span key={i} className="px-3 py-1 bg-primary/10 rounded-full text-sm text-foreground">
                                {who}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Integration Badge */}
                      <div className="p-3 bg-accent/10 rounded-xl border border-accent/30 mb-6">
                        <p className="text-sm text-foreground flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent" />
                          {solution.integration}
                        </p>
                      </div>

                      <Button
                        className="bg-gradient-accent hover:opacity-90 glow-orange"
                        onClick={onOpenChat}
                      >
                        {solution.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>

                    {/* Visual Content */}
                    <div className={!isEven ? 'lg:col-start-1' : ''}>
                      {/* Steps for WhatsApp */}
                      {solution.steps && (
                        <div className="space-y-4">
                          <p className="text-sm font-semibold text-primary mb-4">Como funciona:</p>
                          {solution.steps.map((step, i) => (
                            <div key={i} className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                <span className="text-primary font-bold">{i + 1}</span>
                              </div>
                              <p className="text-foreground">{step}</p>
                            </div>
                          ))}
                          
                          {solution.benefits && (
                            <div className="mt-8 grid grid-cols-2 gap-4">
                              {solution.benefits.map((benefit, i) => {
                                const BenefitIcon = benefit.icon;
                                return (
                                  <div key={i} className="flex items-center gap-2">
                                    <BenefitIcon className="w-4 h-4 text-primary" />
                                    <span className="text-sm text-foreground">{benefit.text}</span>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Features for other systems */}
                      {solution.features && (
                        <div className="grid grid-cols-2 gap-4">
                          {solution.features.map((feature, i) => {
                            const FeatureIcon = feature.icon;
                            return (
                              <div key={i} className="glass rounded-xl p-4 flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                  <FeatureIcon className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-sm text-foreground font-medium">{feature.text}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
