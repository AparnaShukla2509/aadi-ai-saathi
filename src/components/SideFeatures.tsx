import { BrainCircuit, Image, MessageSquareText, FileType, PenTool, Languages, Database } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { DatasetInfo } from "./DatasetInfo";

const features = [
  {
    id: "chat",
    name: "Chat",
    description: "Chat with Aadi about anything",
    icon: <MessageSquareText />,
  },
  {
    id: "image",
    name: "Image Recognition",
    description: "Upload and analyze images",
    icon: <Image />,
    comingSoon: true,
  },
  {
    id: "documents",
    name: "Generate Documents",
    description: "Create PDFs, PPTs, and more",
    icon: <FileType />,
    comingSoon: true,
  },
  {
    id: "notes",
    name: "Academic Notes",
    description: "Create study materials",
    icon: <PenTool />,
    comingSoon: true,
  },
  {
    id: "datasets",
    name: "AI Datasets",
    description: "View available AI datasets",
    icon: <Database />,
  },
];

export function SideFeatures() {
  const [activeFeature, setActiveFeature] = useState("chat");

  return (
    <div className="hidden md:flex flex-col w-56 lg:w-64 border-r bg-background h-full pt-16">
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-aadi-primary" />
          <span className="font-medium">Aadi Features</span>
        </div>
        <LanguageSwitcher />
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <nav className="space-y-1 px-2 py-2">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => !feature.comingSoon && setActiveFeature(feature.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors",
                activeFeature === feature.id
                  ? "bg-aadi-primary/10 text-aadi-primary"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                feature.comingSoon && "opacity-50 cursor-not-allowed"
              )}
            >
              <div className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full",
                activeFeature === feature.id 
                  ? "bg-aadi-primary/20" 
                  : "bg-gray-100 dark:bg-gray-800"
              )}>
                {feature.icon}
              </div>
              <div className="text-left">
                <div className="font-medium">{feature.name}</div>
                {feature.comingSoon && (
                  <div className="text-xs text-aadi-secondary">Coming soon</div>
                )}
              </div>
            </button>
          ))}
        </nav>
        
        {activeFeature === "datasets" && <DatasetInfo />}
      </div>
      
      <div className="border-t p-4">
        <div className="bg-aadi-accent/10 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Languages className="h-5 w-5 text-aadi-accent" />
            <span className="font-medium text-aadi-accent">Multilingual</span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Aadi supports English, Hindi, and multiple Indian languages
          </p>
        </div>
      </div>
    </div>
  );
}
