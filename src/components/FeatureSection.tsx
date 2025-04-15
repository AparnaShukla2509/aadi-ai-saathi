import React from "react";
import { BookOpen, Brain, FileText, Globe, Headphones, MessageSquare } from "lucide-react";

export function FeatureSection() {
  return (
    <section id="features-section" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Aadi's Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature Card 1 */}
          <div className="feature-card">
            <BookOpen className="feature-icon" />
            <h3 className="text-xl font-semibold mb-2">Academic Assistance</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get help with homework, research, and studying for exams. Aadi can provide explanations, summaries, and practice questions.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="feature-card">
            <Brain className="feature-icon" />
            <h3 className="text-xl font-semibold mb-2">Intelligent Answers</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Ask Aadi any question and receive accurate, concise answers. Aadi is trained on a vast amount of knowledge and can provide insights on a wide range of topics.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="feature-card">
            <FileText className="feature-icon" />
            <h3 className="text-xl font-semibold mb-2">Content Generation</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Generate high-quality content for essays, reports, presentations, and more. Aadi can help you brainstorm ideas, write outlines, and create compelling narratives.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="feature-card">
            <Globe className="feature-icon" />
            <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Communicate with Aadi in multiple languages. Aadi can translate text, provide answers in different languages, and help you learn new languages.
            </p>
          </div>

          {/* Feature Card 5 */}
          <div className="feature-card">
            <Headphones className="feature-icon" />
            <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Customize Aadi's responses to match your learning style and preferences. Aadi can adapt to your needs and provide personalized support.
            </p>
          </div>

          {/* Feature Card 6 */}
          <div className="feature-card">
            <MessageSquare className="feature-icon" />
            <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Access Aadi anytime, anywhere. Aadi is available 24/7 to answer your questions and provide assistance whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
