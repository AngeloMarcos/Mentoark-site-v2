import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "Posso contratar apenas um sistema?",
    answer: "Sim! Nossas soluções são modulares. Você pode contratar apenas a automação de WhatsApp, apenas o sistema para clínicas, o sistema comercial ou o financeiro. Use o que fizer sentido para o seu negócio."
  },
  {
    question: "A automação funciona 24 horas?",
    answer: "Sim! A automação de WhatsApp funciona ininterruptamente, 24 horas por dia, 7 dias por semana. Seus clientes podem ser atendidos, agendar consultas e tirar dúvidas a qualquer momento, inclusive em feriados e finais de semana."
  },
  {
    question: "Preciso mudar meu sistema atual?",
    answer: "Não necessariamente! A MentoArk pode se integrar ao sistema que você já usa. Mas se você quiser uma solução completa, oferecemos sistemas próprios para clínicas, comercial e financeiro que funcionam perfeitamente integrados."
  },
  {
    question: "É difícil de usar?",
    answer: "Não! Todos os nossos sistemas foram pensados para serem simples e intuitivos. Você não precisa de conhecimento técnico para operar. E nossa equipe de suporte está sempre disponível para ajudar."
  },
  {
    question: "Posso integrar tudo depois?",
    answer: "Com certeza! Você pode começar com uma solução e depois adicionar outras conforme sua necessidade. Todas as nossas soluções foram desenvolvidas para funcionarem integradas quando você precisar."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none opacity-20" />
      
      <div className="container max-w-3xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Perguntas{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre as soluções MentoArk
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={200}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass rounded-2xl px-6 border-border/50 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};
