import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, MessageSquare, Users, BarChart3, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

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

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <ScrollReveal animation="fade-up" duration={800}>
            <div className="text-center lg:text-left space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-foreground/90 font-medium">Automação inteligente para seu negócio</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Conquiste Clientes e Venda Mais com{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">IA no WhatsApp</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Automatize respostas, qualifique leads e converta conversas em vendas 24 horas por dia — sem depender de uma equipe enorme. Nossa IA cuida do atendimento enquanto você foca no que importa.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-secondary/50 border border-border/50">
                  <Bot className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">IA conversacional</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-secondary/50 border border-border/50">
                  <Zap className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">Respostas instantâneas</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-secondary/50 border border-border/50">
                  <Users className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Leads qualificados</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-secondary/50 border border-border/50">
                  <BarChart3 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">Métricas em tempo real</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-accent hover:opacity-90 text-lg px-8 h-14 glow-orange"
                  onClick={onOpenChat}
                >
                  Começar Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 h-14 border-primary/50 hover:bg-primary/10"
                  onClick={scrollToHowItWorks}
                >
                  Ver como funciona
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Mascot with Floating Elements */}
          <ScrollReveal animation="slide-left" delay={200} duration={800}>
            <div className="relative flex items-center justify-center">
              {/* Main Mascot */}
              <div className="relative">
                <img
                  src="/images/mascote-mentoark.png"
                  alt="Mascote MentoArk - Robô de Automação"
                  className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] object-contain drop-shadow-[0_20px_60px_rgba(59,130,246,0.3)] animate-float"
                />
                
                {/* Glow effect behind mascot */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl -z-10" />
              </div>

              {/* Floating Feature Icons */}
              <div className="absolute top-4 right-4 lg:top-8 lg:right-8 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30 shadow-xl">
                  <MessageSquare className="w-7 h-7 lg:w-8 lg:h-8 text-primary" />
                </div>
              </div>

              <div className="absolute top-1/4 -right-2 lg:right-0 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-accent/20 backdrop-blur-md flex items-center justify-center border border-accent/30 shadow-lg">
                  <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-accent" />
                </div>
              </div>

              <div className="absolute bottom-1/4 -left-2 lg:left-0 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-primary/15 backdrop-blur-md flex items-center justify-center border border-primary/20 shadow-lg">
                  <Bot className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
                </div>
              </div>

              <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-accent/80 flex items-center justify-center border border-accent/50 shadow-lg shadow-accent/30">
                  <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
              </div>

              {/* Decorative Circles */}
              <div className="absolute -top-8 left-1/4 w-4 h-4 rounded-full bg-primary/30 animate-pulse" />
              <div className="absolute top-1/3 -left-4 w-3 h-3 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-1/3 -right-4 w-5 h-5 rounded-full bg-accent/50 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
