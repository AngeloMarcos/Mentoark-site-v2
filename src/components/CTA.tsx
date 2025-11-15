import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = ({ onOpenChat }: { onOpenChat: () => void }) => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-12 text-center relative overflow-hidden glow-blue">
          <div className="absolute inset-0 bg-gradient-glow pointer-events-none opacity-50" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-accent/30 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">Comece grátis hoje</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para transformar seu{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                negócio?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Converse com nosso assistente agora e descubra como podemos ajudar você a automatizar seu WhatsApp e vender mais.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-accent hover:opacity-90 text-lg px-10 glow-orange"
              onClick={onOpenChat}
            >
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-6">
              💳 Sem cartão de crédito • ⚡ Configuração em minutos • 🔒 Dados 100% seguros
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
