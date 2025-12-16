import { Bot, Code, TrendingUp, Zap, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Automação WhatsApp",
    description: "Assistentes virtuais que atendem seus clientes 24/7 no WhatsApp"
  },
  {
    icon: Code,
    title: "Desenvolvimento de Sites",
    description: "Sites e sistemas modernos que convertem visitantes em clientes"
  },
  {
    icon: TrendingUp,
    title: "Tráfego Pago",
    description: "Campanhas otimizadas que trazem leads qualificados para seu negócio"
  },
  {
    icon: Zap,
    title: "Integração Rápida",
    description: "Configure tudo em minutos sem precisar de conhecimento técnico"
  },
  {
    icon: Shield,
    title: "Dados Seguros",
    description: "Seus dados e dos seus clientes protegidos com criptografia"
  },
  {
    icon: BarChart3,
    title: "Analytics Completo",
    description: "Métricas detalhadas para otimizar suas conversões constantemente"
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tudo que você precisa para{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              crescer
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar seu atendimento e aumentar suas vendas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
