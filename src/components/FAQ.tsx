import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "Preciso mudar meu sistema atual?",
    answer: "Não! A MentoArk se integra ao sistema que você já usa. Seja prontuário eletrônico, CRM, sistema financeiro ou qualquer outro — nós conectamos tudo sem você precisar mudar nada na sua operação."
  },
  {
    question: "Funciona 24 horas por dia?",
    answer: "Sim! Sua automação funciona ininterruptamente, 24 horas por dia, 7 dias por semana. Seus clientes podem agendar, tirar dúvidas e receber atendimento a qualquer momento, inclusive feriados e finais de semana."
  },
  {
    question: "É personalizado para meu tipo de negócio?",
    answer: "Com certeza! Cada automação é desenvolvida especificamente para o seu negócio. Analisamos seus processos, entendemos suas necessidades e criamos fluxos que fazem sentido para sua realidade."
  },
  {
    question: "Posso integrar com sistema financeiro e de vendas?",
    answer: "Sim! Integramos com sistemas de pagamento, emissão de notas, controle de estoque, PDV e muito mais. Quando um cliente faz uma compra pelo WhatsApp, tudo é registrado automaticamente nos seus sistemas."
  },
  {
    question: "É difícil de usar depois de implementado?",
    answer: "Não! Após a implementação, a automação funciona sozinha. Você não precisa de conhecimento técnico para operar. E se precisar de ajustes, nossa equipe de suporte está sempre disponível para ajudar."
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
              Tire suas dúvidas sobre a automação MentoArk
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
