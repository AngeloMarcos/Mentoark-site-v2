import { Users, MessageSquare, Clock, TrendingUp } from "lucide-react";
import { useScrollReveal, ScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

interface StatItemProps {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
  isVisible: boolean;
}

const StatItem = ({ end, prefix = "", suffix = "", label, icon, isVisible }: StatItemProps) => {
  const count = useCountUp(end, isVisible, { duration: 2500 });

  return (
    <div className="group text-center p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
        {prefix}{count.toLocaleString('pt-BR')}{suffix}
      </div>
      <p className="text-sm md:text-base text-muted-foreground font-medium">
        {label}
      </p>
    </div>
  );
};

const stats = [
  {
    end: 500,
    prefix: "+",
    suffix: "",
    label: "Clientes Atendidos",
    icon: <Users className="w-6 h-6" />,
  },
  {
    end: 50000,
    prefix: "+",
    suffix: "",
    label: "Mensagens Automatizadas",
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    end: 24,
    prefix: "",
    suffix: "/7",
    label: "Disponibilidade",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    end: 98,
    prefix: "",
    suffix: "%",
    label: "Satisfação dos Clientes",
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

export const StatsCounter = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <ScrollReveal animation="fade-up" className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Números que Comprovam Nossa{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Excelência
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Resultados reais de empresas que transformaram seu atendimento com a MentoArk
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal 
              key={stat.label} 
              animation="scale" 
              delay={index * 100}
            >
              <StatItem
                end={stat.end}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
                isVisible={isVisible}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
