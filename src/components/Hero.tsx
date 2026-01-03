import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Plug, CheckCircle, MessageCircle, MessageSquare, Send } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

interface HeroProps {
  onOpenChat: () => void;
}

export const Hero = ({ onOpenChat }: HeroProps) => {
  const scrollToHowItWorks = () => {
    document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 bg-gradient-hero-teal">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_hsl(175_60%_30%/0.3)_0%,_transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_hsl(160_50%_25%/0.2)_0%,_transparent_50%)] pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <ScrollReveal animation="fade-up" duration={800}>
            <div className="text-center lg:text-left space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-white/90 font-medium">Automação que transforma negócios</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Automação Inteligente e{" "}
                <span className="bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent">Sistemas</span>{" "}
                que Trabalham por Você
              </h1>

              <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0">
                Transforme seu WhatsApp em um canal automático de atendimento, vendas e gestão — com sistemas integrados que organizam seu negócio do começo ao fim.
              </p>

              {/* Bullets */}
              <ul className="space-y-3 text-left max-w-lg mx-auto lg:mx-0">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/90">Atendimento automático 24h no WhatsApp</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                    <Plug className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/90">Sistemas próprios para clínicas, vendas e financeiro</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/90">Menos trabalho manual, mais controle e eficiência</span>
                </li>
              </ul>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button
                  size="lg"
                  className="bg-white text-teal-800 hover:bg-white/90 text-lg px-8 h-14 shadow-xl shadow-black/20 font-semibold"
                  onClick={onOpenChat}
                >
                  Falar com Especialista
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 h-14 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
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
                  className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.4)] animate-float"
                />
                
                {/* Glow effect behind mascot */}
                <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent blur-3xl -z-10" />
              </div>

              {/* Floating Chat Icons */}
              <div className="absolute top-4 right-4 lg:top-8 lg:right-8 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-xl">
                  <MessageCircle className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
              </div>

              <div className="absolute top-1/4 -right-2 lg:right-0 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg">
                  <MessageSquare className="w-6 h-6 lg:w-7 lg:h-7 text-white/90" />
                </div>
              </div>

              <div className="absolute bottom-1/4 -left-2 lg:left-0 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg">
                  <Send className="w-6 h-6 lg:w-7 lg:h-7 text-white/90" />
                </div>
              </div>

              <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-accent/80 backdrop-blur-md flex items-center justify-center border border-accent/50 shadow-lg shadow-accent/30">
                  <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
              </div>

              {/* Decorative Circles */}
              <div className="absolute -top-8 left-1/4 w-4 h-4 rounded-full bg-white/30 animate-pulse" />
              <div className="absolute top-1/3 -left-4 w-3 h-3 rounded-full bg-white/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-1/3 -right-4 w-5 h-5 rounded-full bg-accent/50 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
