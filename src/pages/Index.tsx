import { useState, useRef } from "react";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";
import { ChatWidget } from "@/components/ChatWidget";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatWidgetRef = useRef<HTMLDivElement>(null);

  const handleOpenChat = () => {
    setIsChatOpen(true);
    // Scroll to chat widget after a brief delay to allow it to render
    setTimeout(() => {
      chatWidgetRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onOpenChat={handleOpenChat} />
      <Features />
      <HowItWorks />
      <CTA onOpenChat={handleOpenChat} />
      
      <div ref={chatWidgetRef}>
        <ChatWidget />
      </div>
    </div>
  );
};

export default Index;
