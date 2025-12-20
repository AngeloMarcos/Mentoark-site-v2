import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Plug, CheckCircle } from "lucide-react";

interface HeroProps {
  onOpenChat: () => void;
}

export const Hero = ({ onOpenChat }: HeroProps) => {
  const scrollToHowItWorks = () => {
    document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 bg-gradient-hero">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Mascot */}
      <div className="absolute top-32 right-10 hidden xl:block animate-float z-10">
        <img
          src="/images/mascote-mentoark.png"
          alt="Mascote MentoArk"
          className="w-48 h-48 object-contain drop-shadow-2xl"
        />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transforme seu{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">WhatsApp</span>{" "}
              em uma Secretária Digital 24h
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Automatize atendimentos, agendamentos e vendas no WhatsApp com integração total aos seus sistemas — sem erros e sem retrabalho.
            </p>

            {/* Bullets */}
            <ul className="space-y-4 text-left max-w-lg mx-auto lg:mx-0">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground">Atendimento automático 24h por dia</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Plug className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground">Integração com sistemas (prontuário, financeiro, PDV)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground">Menos trabalho manual, mais controle</span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-gradient-accent hover:opacity-90 text-lg px-8 h-14 glow-orange"
                onClick={onOpenChat}
              >
                Falar com Especialista
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 h-14 border-primary/50 hover:bg-primary/10"
                onClick={scrollToHowItWorks}
              >
                Ver Demonstração
              </Button>
            </div>
          </div>

          {/* Visual Flow Mockup */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="glass-strong rounded-3xl p-6 sm:p-8 shadow-elegant">
              {/* WhatsApp Mockup */}
              <div className="bg-secondary/50 rounded-2xl p-4 mb-6">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border/50">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">WA</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Cliente no WhatsApp</p>
                    <p className="text-xs text-muted-foreground">Online</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-primary/20 rounded-2xl rounded-br-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm text-foreground">Olá, gostaria de agendar uma consulta</p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="glass rounded-2xl rounded-bl-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm text-foreground">
                        Olá! Temos horários disponíveis para amanhã às 14h ou 16h. Qual prefere?
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-primary/20 rounded-2xl rounded-br-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm text-foreground">14h está ótimo!</p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="glass rounded-2xl rounded-bl-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm text-foreground">
                        ✅ Agendado! Enviei a confirmação no seu email. Até amanhã!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Result Badge */}
              <div className="p-4 bg-accent/10 rounded-xl border border-accent/30 text-center">
                <p className="text-sm font-medium text-foreground">
                  ✨ Tudo automático: agenda verificada, consulta registrada, email enviado
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full blur-2xl opacity-30" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-primary rounded-full blur-2xl opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};
