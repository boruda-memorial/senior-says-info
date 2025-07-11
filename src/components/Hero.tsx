
import React from 'react';
import { Mic, Users, Clock, BarChart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Listen, Connect, Remember
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Isolated seniors often need connection, and care that builds over time. 
              Volunteers play this vital role in reaching out but...
            </p>
            
            <div className="bg-blue-800 rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Mic className="mr-3 h-8 w-8 text-orange-500" />
                VOICE-FIRST DIGITAL NOTETAKER
              </h3>
              <p className="text-blue-100">
                Helps senior volunteers quickly capture, summarise, and share key insights from 
                house visits without the paperwork. Built to reduce admin work and help 
                volunteers focus on connecting with seniors.
              </p>
            </div>

            <a 
              href="#signup" 
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
            >
              Get Early Access
            </a>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center mb-3">
                <Users className="h-8 w-8 text-orange-500 mr-3" />
                <span className="text-3xl font-bold text-orange-500">100-200</span>
              </div>
              <p className="text-blue-100">Inactive seniors per volunteer</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center mb-3">
                <Clock className="h-8 w-8 text-orange-500 mr-3" />
                <span className="text-3xl font-bold text-orange-500">30-60</span>
              </div>
              <p className="text-blue-100">mins per visit to connect</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center mb-3">
                <BarChart className="h-8 w-8 text-orange-500 mr-3" />
                <span className="text-3xl font-bold text-orange-500">Up to 50%</span>
              </div>
              <p className="text-blue-100">occupied in logistics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
