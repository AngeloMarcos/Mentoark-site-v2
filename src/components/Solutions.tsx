import { MessageSquare, Stethoscope, ShoppingCart, Wallet, ArrowRight, Check, Clock, Users, FileText, Calendar, CreditCard, BarChart3 } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { ParallaxCard, FloatingIcon, StaggerContainer } from "@/components/ParallaxCard";
import { useScrollProgress, useStaggeredReveal } from "@/hooks/useScrollProgress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    glowColor: "hsl(217, 91%, 60%)",
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
    glowColor: "hsl(217, 91%, 55%)",
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
    glowColor: "hsl(24, 95%, 53%)",
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
    glowColor: "hsl(217, 91%, 60%)",
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

// Animated step component with stagger effect
const AnimatedStep = ({ step, index, isVisible }: { step: string; index: number; isVisible: boolean }) => {
  return (
    <div 
      className={cn(
        "flex items-center gap-4 transition-all duration-700 ease-out",
        isVisible 
          ? "opacity-100 translate-x-0" 
          : "opacity-0 -translate-x-8"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative">
        <div className={cn(
          "w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 transition-all duration-500",
          isVisible && "animate-scale-bounce"
        )}
        style={{ animationDelay: `${index * 150 + 200}ms` }}
        >
          <span className="text-primary font-bold text-lg">{index + 1}</span>
        </div>
        {index < 3 && (
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-primary/40 to-transparent" />
        )}
      </div>
      <p className="text-foreground font-medium">{step}</p>
    </div>
  );
};

// Animated feature card with hover effects
const AnimatedFeature = ({ feature, index, isVisible }: { 
  feature: { icon: React.ElementType; text: string }; 
  index: number; 
  isVisible: boolean;
}) => {
  const FeatureIcon = feature.icon;
  
  return (
    <div 
      className={cn(
        "group glass rounded-xl p-4 flex items-start gap-3 transition-all duration-500 ease-out",
        "hover:bg-primary/10 hover:border-primary/30 hover:scale-[1.02]",
        isVisible 
          ? "opacity-100 translate-y-0 blur-0" 
          : "opacity-0 translate-y-8 blur-sm"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <FloatingIcon 
        floatIntensity="subtle" 
        delay={index * 200}
        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
      >
        <FeatureIcon className="w-5 h-5 text-primary" />
      </FloatingIcon>
      <span className="text-sm text-foreground font-medium">{feature.text}</span>
    </div>
  );
};

// Animated benefit item
const AnimatedBenefit = ({ benefit, index, isVisible }: { 
  benefit: { icon: React.ElementType; text: string }; 
  index: number; 
  isVisible: boolean;
}) => {
  const BenefitIcon = benefit.icon;
  
  return (
    <div 
      className={cn(
        "flex items-center gap-2 transition-all duration-500 ease-out",
        isVisible 
          ? "opacity-100 scale-100" 
          : "opacity-0 scale-90"
      )}
      style={{ transitionDelay: `${600 + index * 100}ms` }}
    >
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
        <BenefitIcon className="w-4 h-4 text-primary" />
      </div>
      <span className="text-sm text-foreground">{benefit.text}</span>
    </div>
  );
};

export const Solutions = ({ onOpenChat }: SolutionProps) => {
  return (
    <div className="py-24 px-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none opacity-30" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
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

        <div className="space-y-20">
          {solutionsData.map((solution, index) => {
            const Icon = solution.icon;
            const isEven = index % 2 === 0;
            const parallaxSpeed = 0.05 + (index * 0.02);
            const direction = isEven ? "up" : "down";
            
            return (
              <SolutionCard
                key={solution.id}
                solution={solution}
                Icon={Icon}
                isEven={isEven}
                index={index}
                parallaxSpeed={parallaxSpeed}
                direction={direction}
                onOpenChat={onOpenChat}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Separate component for each solution card
const SolutionCard = ({ 
  solution, 
  Icon, 
  isEven, 
  index, 
  parallaxSpeed, 
  direction, 
  onOpenChat 
}: {
  solution: typeof solutionsData[0];
  Icon: React.ElementType;
  isEven: boolean;
  index: number;
  parallaxSpeed: number;
  direction: "up" | "down";
  onOpenChat: () => void;
}) => {
  const { ref, isInView } = useScrollProgress({ offset: 100 });
  
  return (
    <div ref={ref}>
      <ParallaxCard
        parallaxSpeed={parallaxSpeed}
        direction={direction}
        glowColor={solution.glowColor}
        delay={index * 100}
        className={cn(
          "p-8 lg:p-12",
          index === 0 && "border-primary/30 animate-glow-pulse-dynamic"
        )}
      >
        <div className={cn(
          "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center",
          !isEven && "lg:grid-flow-dense"
        )}>
          {/* Content */}
          <div className={!isEven ? "lg:col-start-2" : ""}>
            <FloatingIcon 
              floatIntensity="medium" 
              delay={index * 100}
              className={cn(
                "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6",
                solution.gradient
              )}
            >
              <Icon className="w-8 h-8 text-primary-foreground" />
            </FloatingIcon>
            
            <h3 
              className={cn(
                "text-2xl lg:text-3xl font-bold mb-4 text-foreground transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: "100ms" }}
            >
              {solution.title}
            </h3>
            
            <p 
              className={cn(
                "text-muted-foreground mb-6 text-lg transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: "200ms" }}
            >
              {solution.description}
            </p>

            {/* For Who */}
            {solution.forWho && (
              <div 
                className={cn(
                  "mb-6 transition-all duration-700",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: "300ms" }}
              >
                <p className="text-sm font-semibold text-primary mb-2">Para quem:</p>
                <div className="flex flex-wrap gap-2">
                  {solution.forWho.map((who, i) => (
                    <span 
                      key={i} 
                      className={cn(
                        "px-3 py-1 bg-primary/10 rounded-full text-sm text-foreground transition-all duration-500",
                        "hover:bg-primary/20 hover:scale-105 cursor-default",
                        isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                      )}
                      style={{ transitionDelay: `${350 + i * 100}ms` }}
                    >
                      {who}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Integration Badge */}
            <div 
              className={cn(
                "p-3 bg-accent/10 rounded-xl border border-accent/30 mb-6 transition-all duration-700",
                "hover:bg-accent/15 hover:border-accent/50",
                isInView 
                  ? "opacity-100 translate-x-0" 
                  : isEven ? "opacity-0 -translate-x-8" : "opacity-0 translate-x-8"
              )}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-sm text-foreground flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                {solution.integration}
              </p>
            </div>

            <Button
              className={cn(
                "bg-gradient-accent hover:opacity-90 glow-orange transition-all duration-700",
                "hover:scale-105 hover:shadow-lg",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: "500ms" }}
              onClick={onOpenChat}
            >
              {solution.cta}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Visual Content */}
          <div className={!isEven ? "lg:col-start-1" : ""}>
            {/* Steps for WhatsApp */}
            {solution.steps && (
              <div className="space-y-6">
                <p 
                  className={cn(
                    "text-sm font-semibold text-primary mb-4 transition-all duration-500",
                    isInView ? "opacity-100" : "opacity-0"
                  )}
                >
                  Como funciona:
                </p>
                <div className="space-y-6">
                  {solution.steps.map((step, i) => (
                    <AnimatedStep 
                      key={i} 
                      step={step} 
                      index={i} 
                      isVisible={isInView} 
                    />
                  ))}
                </div>
                
                {solution.benefits && (
                  <div className="mt-10 grid grid-cols-2 gap-4">
                    {solution.benefits.map((benefit, i) => (
                      <AnimatedBenefit 
                        key={i} 
                        benefit={benefit} 
                        index={i} 
                        isVisible={isInView} 
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Features for other systems */}
            {solution.features && (
              <div className="grid grid-cols-2 gap-4">
                {solution.features.map((feature, i) => (
                  <AnimatedFeature 
                    key={i} 
                    feature={feature} 
                    index={i} 
                    isVisible={isInView} 
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </ParallaxCard>
    </div>
  );
};
