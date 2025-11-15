import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, Loader2, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Message {
  role: "user" | "bot";
  text: string;
  timestamp: string;
}

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Olá! 👋 Sou o assistente da MentoArk. Como posso ajudar você hoje?",
      timestamp: new Date().toISOString()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate or retrieve userId from localStorage
    let storedUserId = localStorage.getItem("mentoark_chat_user_id");
    if (!storedUserId) {
      storedUserId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("mentoark_chat_user_id", storedUserId);
    }
    setUserId(storedUserId);
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage = inputText.trim();
    setInputText("");

    // Add user message
    const newUserMessage: Message = {
      role: "user",
      text: userMessage,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, newUserMessage]);

    // Show typing indicator
    setIsLoading(true);

    try {
      // Call edge function
      const { data, error } = await supabase.functions.invoke("chat", {
        body: {
          userId,
          message: userMessage,
          metadata: {
            source: "site-mentoark",
            path: window.location.pathname
          }
        }
      });

      if (error) {
        console.error("Chat error:", error);
        
        // Check for specific error codes
        if (error.message?.includes("429") || error.message?.includes("Rate limit")) {
          throw new Error("Muitas requisições. Por favor, aguarde um momento.");
        }
        
        throw error;
      }

      if (!data?.ok) {
        throw new Error(data?.reply || "Erro ao processar mensagem");
      }

      // Add bot response
      const botMessage: Message = {
        role: "bot",
        text: data.reply,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, botMessage]);

    } catch (error: any) {
      console.error("Error sending message:", error);
      
      // Add fallback message with WhatsApp link
      const fallbackMessage: Message = {
        role: "bot",
        text: "No momento estou com dificuldades para responder por aqui. Para um atendimento imediato, clique no botão abaixo para falar direto no WhatsApp! 💬",
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, fallbackMessage]);
      
      toast.error(error.message || "Erro ao enviar mensagem");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/message/SFKOCU2RI45ZN1", "_blank");
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 w-14 h-14 md:bottom-6 md:right-6 md:w-16 md:h-16 rounded-full bg-gradient-accent glow-orange shadow-2xl hover:scale-110 transition-transform z-50 p-2"
          size="icon"
        >
          <img 
            src="/images/mascote-mentoark.png" 
            alt="Mascote MentoArk" 
            className="w-full h-full object-contain"
          />
        </Button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed inset-x-2 bottom-2 top-16 md:inset-auto md:bottom-6 md:right-6 md:w-[380px] md:h-[550px] lg:w-[400px] lg:h-[600px] glass rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border border-primary/30">
          {/* Header */}
          <div className="bg-gradient-primary p-3 md:p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center p-1">
                <img 
                  src="/images/mascote-mentoark.png" 
                  alt="Mascote MentoArk" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground text-sm md:text-base">Assistente MentoArk</h3>
                <p className="text-xs text-primary-foreground/80">Online agora</p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] md:max-w-[80%] rounded-2xl p-2.5 md:p-3 ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "glass"
                  }`}
                >
                  <p className="text-xs md:text-sm whitespace-pre-wrap">{msg.text}</p>
                  <p className="text-[10px] md:text-xs opacity-60 mt-1">
                    {new Date(msg.timestamp).toLocaleTimeString("pt-BR", {
                      hour: "2-digit",
                      minute: "2-digit"
                    })}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass rounded-2xl p-3 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  <span className="text-sm text-muted-foreground">Digitando...</span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* WhatsApp Button */}
          <div className="p-3 md:p-4 border-t border-border">
            <Button
              onClick={openWhatsApp}
              variant="outline"
              className="w-full border-accent/50 hover:bg-accent/10 text-accent text-xs md:text-sm"
              size="sm"
            >
              <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Input */}
          <div className="p-3 md:p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1 bg-secondary/50 border-border/50 text-sm"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={!inputText.trim() || isLoading}
                className="bg-primary hover:bg-primary/90"
                size="icon"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
