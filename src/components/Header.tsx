import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onOpenChat: () => void;
}

const navLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Soluções", href: "#casos-de-uso" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "FAQ", href: "#faq" },
];

export const Header = ({ onOpenChat }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border/50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/images/logo-mentoark.png" 
              alt="MentoArk - Automação no WhatsApp" 
              className="h-8 md:h-10 object-contain"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={onOpenChat}
              className="bg-gradient-accent glow-orange text-accent-foreground"
            >
              Falar com Especialista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-2 animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="py-3 px-4 text-left text-foreground hover:bg-primary/10 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  onOpenChat();
                  setMobileMenuOpen(false);
                }}
                className="mt-2 bg-gradient-accent glow-orange text-accent-foreground"
              >
                Falar com Especialista
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
