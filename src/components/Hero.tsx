import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onResumeClick: () => void;
  onConnectClick: () => void;
}

function Hero({ onResumeClick, onConnectClick }: HeroProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10"></div>
      
      <div className="z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Mauli Patel
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Data Science Professional & Tech Enthusiast
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onResumeClick}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all transform hover:scale-105"
          >
            View Resume
          </button>
          <button
            onClick={onConnectClick}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-all transform hover:scale-105"
          >
            Let's Connect
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </div>
  );
}