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

      let response = '';
      const lowerMessage = userMessage.toLowerCase();
      
      // Demo-specific responses
      if (lowerMessage.includes('demo')) {
        if (lowerMessage.includes('dataset')) {
          response = `Here's a demo of our AI datasets feature:

📊 Dataset Demo:
Input: "List chat datasets"
Output: 
1. OpenAssistant/oasst1 (Best for GPT-like conversations)
   - Multi-turn dialogues
   - Instruction-tuned
   - Crowd-sourced quality

2. DailyDialog (Alternative)
   - Everyday conversation scenarios
   - Emotional tone analysis

Would you like me to elaborate on how these datasets can be used in AI applications?`;
        } 
        else if (lowerMessage.includes('voice')) {
          response = `🎙️ Voice Input/Output Demo:
Input Languages: English, Hindi
Best Datasets: 
- Speech-to-Text: Common Voice (Mozilla)
- Text-to-Speech: LJSpeech

Sample Conversion:
✅ English: "Hello, how are you?"
📢 Hindi: "नमस्ते, आप कैसे हैं?"

Accuracy: ~90% for clear pronunciations
Supported Accents: Multiple Indian English and Hindi variants

Would you like to explore voice AI integration techniques?`;
        }
        else if (lowerMessage.includes('emotion')) {
          response = `😶‍🌫️ Emotion Recognition Demo:
Supported Detection Methods:
1. Facial Expression (Image)
   Dataset: RAVDESS/FER-2013
   Detectable Emotions: 
   - Happy 😊
   - Sad 😢
   - Angry 😠
   - Surprise 😮

2. Voice Tone Analysis
   Dataset: RAVDESS
   Emotional States:
   - Calm
   - Excited
   - Neutral
   - Frustrated

Example Input: [Hypothetical voice/image analysis]
Accuracy: 85-92% depending on context

Interested in emotion AI capabilities?`;
        }
        else {
          response = "I can demonstrate demos for datasets, voice processing, or emotion recognition. Try asking about a specific demo type!";
        }
      }
      // Topic-based responses
      else if (lowerMessage.includes('dataset') || lowerMessage.includes('data')) {
        response = "I see you're interested in AI datasets. You can view our recommended datasets in the sidebar by clicking on 'AI Datasets'. Would you like me to explain more about a specific type of dataset?";
      }
      // Technical questions
      else if (lowerMessage.includes('how') || lowerMessage.includes('what')) {
        if (lowerMessage.includes('supabase')) {
          response = "To integrate Supabase, click the green Supabase button in the top right corner. This will allow us to implement secure authentication, database storage, and AI features. Would you like me to explain more about what we can build with Supabase?";
        } else if (lowerMessage.includes('api') || lowerMessage.includes('backend')) {
          response = "For backend functionality, I recommend connecting to Supabase first. This will allow us to securely handle API keys and create backend services. Would you like to connect to Supabase now?";
        } else {
          response = "I understand you have a question about " + userMessage.toLowerCase().split(' ').slice(1).join(' ') + ". To provide the most accurate information, could you please specify what aspect you'd like to learn more about?";
        }
      }
      // Greetings
      else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        response = "नमस्ते! I'm here to help you with AI development. You can ask me about implementing AI features, working with datasets, or building your application. What would you like to know?";
      }
      // Gratitude
      else if (lowerMessage.includes('thank')) {
        response = "You're welcome! Feel free to ask if you need help with anything else. I'm here to assist with your AI development journey.";
      }
      // Action-oriented requests
      else if (lowerMessage.includes('add') || lowerMessage.includes('create') || lowerMessage.includes('implement')) {
        response = "I can help you implement that feature. To ensure we build it securely and efficiently, let's break it down into steps. Would you like me to explain the recommended approach?";
      }
      // Default response encouraging specificity
      else {
        response = "I understand you're interested in " + userMessage + ". To help you better, could you be more specific about what you'd like to achieve? For example, are you looking to implement a feature, learn about a concept, or solve a particular problem?";
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
