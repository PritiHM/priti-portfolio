import React from "react";

const Projects = () => {
  // Data Science Category Project Data (Main Focus)
  const dataScienceProjects = [
    {
      title: "Online Course Recommendation System",
      description: "Developed a machine learning recommendation system to suggest personalized online courses using user preferences and course data.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
      technologies: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
      githubUrl: "https://github.com/PritiHM/Online-Course-Recommendation-System",
      liveUrl: "https://pritihm-diabetes-prediction-system-app-qa8ahw.streamlit.app/" 
    },
    {
      title: "CO₂ Emissions Prediction",
      description: "Built regression models to predict vehicle CO₂ emissions and compared multiple algorithms to select the best-performing model.",
image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80",      technologies: ["Python", "Pandas", "Scikit-learn", "Regression"],
      githubUrl: "https://github.com/PritiHM",
      liveUrl: ""
    },
    {
      title: "Spam Email Classification",
      description: "Developed a machine learning model to classify emails as Spam or Ham using NLP and text preprocessing.",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=600",
      technologies: ["Python", "NLP", "Scikit-learn", "Machine Learning"],
      githubUrl: "https://github.com/PritiHM",
      liveUrl: ""
    }
  ];

  // Frontend Category Project Data (Secondary Skill)
  const frontendProjects = [
    {
      title: "Nexus Urja Solutions",
      description: "Developed a responsive business website using React and Tailwind CSS with modern UI and optimized performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      technologies: ["React", "Tailwind CSS", "Vite", "UI Optimization"],
      githubUrl: "https://github.com/PritiHM",
      liveUrl: "https://nexus-urja-solutions.vercel.app/"
    },
    {
      title: "LPC Facility",
      description: "Built a responsive business website with clean UI, reusable components and mobile-first design.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
      technologies: ["React", "Tailwind CSS", "Component Architecture"],
      githubUrl: "https://github.com/PritiHM",
      liveUrl: "https://lpc-website-orange.vercel.app/"
    },
    {
      title: "Mishika Solutions",
      description: "Designed and developed a responsive frontend website using React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
      technologies: ["React", "Tailwind CSS", "Responsive Design"],
      githubUrl: "https://github.com/PritiHM",
      liveUrl: "https://mishika-solutions.vercel.app/"
    }
  ];

  // Premium Data Science Card Layout Component
  const DataScienceCard = ({ project }) => {
    return (
      <div className="group relative bg-white/60 backdrop-blur-xl border border-blue-100/80 rounded-3xl overflow-hidden shadow-xl shadow-blue-950/5 hover:shadow-2xl hover:shadow-blue-300/30 transition-all duration-500 hover:-translate-y-2.5 flex flex-col h-full">
        {/* Analytics Accent Strip */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 z-20" />
        
        {/* Core Zoom Image Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </div>

        {/* Card Data Content */}
        <div className="p-7 flex flex-col flex-grow justify-between relative z-20">
          <div className="space-y-3.5">
            <h4 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
              {project.title}
            </h4>
            <p className="text-[14px] text-slate-600 font-medium leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-5 pt-4 mt-auto">
            {/* Professional Subtle Data Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="text-[11px] font-bold tracking-wide px-3 py-1 bg-blue-50/70 text-blue-700 rounded-lg border border-blue-100/40"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-1">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 px-4 py-2.5 rounded-xl transition-all duration-300 w-full shadow-sm"
                >
                  <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 14.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  Repository
                </a>
              )}

              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-4 py-2.5 rounded-xl transition-all duration-300 w-full shadow-md shadow-blue-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Clean / Streamlined Frontend Card Layout Component
  const FrontendCard = ({ project }) => {
    return (
      <div className="group bg-white/40 backdrop-blur-md border border-slate-200/60 rounded-2xl overflow-hidden shadow-md shadow-slate-100 hover:shadow-xl hover:border-blue-200/60 transition-all duration-300 flex flex-col h-full">
        {/* Simpler Fixed Aspect Header Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-50 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Slimmer Padding Content Area */}
        <div className="p-5 flex flex-col flex-grow justify-between">
          <div className="space-y-2.5">
            <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
              {project.title}
            </h4>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-4 pt-3 mt-auto">
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="text-[10px] font-semibold px-2 py-0.5 bg-slate-100 text-slate-600 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2.5 pt-0.5">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-slate-600 hover:text-slate-900 transition-colors py-1"
                >
                  Code ↗
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-blue-600 hover:text-blue-800 transition-colors py-1 ml-auto"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="projects" 
      className="relative w-full bg-gradient-to-b from-[#F6F9FD] to-[#FFFFFF] text-slate-900 py-24 lg:py-32 overflow-hidden font-sans border-t border-slate-100/80 selection:bg-blue-600/10"
    >
      {/* Immersive Mathematical Ambient Blur Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-12 right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-blue-600/5 to-cyan-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-24 left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/5 to-blue-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 space-y-20 lg:space-y-28">
        
        {/* ==========================================
            RECRUITER-TARGETED GLOBAL HEADER
           ========================================== */}
        <div className="max-w-3xl space-y-4">
          <span className="text-[11px] uppercase tracking-widest font-black text-blue-600 bg-blue-50/80 px-3.5 py-1.5 rounded-xl border border-blue-100 inline-block">
            Data & Interface Architecture
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
            My <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
            Showcasing my Machine Learning, Data Science, and selected Frontend Development projects.
          </p>
        </div>

        {/* ==========================================
            PRIMARY FOCUS: DATA SCIENCE & MACHINE LEARNING
           ========================================== */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/60 pb-5">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xl text-white shadow-md shadow-blue-200">
                📊
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight text-slate-900">Data Science & Machine Learning</h3>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mt-0.5">Core Domain • Predictive Systems & Modelling</p>
              </div>
            </div>
            <span className="text-xs font-medium text-slate-400 bg-slate-50 border border-slate-200/60 px-3 py-1 rounded-lg self-start sm:self-center">
              Featured Intelligence
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataScienceProjects.map((project, idx) => (
              <DataScienceCard key={idx} project={project} />
            ))}
          </div>
        </div>

        {/* ==========================================
            SECONDARY FOCUS: ADDITIONAL FRONTEND PROJECTS
           ========================================== */}
        <div className="space-y-8 pt-6">
          <div className="flex items-center gap-3.5 border-b border-slate-200/40 pb-5">
            <div className="w-9 h-9 rounded-xl bg-slate-100/80 border border-slate-200 flex items-center justify-center text-md shadow-sm">
              💻
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight text-slate-800">Additional Frontend Projects</h3>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">Supporting Capabilities • UI & Clean Architecture</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-90 hover:opacity-100 transition-opacity duration-300">
            {frontendProjects.map((project, idx) => (
              <FrontendCard key={idx} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;