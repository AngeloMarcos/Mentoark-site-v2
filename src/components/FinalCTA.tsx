import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

interface FinalCTAProps {
  onOpenChat: () => void;
}

export const FinalCTA = ({ onOpenChat }: FinalCTAProps) => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-elegant animate-fade-in-up">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
            <MessageCircle className="w-10 h-10 text-accent-foreground" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Pronto para automatizar seu{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              WhatsApp?
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Fale com um especialista e veja como a automação pode funcionar no seu negócio. 
            Sem compromisso, sem complicação.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-accent hover:opacity-90 text-lg px-10 h-16 glow-orange text-accent-foreground font-semibold"
            onClick={onOpenChat}
          >
            Quero Automatizar Meu WhatsApp
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Atendimento personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Resposta rápida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
