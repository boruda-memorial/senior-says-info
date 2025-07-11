
import React from 'react';
import { Mic2, FileText, Zap, BarChart3, Users, MessageSquare } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Mic2,
      title: "Records answers",
      description: "Voice-first recording captures conversations naturally"
    },
    {
      icon: FileText,
      title: "Transcribes",
      description: "Automatically converts speech to text"
    },
    {
      icon: Zap,
      title: "Auto-Fill Forms",
      description: "WE AUTOMATED IT! No more manual form filling"
    },
    {
      icon: BarChart3,
      title: "Auto-Summarise Data",
      description: "Key insights extracted automatically"
    },
    {
      icon: Users,
      title: "Insights for staff",
      description: "Meaningful data for better senior care"
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            How SeniorSays Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our voice-first digital notetaker streamlines the entire process from recording to insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <feature.icon className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-900 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Real Conversation Example</h3>
              <div className="bg-white text-gray-800 rounded-lg p-4 mb-4">
                <p className="italic">
                  "Tan: <span className="bg-orange-200 px-1 rounded">I need</span> to change a lightbulb but I 
                  can't reach it. I was thinking of asking my neighbour 
                  <span className="bg-orange-200 px-1 rounded">Lan</span> but I have <span className="bg-orange-200 px-1 rounded">not seen</span> her..."
                </p>
              </div>
              <div className="bg-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-200 mb-2">✨ Insights: Check on neighbour Lan's well being</p>
                <p className="text-sm">
                  <strong>Volunteer:</strong> Okay, I'll see if I can find someone to help you with that tomorrow morning.
                </p>
              </div>
            </div>
            <div className="text-center">
              <MessageSquare className="h-24 w-24 text-orange-500 mx-auto mb-4" />
              <p className="text-blue-200">Transcribing and Summarising</p>
              <div className="flex items-center justify-center mt-4 space-x-4">
                <span className="text-sm">01:04</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-orange-200 rounded-full"></div>
                </div>
                <span className="text-sm">09:54</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
