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
        previousTopics: [...new Set([...(prev.previousTopics || []), messageContext])].slice(-5),
        currentTopic: messageContext,
      }));
    }
  };

  const generateAIResponse = async (userMessage: string) => {
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      let response = '';
      const lowerMessage = userMessage.toLowerCase();

      // === Demos ===
      if (lowerMessage.includes('demo')) {
        if (lowerMessage.includes('dataset')) {
          // Input: "Show me a dataset demo"
          response = `Dataset Demo:
1. OpenAssistant/oasst1 – GPT-style, multi-turn, crowd-sourced
2. DailyDialog – Casual conversation, emotion-labeled

Want details on how to apply these in your AI project?`;
        } else if (lowerMessage.includes('voice')) {
          // Input: "Give me a voice input demo"
          response = `Voice Demo:
- Input: English, Hindi
- STT Dataset: Mozilla Common Voice
- TTS Dataset: LJSpeech

Would you like to build a real-time voice interface?`;
        } else if (lowerMessage.includes('emotion')) {
          // Input: "Can you show me emotion recognition demo?"
          response = `Emotion Recognition Demo:
- Image-based: FER-2013, RAVDESS
- Voice-based: RAVDESS
Detects: Happy, Sad, Angry, Calm, Excited, Frustrated

Want to add this to your app?`;
        } else {
          // Input: "Show me a demo"
          response = "I can demonstrate demos for datasets, voice input/output, or emotion recognition. Which one interests you?";
        }
      }

      // === Quiz ===
      else if (lowerMessage.includes('quiz') || lowerMessage.includes('question') || lowerMessage.includes('yes')) {
        // Input: "Can you give me a quiz?"
        response = `Quiz Time:

1. Why do passengers lurch forward in a car?
A) First Law ✅

2. What does F = ma mean?
C) Force = Mass × Acceleration ✅

3. What law explains balloon motion?
C) Third Law ✅`;
      }

      // === Newton's Laws ===
      else if (lowerMessage.includes('newton') || lowerMessage.includes('motion') || lowerMessage.includes('laws')) {
        // Input: "Explain Newton's Laws"
        response = `Here's a simple breakdown of Newton's three laws of motion:

1. First Law (Inertia): Object stays in current state unless acted upon  
2. Second Law: F = m × a  
3. Third Law: Every action has an equal and opposite reaction

Want a quiz on this?`;
      }

      // === Supabase or Backend ===
      else if (lowerMessage.includes('supabase')) {
        // Input: "How to connect Supabase?"
        response = `To integrate Supabase:
1. Click the green "Supabase" button
2. Enable Auth and Realtime
3. Start using AI securely

Need code examples?`;
      } else if (lowerMessage.includes('api') || lowerMessage.includes('backend')) {
        // Input: "How do I build an API?"
        response = `For backend functionality, connect to Supabase. It'll help handle APIs securely. Want to see setup code?`;
      }

      // === General "how" or "what" ===
      else if (lowerMessage.includes('how') || lowerMessage.includes('what')) {
        // Input: "What is machine learning?"
        response = `I understand you're asking about "${userMessage.trim()}". Could you clarify what aspect you'd like help with?`;
      }

      // === Greetings ===
      else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('नमस्ते')) {
        // Input: "Hello"
        response = "नमस्ते! I'm here to help with AI features, dataset selection, or app implementation. What would you like to explore?";
      }

      // === Gratitude ===
      else if (lowerMessage.includes('thank')) {
        // Input: "Thanks for your help!"
        response = "You're welcome! Let me know if there's anything else I can assist you with.";
      }

      // === Action-Oriented ===
      else if (lowerMessage.includes('add') || lowerMessage.includes('create') || lowerMessage.includes('implement')) {
        // Input: "Help me implement login"
        response = "I can help you implement that feature. To build it efficiently, shall I break it into steps for you?";
      }

      // === Default fallback ===
      else {
        // Input: "Tell me something cool"
        response = `I understand you're interested in "${userMessage}". Could you specify what you're trying to do—build, learn, or debug something?`;
      }

      addMessage(response, "ai", "response");
    } catch (error) {
      addMessage("Oops! Something went wrong. Please try again.", "ai", "error");
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
