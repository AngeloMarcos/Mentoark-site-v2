import { Button } from "@/components/ui/button";

interface HeaderProps {
  onOpenChat: () => void;
}

export const Header = ({ onOpenChat }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <img 
          src="/images/logo-mentoark.png" 
          alt="MentoArk - Automação Inteligente" 
          className="h-8 md:h-10 object-contain"
        />
        
        <Button
          onClick={onOpenChat}
          className="bg-gradient-accent glow-orange text-sm md:text-base"
          size="sm"
        >
          Falar com IA
        </Button>
      </div>
    </header>
  );
};
