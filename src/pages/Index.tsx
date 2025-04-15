
import { useState } from "react";
import { AadiHeader } from "@/components/AadiHeader";
import { Hero } from "@/components/Hero";
import { FeatureSection } from "@/components/FeatureSection";
import { ChatInterface } from "@/components/ChatInterface";
import { SideFeatures } from "@/components/SideFeatures";
import { Button } from "@/components/ui/button";
import { MessageSquareText, X } from "lucide-react";

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);
  
  // For landing page view
  const LandingPageContent = () => (
    <div className="flex flex-col min-h-screen">
      <AadiHeader />
      <Hero />
      <FeatureSection />
    </div>
  );
  
  // For chat view (when user clicks "Start Chatting")
  const ChatInterfaceContent = () => (
    <div className="flex min-h-screen">
      <AadiHeader />
      <SideFeatures />
      <main className="flex-1 relative">
        <ChatInterface />
      </main>
    </div>
  );
  
  return (
    <>
      {chatOpen ? (
        <ChatInterfaceContent />
      ) : (
        <>
          <LandingPageContent />
          <div className="fixed bottom-6 right-6 z-20">
            <Button 
              onClick={() => setChatOpen(true)}
              className="bg-aadi-primary hover:bg-aadi-primary/90 h-14 w-14 rounded-full shadow-lg"
            >
              <MessageSquareText className="h-6 w-6" />
            </Button>
          </div>
        </>
      )}
      
      {chatOpen && (
        <div className="md:hidden fixed top-20 right-4 z-20">
          <Button 
            onClick={() => setChatOpen(false)}
            variant="outline"
            className="h-10 w-10 rounded-full border-gray-300"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      )}
    </>
  );
};

export default Index;
