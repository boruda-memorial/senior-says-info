
import React from 'react';
import { AlertCircle, FileX, Clock, Users, Clipboard } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    {
      icon: FileX,
      text: "Notes are often handwritten or from memory"
    },
    {
      icon: AlertCircle,
      text: "Emotional cues and key insights get lost"
    },
    {
      icon: Clock,
      text: "Volunteers spend extra time re-entering data"
    },
    {
      icon: Users,
      text: "Hard to track which seniors need follow-up"
    }
  ];

  const hiddenTasks = [
    {
      icon: Clipboard,
      text: "They need to digitise forms at the centre after visits"
    },
    {
      icon: Users,
      text: "And remember key details to build meaningful engagement"
    },
    {
      icon: AlertCircle,
      text: "They have to observe and record senior's well-being"
    },
    {
      icon: Clock,
      text: "They need to flag details with staff for timely follow-up"
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Current Challenges</h2>
            
            <div className="bg-orange-500 rounded-2xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <AlertCircle className="mr-3 h-8 w-8" />
                PAIN POINTS
              </h3>
              <div className="space-y-4">
                {painPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <point.icon className="h-5 w-5 flex-shrink-0" />
                      <p className="text-orange-100">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Hidden Complexity</h2>
            
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-6">
                THEY ALSO HAVE HIDDEN TASKS
              </h3>
              <div className="space-y-6">
                {hiddenTasks.map((task, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-200 rounded-full p-3 flex-shrink-0">
                      <task.icon className="h-5 w-5 text-blue-700" />
                    </div>
                    <p className="text-gray-700 pt-2">{task.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
