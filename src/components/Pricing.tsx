import { Check, Star, Zap, Crown, MessageSquare, Briefcase, Wrench, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PricingProps {
  onOpenChat: () => void;
}

const pricingPlans = [
  {
    name: "Básico",
    price: 450,
    description: "Ideal para começar a automatizar seu atendimento",
    features: [
      "IA 24/7 no WhatsApp",
      "Manutenção Mensal",
      "Suporte via chat",
      "Atualizações inclusas"
    ],
    implantation: "Taxa de implantação aplicável",
    implantationFree: false,
    popular: false,
    icon: Zap
  },
  {
    name: "Profissional",
    price: 850,
    description: "Solução completa com CRM integrado",
    features: [
      "IA 24/7 no WhatsApp",
      "Manutenção Mensal",
      "CRM Completo:",
      "• PDV (Ponto de Venda)",
      "• Prontuário para Clínicas",
      "• Sistema Financeiro",
      "Suporte prioritário"
    ],
    implantation: "Taxa de implantação aplicável",
    implantationFree: false,
    popular: true,
    icon: Star
  },
  {
    name: "Enterprise",
    price: 1200,
    description: "Máximo poder com manutenção personalizada",
    features: [
      "IA 24/7 no WhatsApp",
      "Manutenção Mensal",
      "CRM Completo:",
      "• PDV (Ponto de Venda)",
      "• Prontuário para Clínicas",
      "• Sistema Financeiro",
      "Manutenção Personalizada",
      "Suporte dedicado",
      "Customizações sob demanda"
    ],
    implantation: "Taxa de implantação ISENTA",
    implantationFree: true,
    popular: false,
    icon: Crown
  }
];

const comparisonFeatures = [
  {
    category: "Atendimento",
    icon: MessageSquare,
    features: [
      { name: "IA 24/7 no WhatsApp", basic: true, pro: true, enterprise: true },
      { name: "Respostas automatizadas", basic: true, pro: true, enterprise: true },
      { name: "Multi-atendentes", basic: false, pro: true, enterprise: true },
      { name: "Fluxos personalizados", basic: false, pro: false, enterprise: true },
    ]
  },
  {
    category: "CRM & Gestão",
    icon: Briefcase,
    features: [
      { name: "PDV (Ponto de Venda)", basic: false, pro: true, enterprise: true },
      { name: "Prontuário para Clínicas", basic: false, pro: true, enterprise: true },
      { name: "Sistema Financeiro", basic: false, pro: true, enterprise: true },
      { name: "Relatórios avançados", basic: false, pro: false, enterprise: true },
    ]
  },
  {
    category: "Suporte & Manutenção",
    icon: Wrench,
    features: [
      { name: "Manutenção Mensal", basic: true, pro: true, enterprise: true },
      { name: "Atualizações inclusas", basic: true, pro: true, enterprise: true },
      { name: "Suporte via chat", basic: true, pro: true, enterprise: true },
      { name: "Suporte prioritário", basic: false, pro: true, enterprise: true },
      { name: "Suporte dedicado", basic: false, pro: false, enterprise: true },
      { name: "Manutenção Personalizada", basic: false, pro: false, enterprise: true },
      { name: "Customizações sob demanda", basic: false, pro: false, enterprise: true },
    ]
  }
];

const PriceDisplay = ({ price }: { price: number }) => {
  const count = useCountUp(price, true, { duration: 1500 });
  return <>{count.toLocaleString('pt-BR')}</>;
};

const FeatureCheck = ({ included, highlight }: { included: boolean; highlight?: 'pro' | 'enterprise' }) => {
  if (included) {
    return (
      <Check className={`w-5 h-5 mx-auto ${
        highlight === 'pro' ? 'text-primary' : 
        highlight === 'enterprise' ? 'text-accent' : 'text-green-500'
      }`} />
    );
  }
  return <X className="w-5 h-5 mx-auto text-muted-foreground/40" />;
};

export const Pricing = ({ onOpenChat }: PricingProps) => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Planos & Preços
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Escolha o Plano Ideal
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Soluções flexíveis que crescem junto com seu negócio
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal
              key={plan.name}
              animation="fade-up"
              delay={index * 150}
            >
              <div
                className={`relative h-full rounded-2xl p-6 lg:p-8 transition-all duration-300 ease-out group cursor-pointer
                  ${plan.popular
                    ? "bg-gradient-to-b from-primary/20 to-primary/5 border-2 border-primary shadow-xl shadow-primary/20 scale-105 z-10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40"
                    : plan.implantationFree
                      ? "bg-card/50 backdrop-blur-sm border border-border/50 ring-2 ring-accent/30 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/30 hover:border-accent/50"
                      : "bg-card/50 backdrop-blur-sm border border-border/50 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/25 hover:border-primary/50"
                  }
                `}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                      Mais Popular
                    </span>
                  </div>
                )}

                {/* Tax Free Badge */}
                {plan.implantationFree && (
                  <div className="absolute -top-4 right-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      TAXA ISENTA
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110
                  ${plan.popular ? "bg-primary text-primary-foreground" : plan.implantationFree ? "bg-accent text-accent-foreground" : "bg-primary/10 text-primary"}
                `}>
                  <plan.icon className="w-7 h-7" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-muted-foreground text-lg">R$</span>
                    <span className={`text-4xl lg:text-5xl font-bold ${plan.popular ? "text-primary" : plan.implantationFree ? "text-accent" : "text-foreground"}`}>
                      <PriceDisplay price={plan.price} />
                    </span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                  <p className={`text-sm mt-2 ${plan.implantationFree ? "text-accent font-semibold" : "text-muted-foreground"}`}>
                    {plan.implantation}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`flex items-start gap-3 text-sm ${feature.startsWith("•") ? "pl-6 text-muted-foreground" : "text-foreground"}`}
                    >
                      {!feature.startsWith("•") && (
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-primary" : plan.implantationFree ? "text-accent" : "text-primary/70"}`} />
                      )}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={onOpenChat}
                  className={`w-full py-6 text-base font-semibold transition-all duration-300
                    ${plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
                      : plan.implantationFree
                        ? "bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40"
                        : "bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30"
                    }
                  `}
                >
                  {plan.implantationFree ? "Falar Agora" : "Começar"}
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Comparison Table */}
        <ScrollReveal animation="fade-up" delay={300}>
          <div className="mt-20 max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Compare os Planos
            </h3>
            
            <div className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50 hover:bg-muted/50">
                      <TableHead className="w-[280px] text-foreground font-semibold py-4">
                        Funcionalidades
                      </TableHead>
                      <TableHead className="text-center text-foreground font-semibold py-4 w-[120px]">
                        <div className="flex flex-col items-center gap-1">
                          <Zap className="w-5 h-5 text-primary/70" />
                          <span>Básico</span>
                          <span className="text-xs text-muted-foreground font-normal">R$ 450/mês</span>
                        </div>
                      </TableHead>
                      <TableHead className="text-center font-semibold py-4 w-[140px] bg-primary/10 border-x-2 border-primary/30">
                        <div className="flex flex-col items-center gap-1">
                          <Star className="w-5 h-5 text-primary" />
                          <span className="text-primary">Profissional</span>
                          <span className="text-xs text-primary/70 font-normal">R$ 850/mês</span>
                        </div>
                      </TableHead>
                      <TableHead className="text-center text-foreground font-semibold py-4 w-[120px]">
                        <div className="flex flex-col items-center gap-1">
                          <Crown className="w-5 h-5 text-accent" />
                          <span>Enterprise</span>
                          <span className="text-xs text-muted-foreground font-normal">R$ 1.200/mês</span>
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonFeatures.map((category) => (
                      <>
                        {/* Category Header */}
                        <TableRow key={category.category} className="bg-muted/30 hover:bg-muted/30">
                          <TableCell colSpan={4} className="py-3">
                            <div className="flex items-center gap-2 font-semibold text-foreground">
                              <category.icon className="w-4 h-4 text-primary" />
                              {category.category}
                            </div>
                          </TableCell>
                        </TableRow>
                        
                        {/* Feature Rows */}
                        {category.features.map((feature) => (
                          <TableRow key={feature.name} className="hover:bg-muted/20 transition-colors">
                            <TableCell className="text-sm text-muted-foreground py-3 pl-8">
                              {feature.name}
                            </TableCell>
                            <TableCell className="text-center py-3">
                              <FeatureCheck included={feature.basic} />
                            </TableCell>
                            <TableCell className="text-center py-3 bg-primary/5 border-x border-primary/20">
                              <FeatureCheck included={feature.pro} highlight="pro" />
                            </TableCell>
                            <TableCell className="text-center py-3">
                              <FeatureCheck included={feature.enterprise} highlight="enterprise" />
                            </TableCell>
                          </TableRow>
                        ))}
                      </>
                    ))}
                    
                    {/* Pricing Row */}
                    <TableRow className="bg-muted/40 hover:bg-muted/40 border-t-2 border-border/50">
                      <TableCell className="font-semibold text-foreground py-4">
                        Taxa de Implantação
                      </TableCell>
                      <TableCell className="text-center py-4 text-sm text-muted-foreground">
                        Aplicável
                      </TableCell>
                      <TableCell className="text-center py-4 text-sm text-muted-foreground bg-primary/5 border-x border-primary/20">
                        Aplicável
                      </TableCell>
                      <TableCell className="text-center py-4">
                        <span className="text-accent font-bold text-sm">ISENTA</span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Note */}
        <ScrollReveal animation="fade-up" delay={500}>
          <p className="text-center text-muted-foreground text-sm mt-12 max-w-2xl mx-auto">
            Todos os planos incluem suporte técnico e atualizações. 
            Entre em contato para conhecer condições especiais para sua empresa.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
