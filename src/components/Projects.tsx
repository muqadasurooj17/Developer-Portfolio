const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with Next.js and Tailwind CSS",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "https://muqadasurooj.netlify.app",
      github: "https://github.com/muqadasurooj17",
      image: "/portfolio-placeholder.jpg"
    },
    {
      title: "App Launch Web",
      description: "Web application for app launching and management",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://applaunchweb.netlify.app",
      github: "https://github.com/muqadasurooj17",
      image: "/applaunch-placeholder.jpg"
    },
    {
      title: "Academic Website",
      description: "Educational platform for academic institutions",
      tech: ["Next.js", "PHP", "MySQL"],
      link: "https://acadmicwebsite.netlify.app",
      github: "https://github.com/muqadasurooj17",
      image: "/academic-placeholder.jpg"
    },
    {
      title: "Perkchops",
      description: "E-commerce platform with modern UI/UX",
      tech: ["React", "Next.js", "Tailwind CSS"],
      link: "https://perkchops.com",
      github: "https://github.com/muqadasurooj17",
      image: "/perkchops-placeholder.jpg"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-cyan-400/20 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-blue-400/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 border border-purple-400/20 transform rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 group">
              <div className="h-48 bg-gradient-to-br from-cyan-600/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden">
                {/* Geometric overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-16 h-16 border border-cyan-400/30 rotate-45"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 border border-purple-400/30 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-blue-400/30 rotate-12"></div>
                </div>
                
                <div className="text-center text-white relative z-10">
                  <svg className="w-16 h-16 mx-auto mb-2 text-cyan-400 group-hover:text-cyan-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p className="text-sm opacity-75 font-mono">Project Preview</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 font-mono group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed font-mono">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-cyan-600/80 text-white px-3 py-1 rounded-full text-xs font-mono border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 font-mono"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-600/50 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 font-mono"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/muqadasurooj17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/70 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 border border-gray-600/50 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 font-mono"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

