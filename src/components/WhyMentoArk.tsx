import { Puzzle, Cog, MessageSquare, Heart, Headphones } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const reasons = [
  {
    icon: Puzzle,
    title: "Soluções modulares",
    description: "Use o que precisar. Contrate apenas as soluções que fazem sentido para seu negócio."
  },
  {
    icon: Cog,
    title: "Sistemas próprios",
    description: "Desenvolvemos nossos próprios sistemas, garantindo qualidade e atualizações constantes."
  },
  {
    icon: MessageSquare,
    title: "Automação personalizada",
    description: "Cada automação é criada especificamente para a sua realidade e seus processos."
  },
  {
    icon: Heart,
    title: "Linguagem simples",
    description: "Sem termos técnicos complicados. Explicamos tudo de forma clara e objetiva."
  },
  {
    icon: Headphones,
    title: "Suporte humano",
    description: "Nossa equipe está sempre disponível para ajudar, orientar e tirar dúvidas."
  }
];

export const WhyMentoArk = () => {
  return (
    <section id="por-que-mentoark" className="py-24 px-4 bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none opacity-30" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Por que escolher a{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                MentoArk
              </span>
              ?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Entendemos que tecnologia precisa ser simples para funcionar
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <ScrollReveal 
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Trust Element */}
        <ScrollReveal animation="fade-up" delay={500}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center">
                    <span className="text-xs text-primary-foreground font-bold">{i}</span>
                  </div>
                ))}
              </div>
              <span className="text-muted-foreground">
                <span className="text-foreground font-semibold">+500 empresas</span> confiam na MentoArk
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
