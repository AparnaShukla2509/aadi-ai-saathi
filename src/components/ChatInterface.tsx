
import { useState, useRef, useEffect } from "react";
import { SendHorizonal, Mic, Image, Paperclip, SquareUser, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: number;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export function ChatInterface() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "नमस्ते! I'm Aadi, your AI Saathi. How can I assist you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (in a real app, this would be an API call)
    setTimeout(() => {
      const sampleResponses = [
        "I understand your question. Let me provide a helpful response based on my knowledge.",
        "That's an interesting query! Here's what I know about this topic...",
        "मैं आपकी सहायता करने के लिए तैयार हूँ। आपके प्रश्न का उत्तर यह है...",
        "I can help you with that! Would you like me to create some notes or provide more detailed information?",
        "Great question! This is a complex topic, so let me break it down step by step...",
      ];
      
      const aiMessage: Message = {
        id: messages.length + 2,
        content: sampleResponses[Math.floor(Math.random() * sampleResponses.length)],
        sender: "ai",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleVoiceInput = () => {
    toast({
      title: "Voice Input",
      description: "Voice input feature will be available soon!",
    });
  };

  const handleImageUpload = () => {
    toast({
      title: "Image Upload",
      description: "Image upload feature will be available soon!",
    });
  };

  const handleAttachment = () => {
    toast({
      title: "Attachments",
      description: "Attachment feature will be available soon!",
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] pt-16">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            } mb-4`}
          >
            {message.sender === "ai" && (
              <Avatar className="h-8 w-8 mr-2">
                <BrainCircuitIcon className="h-5 w-5 text-aadi-primary" />
              </Avatar>
            )}
            <div
              className={`max-w-[80%] md:max-w-[70%] p-3 ${
                message.sender === "user"
                  ? "chat-bubble-user"
                  : "chat-bubble-ai"
              }`}
            >
              <p className="text-sm md:text-base">{message.content}</p>
              <div
                className={`text-xs mt-1 ${
                  message.sender === "user"
                    ? "text-white/70"
                    : "text-gray-500"
                }`}
              >
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
            {message.sender === "user" && (
              <Avatar className="h-8 w-8 ml-2">
                <SquareUser className="h-5 w-5" />
              </Avatar>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <Avatar className="h-8 w-8 mr-2">
              <BrainCircuitIcon className="h-5 w-5 text-aadi-primary" />
            </Avatar>
            <div className="chat-bubble-ai p-4">
              <Loader2 className="h-5 w-5 animate-spin text-aadi-primary" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t bg-background p-4">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Aadi anything..."
            className="min-h-[80px] resize-none rounded-xl border-gray-300 focus:border-aadi-primary"
          />
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handleVoiceInput}
                className="rounded-full"
              >
                <Mic className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handleImageUpload}
                className="rounded-full"
              >
                <Image className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handleAttachment}
                className="rounded-full"
              >
                <Paperclip className="h-4 w-4" />
              </Button>
            </div>
            <Button
              type="submit"
              className="bg-aadi-primary hover:bg-aadi-primary/90 rounded-full px-4"
              disabled={!input.trim() || isLoading}
            >
              <SendHorizonal className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Custom icon component
function BrainCircuitIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 9.5 21.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 2.96-3.08 2.5 2.5 0 0 0 3.3-2.08 3 3 0 0 0-.34-5.58 2.5 2.5 0 0 0 1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5" />
      <path d="M12 4.5V19" />
      <path d="m5 8 2 2" />
      <path d="m17 8-2 2" />
      <path d="M12 12h4" />
      <path d="M12 16h4" />
      <path d="M8 16h0" />
    </svg>
  );
}
