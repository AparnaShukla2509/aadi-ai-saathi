
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Hero() {
  const [animateHand, setAnimateHand] = useState(false);
  
  return (
    <div className="relative overflow-hidden pt-16 pb-8 md:py-10 lg:py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-aadi-primary/5 to-aadi-accent/5 dark:from-aadi-primary/10 dark:to-aadi-accent/10 z-0" />
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center px-4">
          <div 
            className="relative inline-block mb-4"
            onMouseEnter={() => setAnimateHand(true)}
            onMouseLeave={() => setAnimateHand(false)}
          >
            <span className="text-4xl md:text-5xl">👋</span>
            <span className={`absolute top-0 left-0 text-4xl md:text-5xl transition-transform ${animateHand ? 'animate-wave' : ''}`}>👋</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Meet <span className="text-aadi-primary">Aadi</span>, Your AI 
            <span className="text-aadi-secondary"> Saathi</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-8">
            An all-in-one intelligent AI assistant that helps you in every aspect of your life.
            From answering questions to generating academic notes, Aadi is here to assist you!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md mx-auto">
            <Button className="bg-aadi-primary hover:bg-aadi-primary/90 text-white rounded-full px-8 py-6 text-lg flex items-center gap-2 group">
              Start Chatting
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" className="border-aadi-secondary text-aadi-secondary hover:bg-aadi-secondary/10 rounded-full px-8 py-6 text-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Explore Features
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            Your personal AI companion for study, work, and everyday life
          </div>
        </div>
      </div>
    </div>
  );
}
