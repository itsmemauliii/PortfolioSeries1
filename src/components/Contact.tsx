import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function Contact() {
  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Get In Touch
        </h2>
        
        <p className="text-gray-300 mb-8">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/itsmemauliii"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}