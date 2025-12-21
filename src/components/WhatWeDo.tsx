import { MessageSquare, Stethoscope, ShoppingCart, Wallet } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const solutions = [
  {
    icon: MessageSquare,
    title: "Automação WhatsApp",
    description: "Atendimento automático 24h"
  },
  {
    icon: Stethoscope,
    title: "Sistema Clínicas",
    description: "Prontuário e gestão"
  },
  {
    icon: ShoppingCart,
    title: "Sistema Comercial",
    description: "PDV e vendas"
  },
  {
    icon: Wallet,
    title: "Sistema Financeiro",
    description: "Controle e organização"
  }
];

export const WhatWeDo = () => {
  return (
    <div className="py-24 px-4 bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none opacity-20" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Mais do que tecnologia.{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Soluções reais
              </span>{" "}
              para o dia a dia.
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              A MentoArk ajuda empresas a automatizar atendimentos e organizar processos com sistemas inteligentes. 
              Você pode usar nossas soluções separadamente ou integradas, de acordo com a necessidade do seu negócio.
            </p>
          </div>
        </ScrollReveal>

        {/* Solution Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <ScrollReveal 
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="glass rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Integration Badge */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="glass rounded-2xl p-6 text-center max-w-2xl mx-auto border-accent/30">
            <div className="flex items-center justify-center gap-2 text-accent mb-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wide">Integração Flexível</span>
            </div>
            <p className="text-foreground">
              Use cada solução separadamente ou integre tudo para uma gestão completa do seu negócio
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
