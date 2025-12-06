import { Button } from "@/components/ui/button";
import { Bot, ArrowRight } from "lucide-react";

export const Hero = ({ onOpenChat }: { onOpenChat: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />

      {/* Floating Mascot */}
      <div className="absolute top-20 right-10 hidden xl:block animate-float z-10">
        <img
          src="/images/mascote-mentoark.png"
          alt="Mascote MentoArk"
          className="w-48 h-48 object-contain drop-shadow-2xl"
        />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 mb-4">
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Automação Inteligente no WhatsApp</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transforme seu <span className="bg-gradient-primary bg-clip-text text-transparent">WhatsApp</span> em um
              assistente virtual
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Automação com IA, desenvolvimento de sites e tráfego pago. Tudo que você precisa para escalar seu negócio
              digital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-accent hover:opacity-90 text-lg px-8 glow-orange"
                onClick={onOpenChat}
              >
                Testar Assistente Grátis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
                Ver Como Funciona
              </Button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Respostas instantâneas 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span>Integração em minutos</span>
              </div>
            </div>
          </div>

          {/* Mockup */}
          <div className="relative">
            <div className="glass rounded-3xl p-6 glow-blue">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div className="glass rounded-2xl p-4 flex-1">
                    <p className="text-sm">
                      Olá! 👋 Sou o assistente virtual da MentoArk. Como posso ajudar você hoje?
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-primary/20 rounded-2xl p-4 max-w-[80%]">
                    <p className="text-sm">Quero automatizar meu WhatsApp com IA</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div className="glass rounded-2xl p-4 flex-1">
                    <p className="text-sm">Excelente escolha! Com nossa automação você pode:</p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• Responder clientes automaticamente</li>
                      <li>• Qualificar leads com IA</li>
                      <li>• Agendar demonstrações</li>
                      <li>• Integrar com seu CRM</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent/10 rounded-xl border border-accent/30 text-center">
                <p className="text-sm font-medium">👆 Este é um exemplo. Teste o assistente real abaixo!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
