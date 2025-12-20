import { Stethoscope, Scale, Building2, Calendar, UserCheck, FileText, Home, MessageSquare, ClipboardCheck } from "lucide-react";

const useCases = [
  {
    id: "clinicas",
    icon: Stethoscope,
    title: "Clínicas e Consultórios",
    description: "Automatize o atendimento e ganhe tempo para cuidar dos pacientes",
    features: [
      { icon: Calendar, text: "Agendamento automático de consultas" },
      { icon: MessageSquare, text: "Confirmação e lembrete de consultas" },
      { icon: FileText, text: "Integração com prontuário eletrônico" },
    ],
    gradient: "from-primary to-primary/70"
  },
  {
    id: "advogados",
    icon: Scale,
    title: "Escritórios de Advocacia",
    description: "Filtre clientes e organize sua agenda sem perder oportunidades",
    features: [
      { icon: UserCheck, text: "Filtragem automática de clientes" },
      { icon: ClipboardCheck, text: "Consulta de andamento processual" },
      { icon: Calendar, text: "Agendamento de reuniões e audiências" },
    ],
    gradient: "from-primary/80 to-primary/50"
  },
  {
    id: "imobiliarias",
    icon: Building2,
    title: "Imobiliárias",
    description: "Qualifique leads e agende visitas automaticamente",
    features: [
      { icon: UserCheck, text: "Qualificação automática de leads" },
      { icon: Home, text: "Envio personalizado de imóveis" },
      { icon: Calendar, text: "Agendamento de visitas" },
    ],
    gradient: "from-accent to-accent/70"
  }
];

export const UseCases = () => {
  return (
    <section id="casos-de-uso" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none opacity-30" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Soluções para{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Seu Segmento
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Automação personalizada para cada tipo de negócio
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div 
                key={useCase.id}
                className="glass rounded-3xl p-6 lg:p-8 hover:border-primary/50 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-foreground">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6">{useCase.description}</p>
                
                {/* Features */}
                <ul className="space-y-4">
                  {useCase.features.map((feature, featureIndex) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FeatureIcon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{feature.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
