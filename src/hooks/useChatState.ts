
import { useState } from 'react';

export interface Message {
  id: number;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
  context?: string;
}

export interface ChatContext {
  previousTopics: string[];
  userPreferences: {
    language: "english" | "hindi";
    tone: "formal" | "casual";
  };
  currentTopic?: string;
}

export const useChatState = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "नमस्ते! I'm Aadi, your AI Saathi. How can I assist you today?",
      sender: "ai",
      timestamp: new Date(),
      context: "greeting",
    },
  ]);
  
  const [context, setContext] = useState<ChatContext>({
    previousTopics: [],
    userPreferences: {
      language: "english",
      tone: "casual",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const addMessage = (content: string, sender: "user" | "ai", messageContext?: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      content,
      sender,
      timestamp: new Date(),
      context: messageContext,
    };
    
    setMessages((prev) => [...prev, newMessage]);
    
    if (messageContext) {
      setContext((prev) => ({
        ...prev,
        previousTopics: [...prev.previousTopics, messageContext].slice(-5),
        currentTopic: messageContext,
      }));
    }
  };

  const generateAIResponse = async (userMessage: string) => {
    setIsLoading(true);
    
    // Simulate AI response with context awareness
    const contextAwareResponses = [
      {
        condition: context.currentTopic === "greeting",
        response: "Hello! I remember we were just getting started. What can I help you with?",
      },
      {
        condition: context.previousTopics.includes("technical"),
        response: "Based on our previous technical discussion, let me provide a detailed answer...",
      },
      {
        condition: context.userPreferences.language === "hindi",
        response: "मैं आपकी सहायता करने के लिए तैयार हूँ। आपके पिछले सवाल के आधार पर...",
      },
    ];

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const defaultResponse = "I understand your question. Let me help you with that based on our conversation...";
    const response = contextAwareResponses.find((r) => r.condition)?.response || defaultResponse;
    
    addMessage(response, "ai", context.currentTopic);
    setIsLoading(false);
  };

  return {
    messages,
    context,
    isLoading,
    addMessage,
    generateAIResponse,
    setContext,
  };
};
