import { Sparkles, MessageSquare, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Conte-nos seu objetivo",
    description: "Converse com nosso assistente e explique o que você precisa automatizar"
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Criamos sua solução",
    description: "Nossa equipe desenvolve a automação personalizada para seu negócio"
  },
  {
    icon: Rocket,
    number: "03",
    title: "Comece a vender mais",
    description: "Em poucos dias sua automação está rodando e gerando resultados"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none opacity-30" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              funciona
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Simples, rápido e eficiente
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="glass rounded-3xl p-8 text-center hover:border-primary/50 transition-all duration-300">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-accent flex items-center justify-center font-bold text-accent-foreground">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
