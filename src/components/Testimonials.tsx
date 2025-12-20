import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Dr. Ricardo Mendes",
    role: "Clínica Odontológica",
    content: "Antes, minha recepcionista passava horas no telefone agendando consultas. Agora, 80% dos agendamentos são automáticos. Ganhamos tempo e os pacientes adoram a agilidade.",
    rating: 5
  },
  {
    name: "Fernanda Costa",
    role: "Imobiliária Prime",
    content: "O sistema qualifica os leads antes de chegar na nossa equipe. Recebemos apenas contatos realmente interessados, o que aumentou muito nossa taxa de conversão.",
    rating: 5
  },
  {
    name: "Carlos Eduardo",
    role: "Advocacia Silva & Associados",
    content: "Nossos clientes conseguem consultar o andamento dos processos a qualquer hora. Reduziu muito as ligações e emails repetitivos no escritório.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none opacity-20" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              O que nossos{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                clientes dizem
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de empresas que transformaram seu atendimento
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal 
              key={index}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="glass rounded-3xl p-6 lg:p-8 hover:border-primary/50 transition-all duration-300 relative h-full">
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
