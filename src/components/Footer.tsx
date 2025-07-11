
import React from 'react';
import { MessageCircle, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-orange-500 text-white p-2 rounded-xl">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">SeniorSays</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering volunteers to connect meaningfully with seniors through 
              voice-first digital notetaking technology.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#signup" className="hover:text-white transition-colors">Early Access</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="https://forms.gle/B2jfUqkZTVGbXgVv8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Get Updates</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for senior care volunteers</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
