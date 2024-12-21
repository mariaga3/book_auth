import React from 'react';
import { Calendar, Crown, MessageSquare } from 'lucide-react';

const LearningSection = () => {
  const features = [
    {
      icon: <Calendar className="w-12 h-12 text-gray-800" />,
      title: "Strategic Career Planning",
      description: "Learn how to plan and develop your career path strategically for long-term success and growth."
    },
    {
      icon: <Crown className="w-12 h-12 text-gray-800" />,
      title: "Effective Personal Branding",
      description: "Discover techniques to build and maintain a strong personal brand that sets you apart in your industry."
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-gray-800" />,
      title: "Negotiation Skills",
      description: "Master the art of negotiation to advance your career and achieve your professional goals."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 py-16 sm:px-6 lg:px-8 bg-primary">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What will you learn
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Highlighting your strengths is important. Let's offer potential customers a clear view of what sets you apart from the competition.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center">
              <div className="bg-primary rounded-full p-6 inline-block">
                {feature.icon}
              </div>
            </div>
            <h3 className="mt-8 text-2xl font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-4 text-lg text-gray-500">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningSection;