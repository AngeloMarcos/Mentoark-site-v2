import { Clock, Users, ShieldCheck, TrendingUp, ClipboardList, Zap } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  {
    icon: Users,
    title: "Redução de atendimentos manuais",
    description: "Libere sua equipe para tarefas que realmente precisam de atenção humana"
  },
  {
    icon: Clock,
    title: "Atendimento fora do horário",
    description: "Seus clientes são atendidos 24h por dia, 7 dias por semana"
  },
  {
    icon: ShieldCheck,
    title: "Menos erros humanos",
    description: "Automação precisa que elimina esquecimentos e falhas de digitação"
  },
  {
    icon: TrendingUp,
    title: "Mais conversão de leads",
    description: "Resposta instantânea aumenta suas chances de fechar negócio"
  },
  {
    icon: ClipboardList,
    title: "Organização total",
    description: "Todas as informações registradas automaticamente nos seus sistemas"
  },
  {
    icon: Zap,
    title: "Economia de tempo",
    description: "Processos que levavam horas agora acontecem em segundos"
  }
];

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none opacity-20" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Benefícios{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Reais
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Resultados que você sente no dia a dia do seu negócio
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal 
                key={index}
                animation="scale"
                delay={index * 80}
              >
                <div className="glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
