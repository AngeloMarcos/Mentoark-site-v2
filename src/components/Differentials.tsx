import { Plug, Cog, Shield } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const differentials = [
  {
    icon: Plug,
    title: "Integração com seus sistemas",
    description: "Conectamos o WhatsApp ao seu sistema atual — seja prontuário, financeiro, CRM ou qualquer outro"
  },
  {
    icon: Cog,
    title: "Automação personalizada",
    description: "Cada negócio é único. Criamos fluxos específicos para sua realidade e processos"
  },
  {
    icon: Shield,
    title: "Escalável e segura",
    description: "Infraestrutura robusta que cresce com você, mantendo seus dados sempre protegidos"
  }
];

export const Differentials = () => {
  return (
    <section className="py-24 px-4 bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none opacity-30" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <ScrollReveal animation="fade-up">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Não é apenas um{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  chatbot
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                A MentoArk conecta o WhatsApp diretamente aos sistemas do seu negócio, 
                executando ações reais como agendar, registrar, vender e organizar informações. 
                Enquanto chatbots comuns apenas respondem, nossa automação <strong className="text-foreground">trabalha por você</strong>.
              </p>

              {/* Comparison */}
              <div className="glass rounded-2xl p-6 mb-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-muted-foreground mb-3 text-sm uppercase tracking-wide">Chatbot comum</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <span className="text-destructive">✗</span> Apenas responde perguntas
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <span className="text-destructive">✗</span> Não integra com sistemas
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <span className="text-destructive">✗</span> Depende de funcionário
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3 text-sm uppercase tracking-wide">MentoArk</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-foreground">
                        <span className="text-primary">✓</span> Executa ações reais
                      </li>
                      <li className="flex items-center gap-2 text-foreground">
                        <span className="text-primary">✓</span> Integra com tudo
                      </li>
                      <li className="flex items-center gap-2 text-foreground">
                        <span className="text-primary">✓</span> 100% automático
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Differentials Cards */}
          <div className="space-y-4">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal 
                  key={index}
                  animation="slide-left"
                  delay={index * 100}
                >
                  <div className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-primary/50 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
