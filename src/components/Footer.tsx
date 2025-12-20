import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Soluções", href: "#casos-de-uso" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "FAQ", href: "#faq" },
];

export const Footer = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "+55 11 99999-9999";
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border/50 py-16 px-4 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo e Descrição */}
          <div className="md:col-span-2 space-y-4">
            <img 
              src="/images/logo-mentoark.png" 
              alt="MentoArk" 
              className="h-10 object-contain"
            />
            <p className="text-muted-foreground max-w-sm">
              Transformamos seu WhatsApp em uma secretária digital que trabalha 24 horas por dia, 
              integrando com seus sistemas e automatizando processos.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Links Rápidos</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contato</h3>
            <div className="space-y-3 text-sm">
              <a 
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{whatsappNumber}</span>
              </a>
              <a 
                href="mailto:contato@mentoark.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>contato@mentoark.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MentoArk. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/politica-privacidade" className="hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos-uso" className="hover:text-primary transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
