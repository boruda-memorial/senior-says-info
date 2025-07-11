
import React from 'react';
import { MessageCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-orange-500 text-white p-2 rounded-xl">
            <MessageCircle className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold text-blue-900">SeniorSays</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-700 hover:text-blue-900 transition-colors">Features</a>
          <a href="#benefits" className="text-gray-700 hover:text-blue-900 transition-colors">Benefits</a>
          <a href="#signup" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
