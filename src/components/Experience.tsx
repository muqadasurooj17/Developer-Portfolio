const Experience = () => {
  const experiences = [
    {
      title: "Software Design Engineer",
      company: "Teresol (Pvt Ltd)",
      period: "02/2025 – Present",
      description: [
        "Built responsive apps with Vue.js, Java backend, and XState",
        "CI/CD with GitLab; API testing/debugging with Insomnia"
      ]
    },
    {
      title: "Software Engineer",
      company: "LimeSoftwareLogics",
      period: "10/2023 – 01/2025",
      description: [
        "Full-stack development with React.js, Node.js, Next.js, PHP/Laravel",
        "Designed RESTful APIs, Sequelize ORM, CI/CD with GitHub/GitLab"
      ]
    },
    {
      title: "Web Developer",
      company: "Perkchops (Remote, USA)",
      period: "07/2022 – 11/2022",
      description: [
        "Developed pixel-perfect UI with React.js, Next.js, Tailwind, Material-UI",
        "Optimized frontend performance and accessibility"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 border border-cyan-400/20 rotate-45"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-blue-400/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-purple-400/20 transform rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-400"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
              {/* Timeline dot */}
              <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-black shadow-lg ${index % 2 === 0 ? 'md:translate-x-2' : 'md:-translate-x-2'}`}></div>
              
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <h3 className="text-xl font-semibold text-white mb-2 font-mono">{exp.title}</h3>
                  <p className="text-cyan-400 font-medium mb-2 font-mono">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-4 font-mono">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-start font-mono">
                        <span className="text-cyan-400 mr-2 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

