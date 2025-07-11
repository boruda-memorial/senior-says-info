
import React from 'react';
import { ExternalLink, Mail, Bell } from 'lucide-react';

const SignupSection = () => {
  return (
    <section id="signup" className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="mb-8">
          <Bell className="h-16 w-16 text-orange-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Senior Care?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our early access program and be among the first to experience 
            how SeniorSays can revolutionize volunteer work with seniors.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <Mail className="mr-3 h-8 w-8 text-orange-500" />
            Sign Up for Updates
          </h3>
          <p className="text-blue-100 mb-6">
            Get notified when SeniorSays becomes available and receive exclusive insights 
            about improving senior volunteer programs.
          </p>
          
          <a 
            href="https://forms.gle/B2jfUqkZTVGbXgVv8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
          >
            Sign Up for Updates
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-sm text-blue-200">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span>Early access notifications</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span>Product updates</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span>Senior care insights</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
