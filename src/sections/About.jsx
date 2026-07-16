import React from "react";

const About = () => {
  // Configured categorized skills with specific design accents to match the Home section
  const skillCategories = [
   {
  title: "Data Science, AI & MLOps",
  accent: "text-[#3B82F6]",
  skills: ["Python","SQL","Machine Learning","Deep Learning","Generative AI","Prompt Engineering","MLOps","Scikit-learn","Pandas","NumPy","Matplotlib", "Seaborn","EDA","Feature Engineering","Power BI"]
},
    {
      title: "Programming",
      accent: "text-[#00C2FF]",
      skills: ["Python", "Java", "JavaScript"]
    },
    {
      title: "Frontend Stack",
      accent: "text-[#22D3EE]",
      skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS"]
    },
    {
      title: "Tools & Environments",
      accent: "text-slate-500",
      skills: ["Git","GitHub","VS Code","Jupyter Notebook","Google Colab","Anaconda","MLflow","Postman","Excel","Power BI Desktop"]   
    }
  ];

  return (
    <section 
      id="about" 
      className="relative w-full bg-gradient-to-br from-[#F8FBFF] to-[#EAF6FF] text-[#111827] py-20 lg:py-28 overflow-hidden font-sans border-t border-blue-50 selection:bg-[#22D3EE]/30"
    >
      {/* ==========================================
          BACKGROUND AESTHETICS (FLOATING ELEMENTS)
         ========================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Glowing Ambient Circles matching Home.jsx */}
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#00C2FF]/8 rounded-full blur-[100px] animate-pulse duration-8000" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-[#3B82F6]/8 rounded-full blur-[120px] animate-pulse duration-10000" />
        
        {/* Tech Grid Pattern Subtle Overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* ==========================================
            TOP: HEADER & INTRODUCTION
           ========================================== */}
        <div className="max-w-4xl space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-[#3B82F6] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
            Get to know me
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
            About <span className="bg-gradient-to-r from-[#3B82F6] via-[#00C2FF] to-[#22D3EE] bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed">
            Hi, I'm <strong className="text-[#111827] font-semibold">Priti Harshal Mahajan</strong>, an aspiring Data Scientist with a strong Computer Science background and hands-on experience in Frontend Development. I enjoy transforming raw data into meaningful insights using Python, SQL, Machine Learning, Data Analysis, and Power BI while building responsive and user-friendly web applications.
          </p>
        </div>

        {/* ==========================================
            MIDDLE: WHAT I DO (4 CORE GLASS CARDS)
           ========================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Data Analysis", desc: "Extracting complex statistical insights, cleaning data tables, and generating actionable growth metrics.", icon: "📊", border: "hover:border-[#00C2FF]/30" },
            { title: "Machine Learning", desc: "Developing supervised and unsupervised algorithms to classify datasets and predict trends.", icon: "🤖", border: "hover:border-[#3B82F6]/30" },
            { title: "Power BI", desc: "Designing premium, interactive business intelligence dashboards for clear analytical overview.", icon: "📈", border: "hover:border-amber-400/30" },
            { title: "Frontend Development", desc: "Engineering high-fidelity layouts and fully custom responsive interfaces using React and Tailwind CSS.", icon: "💻", border: "hover:border-[#22D3EE]/30" },
 ].map((card, idx) => (
            <div 
              key={idx}
              className={`group p-6 rounded-3xl bg-white/40 backdrop-blur-md border border-white/80 shadow-lg shadow-blue-900/5 flex flex-col justify-between transition-all duration-300 hover:scale-[1.03] hover:bg-white/50 ${card.border}`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-blue-50 shadow-sm flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-[#111827] tracking-tight mb-2">{card.title}</h3>
                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-medium">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ==========================================
            TECH STACK: RESPONSIVE SKILL GRID
           ========================================== */}
        <div className="space-y-6">
          <h3 className="text-xl font-extrabold text-[#111827] flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#3B82F6] rounded-full inline-block" />
            Skills & Toolsets
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-blue-50/80 shadow-sm space-y-4 hover:border-blue-100/50 transition-colors"
              >
                <h4 className={`text-xs font-bold uppercase tracking-wider ${cat.accent}`}>{cat.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="text-xs font-semibold px-3 py-1.5 bg-white rounded-lg border border-gray-100 text-[#6B7280] hover:border-[#00C2FF]/40 hover:text-[#111827] transition-all duration-300 shadow-sm cursor-default hover:-translate-y-0.5"
                    >
                      ✔ {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
            BOTTOM: EXPERIENCE & EDUCATION ROADMAP
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          
          {/* LEFT: Experience Timeline (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-extrabold text-[#111827] flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#3B82F6] rounded-full inline-block" />
              Work History
            </h3>

            <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-blue-50/80 shadow-md relative group hover:border-[#3B82F6]/20 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
                <div>
                  <h4 className="text-base sm:text-lg font-extrabold text-[#111827]">Former Frontend Developer Intern</h4>
                  <p className="text-xs font-semibold text-[#6B7280] mt-0.5">Reet Technology, Katraj</p>
                </div>
                <span className="self-start sm:self-center text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md border border-emerald-100 whitespace-nowrap">
                  Completed (March 2026)
                </span>
              </div>
              
              <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">My Responsibilities:</h5>
             <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
  {[
    "Developed responsive React applications.",
    "Integrated REST APIs.",
    "Currently building Data Science & Machine Learning projects.",
    "Worked with Git & GitHub for version control."
  ].map((item, keyIdx) => (
    <li key={keyIdx} className="flex items-start gap-2">
      <span className="text-[#3B82F6]">⚡</span>
      {item}
    </li>
  ))}
</ul>
            </div>
          </div>

          {/* RIGHT: Education Timeline Cards (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-extrabold text-[#111827] flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#3B82F6] rounded-full inline-block" />
              Education History
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { 
                  degree: "B.Sc. Computer Science", 
                  meta: "Dr. Annasaheb G. D. Bendale Mahila College, Jalgaon", 
                  year: "Class of 2022",
                  featured: true 
                },
                { 
                  degree: "Java Backend Developer Course", 
                  meta: "Cyber Success Institute, Deccan, Pune", 
                  year: "2024",
                  featured: true 
                },
                { 
                  degree: "Data Science Certification", 
                  meta: "ExcelR", 
                  year: "Professional Credentials",
                  featured: true 
                },
                { 
                  degree: "Certificate Course in Cascading Web Design (CSS)", 
                  meta: "Dr. Annasaheb G. D. Bendale Mahila College, Jalgaon", 
                  year: "2020",
                  featured: true 
                },
    
                { 
                  degree: "HSC (Science Stream)", 
                  meta: "Nashik Divisional Board", 
                  year: "Completed 2019",
                  featured: true 
                },
                { 
                  degree: "SSC", 
                  meta: "Nashik Divisional Board", 
                  year: "Completed 2017",
                  featured: true 
                }
              ].map((edu, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    edu.featured 
                      ? "bg-white border-[#3B82F6]/10 shadow-md shadow-blue-50" 
                      : "bg-white/40 border-blue-50/50 shadow-sm"
                  }`}
                >
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">{edu.degree}</h4>
                      <p className="text-xs font-semibold text-gray-400 mt-0.5">{edu.meta}</p>
                    </div>
                    <span className="text-[10px] font-bold text-[#3B82F6] bg-blue-50 px-2 py-0.5 rounded whitespace-nowrap">
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;