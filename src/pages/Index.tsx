import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { StatsCounter } from "@/components/StatsCounter";
import { UseCases } from "@/components/UseCases";
import { Differentials } from "@/components/Differentials";
import { Benefits } from "@/components/Benefits";
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
        <HowItWorks />
        <StatsCounter />
        <UseCases />
        <Differentials />
        <Benefits />
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
