'use client'

import { useEffect, useState } from 'react'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = ['Software Engineer', 'Full Stack Developer', 'Problem Solver']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-black relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        {/* Matrix-style grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 grid-rows-20 h-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="border border-cyan-500/20"></div>
            ))}
          </div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-cyan-400/30 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-purple-400/40 transform rotate-12 animate-spin"></div>
        <div className="absolute top-1/2 right-20 w-20 h-20 bg-gradient-to-tr from-green-500/20 to-blue-500/20 clip-path-polygon animate-pulse"></div>
        
        {/* Code rain effect */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-600/40 text-xs font-mono animate-pulse"
              style={{
                left: `${(i * 5) % 100}%`,
                animationDelay: `${(i * 0.1) % 2}s`,
                animationDuration: `${4 + (i * 0.1) % 2}s`
              }}
            >
              {['const', 'let', 'function', 'return', 'if', 'else', 'for', 'while'].map((word, j) => (
                <div key={j} className="mb-1">{word}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Developer Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-cyan-400 text-sm font-mono">Available for opportunities</span>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              &lt;Muqadas Urooj/&gt;
            </span>
          </h1>
          
          <div className="h-20 md:h-24 flex items-center justify-center mb-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 font-mono">
              <span className="text-cyan-400">const</span> role =
              <span className="text-yellow-400">&apos;{texts[currentText]}&apos;</span>
            </h2>
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-mono leading-relaxed">
          <span className="text-cyan-400">  Passionate about creating innovative solutions and building scalable applications</span>
          <br />
          <span className="text-cyan-400"> Young and passionate about technology and innovation</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#contact"
            className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#projects"
            className="group border-2 border-cyan-400 text-cyan-400 hover:text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:bg-cyan-400 hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
        </div>
        
        {/* Social Links with Geometric Design */}
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/muqadasurooj17" target="_blank" rel="noopener noreferrer" 
             className="group relative w-12 h-12 bg-gray-800/50 hover:bg-gray-700/70 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-600 hover:border-cyan-400">
            <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/muqadas-urooj/" target="_blank" rel="noopener noreferrer" 
             className="group relative w-12 h-12 bg-gray-800/50 hover:bg-gray-700/70 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-600 hover:border-blue-400">
            <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:muqadasurooj123@gmail.com" 
             className="group relative w-12 h-12 bg-gray-800/50 hover:bg-gray-700/70 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-600 hover:border-green-400">
            <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
