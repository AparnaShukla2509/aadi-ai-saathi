
import { 
  BrainCircuit, BookOpen, Video, Briefcase, FileType, 
  ImageIcon, Calendar, Sparkles, Cloud, Shirt, BookOpen as Book
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </div>
  );
}

export function FeatureSection() {
  const features = [
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "Universal Knowledge",
      description: "Get answers from Google, YouTube, ChatGPT, Wikipedia, and more in one place."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Academic Assistant",
      description: "Generate comprehensive notes for any subject from Class 1-12 and beyond."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Text to Video",
      description: "Convert text into high-quality video with Indian English/Hindi voice."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Support",
      description: "Get help with job searching, resume building, and finding internships."
    },
    {
      icon: <FileType className="w-8 h-8" />,
      title: "Document Generator",
      description: "Create PDF notes, PPT presentations, and Word reports from a single prompt."
    },
    {
      icon: <ImageIcon className="w-8 h-8" />,
      title: "Image Recognition",
      description: "Analyze and describe any uploaded image with detailed object detection."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Daily Companion",
      description: "Track to-dos, set alarms, and get personalized habit suggestions."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Spiritual Guide",
      description: "Receive guidance for puja practices and wisdom from Bhagavad Gita."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Weather & News",
      description: "Get real-time weather updates and location-based news alerts."
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: "Fashion Advisor",
      description: "Receive personalized clothing and style recommendations."
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Life Wisdom",
      description: "Access relevant life advice for any age and situation."
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-aadi-dark dark:text-white">
            Your All-in-One <span className="text-aadi-primary">AI Saathi</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Aadi combines the power of multiple AI systems to provide comprehensive assistance for every aspect of your life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
