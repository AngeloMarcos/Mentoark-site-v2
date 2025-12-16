import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

interface HeaderProps {
  onOpenChat: () => void;
}

export const Header = ({ onOpenChat }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <img 
          src="/images/logo-mentoark.png" 
          alt="MentoArk - Automação no WhatsApp" 
          className="h-8 md:h-10 object-contain"
        />
        
        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/configurar-agente">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground gap-1.5 text-xs md:text-sm"
            >
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Área do Cliente</span>
            </Button>
          </Link>
          
          <Button
            onClick={onOpenChat}
            className="bg-gradient-accent glow-orange text-sm md:text-base"
            size="sm"
          >
            Falar Conosco
          </Button>
        </div>
      </div>
    </header>
  );
};
