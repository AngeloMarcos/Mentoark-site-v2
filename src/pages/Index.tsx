import { useState, useRef } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";
import { ChatWidget } from "@/components/ChatWidget";

const Index = () => {
  const handleOpenChat = () => {
    // Just scroll to where the chat widget is located
    const chatElement = document.querySelector('[data-chat-widget]');
    if (chatElement) {
      chatElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    
    // Find and click the chat button if it exists
    const chatButton = document.querySelector('[data-chat-button]');
    if (chatButton instanceof HTMLElement) {
      chatButton.click();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenChat={handleOpenChat} />
      <div className="pt-16 md:pt-20">
        <Hero onOpenChat={handleOpenChat} />
        <Features />
        <HowItWorks />
        <CTA onOpenChat={handleOpenChat} />
      </div>
      
      <div data-chat-widget>
        <ChatWidget />
      </div>
    </div>
  );
};

export default Index;
