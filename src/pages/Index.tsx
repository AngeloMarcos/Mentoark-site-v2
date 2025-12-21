import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Solutions } from "@/components/Solutions";
import { WhyMentoArk } from "@/components/WhyMentoArk";
import { UseCases } from "@/components/UseCases";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

const Index = () => {
  const handleOpenChat = () => {
    const chatElement = document.querySelector('[data-chat-widget]');
    if (chatElement) {
      chatElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    
    const chatButton = document.querySelector('[data-chat-button]');
    if (chatButton instanceof HTMLElement) {
      chatButton.click();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenChat={handleOpenChat} />
      
      <main className="pt-16 md:pt-20">
        <Hero onOpenChat={handleOpenChat} />
        <WhatWeDo />
        <Solutions onOpenChat={handleOpenChat} />
        <WhyMentoArk />
        <UseCases />
        <Testimonials />
        <FAQ />
        <FinalCTA onOpenChat={handleOpenChat} />
      </main>
      
      <div data-chat-widget>
        <ChatWidget />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
