import { MessageSquare, Cpu, Settings, CheckCircle, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Cliente envia mensagem",
    description: "Seu cliente entra em contato pelo WhatsApp a qualquer hora do dia ou da noite",
    color: "primary"
  },
  {
    icon: Cpu,
    number: "02",
    title: "Automação entende o pedido",
    description: "O sistema identifica a intenção do cliente e sabe exatamente o que fazer",
    color: "primary"
  },
  {
    icon: Settings,
    number: "03",
    title: "Sistema executa ações",
    description: "Agenda consultas, registra pedidos, atualiza o sistema — tudo automaticamente",
    color: "primary"
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Resposta pronta entregue",
    description: "Cliente e equipe recebem a confirmação em segundos, sem ninguém precisar digitar",
    color: "accent"
  }
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 px-4 bg-gradient-section relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none opacity-50" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Como{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Funciona
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Tudo acontece sozinho, sem precisar de funcionários digitando ou conferindo dados
            </p>
          </div>
        </ScrollReveal>
        
        {/* Desktop Flow */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-4 relative">
            {/* Connection Lines */}
            <div className="absolute top-24 left-[18%] right-[18%] h-1 flex items-center z-0">
              <div className="w-full h-0.5 bg-border relative">
                <div className="absolute inset-0 flow-line h-0.5" />
              </div>
            </div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              return (
                <ScrollReveal 
                  key={index} 
                  animation="scale" 
                  delay={index * 150}
                  className="relative z-10"
                >
                  <div className={`glass rounded-3xl p-6 text-center hover:border-${step.color}/50 transition-all duration-300 h-full`}>
                    <div className="relative inline-block mb-6">
                      <div className={`w-20 h-20 rounded-2xl ${isLast ? 'bg-gradient-accent' : 'bg-gradient-primary'} flex items-center justify-center mx-auto`}>
                        <Icon className={`w-10 h-10 ${isLast ? 'text-accent-foreground' : 'text-primary-foreground'}`} />
                      </div>
                      <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full ${isLast ? 'bg-accent' : 'bg-primary'} flex items-center justify-center font-bold text-sm ${isLast ? 'text-accent-foreground' : 'text-primary-foreground'}`}>
                        {step.number}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Mobile Flow */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <ScrollReveal key={index} animation="slide-right" delay={index * 100}>
                <div className="glass rounded-2xl p-6 flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className={`w-16 h-16 rounded-xl ${isLast ? 'bg-gradient-accent' : 'bg-gradient-primary'} flex items-center justify-center`}>
                      <Icon className={`w-8 h-8 ${isLast ? 'text-accent-foreground' : 'text-primary-foreground'}`} />
                    </div>
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${isLast ? 'bg-accent' : 'bg-primary'} flex items-center justify-center font-bold text-xs ${isLast ? 'text-accent-foreground' : 'text-primary-foreground'}`}>
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                  </div>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
