import React from 'react';
import { Github, Linkedin, Mail, FileText, ExternalLink, ChevronDown } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const handleResumeClick = () => {
    window.open('https://drive.google.com/drive/u/2/folders/1haNfdPMJ97S7Vqqec1YWYuppvLYUwBh2', '_blank');
  };

  const handleConnectClick = () => {
    window.open('https://www.linkedin.com/in/itsmemauliii', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Hero onResumeClick={handleResumeClick} onConnectClick={handleConnectClick} />
      <About />
      <Contact />
    </div>
  );
}

export default App;