import React from 'react';

function About() {
  return (
    <div className="py-20 px-4 md:px-8 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070"
                alt="Professional workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-300">
              Passionate Full Stack Developer with expertise in modern web technologies.
              Committed to creating efficient, scalable, and user-friendly applications
              that solve real-world problems.
            </p>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-xl text-blue-400">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}