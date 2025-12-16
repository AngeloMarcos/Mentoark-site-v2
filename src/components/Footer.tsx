import { Phone, Mail } from "lucide-react";

export const Footer = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "+55 11 99999-9999";
  
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <img 
              src="/images/logo-mentoark.png" 
              alt="MentoArk" 
              className="h-8 object-contain"
            />
            <p className="text-sm text-muted-foreground">
              Automação no WhatsApp para transformar seu negócio digital.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contato</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>{whatsappNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@mentoark.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Links Rápidos</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#features" className="block hover:text-primary transition-colors">
                Funcionalidades
              </a>
              <a href="#how-it-works" className="block hover:text-primary transition-colors">
                Como Funciona
              </a>
              <a href="/remover-fundo" className="block hover:text-primary transition-colors">
                Remover Fundo de Imagens
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MentoArk. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
