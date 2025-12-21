import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useSmoothNavigation } from "@/hooks/useSmoothNavigation";
import { useActiveSection } from "@/hooks/useActiveSection";

interface HeaderProps {
  onOpenChat: () => void;
}

const navLinks = [
  { label: "O que Fazemos", href: "#o-que-fazemos" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Casos de Uso", href: "#casos-de-uso" },
  { label: "FAQ", href: "#faq" },
];

const sectionIds = ["o-que-fazemos", "solucoes", "casos-de-uso", "faq"];

export const Header = ({ onOpenChat }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigateTo } = useSmoothNavigation({ offset: 80 });
  const activeSection = useActiveSection({ sectionIds, offset: 100 });

  const handleNavClick = (href: string) => {
    navigateTo(href);
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    const id = href.replace('#', '');
    return activeSection === id;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border/50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/images/logo-mentoark.png" 
              alt="MentoArk - Automação e Sistemas Inteligentes" 
              className="h-8 md:h-10 object-contain"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm transition-colors py-2 ${
                  isActive(link.href)
                    ? 'nav-link-active text-primary'
                    : 'nav-link text-muted-foreground hover:text-foreground'
                }`}
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
                  onClick={() => handleNavClick(link.href)}
                  className={`py-3 px-4 text-left rounded-lg transition-colors ${
                    isActive(link.href)
                      ? 'bg-primary/20 text-primary'
                      : 'text-foreground hover:bg-primary/10'
                  }`}
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
