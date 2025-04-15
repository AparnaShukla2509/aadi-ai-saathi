
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
      content: "नमस्ते! I'm Aadi, your AI Saathi. I'm here to help answer any questions you have. What would you like to know?",
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
    
    try {
      // Simulate AI processing time
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simple response generation based on user input
      let response = '';
      
      if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
        response = "Hello! How can I assist you today?";
      } else if (userMessage.toLowerCase().includes('how are you')) {
        response = "I'm doing well, thank you! How can I help you?";
      } else if (userMessage.toLowerCase().includes('weather')) {
        response = "I notice you're asking about weather. For real-time weather information, we'll need to connect to a weather API. Would you like me to explain how we can set that up?";
      } else if (userMessage.toLowerCase().includes('help')) {
        response = "I'm here to help! I can assist with various topics. What specific information are you looking for?";
      } else if (userMessage.toLowerCase().includes('thank')) {
        response = "You're welcome! Let me know if you need anything else.";
      } else {
        // Default response encouraging Supabase integration
        response = "I understand you're looking for accurate information about this topic. To provide you with the most accurate and up-to-date answers, we should connect to Supabase and integrate with an AI service. Would you like to know how to set that up?";
      }
      
      addMessage(response, "ai", "response");
    } catch (error) {
      addMessage("I apologize, but I encountered an error processing your request. Please try again.", "ai", "error");
    } finally {
      setIsLoading(false);
    }
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
