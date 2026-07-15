import React from "react";

const Home = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen lg:min-h-[calc(100vh-80px)] w-full overflow-x-hidden flex items-center bg-gradient-to-tr from-[#F8FBFF] to-[#EAF6FF] text-[#111827] font-sans selection:bg-[#22D3EE]/30"
    >
      {/* ==========================================
          BACKGROUND AESTHETICS (FLOATING ELEMENTS)
          ========================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Glowing Blurred Ambient Circles */}
        <div className="absolute top-1/4 left-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#00C2FF]/10 rounded-full blur-[60px] sm:blur-[100px] animate-pulse duration-7000" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#3B82F6]/10 rounded-full blur-[80px] sm:blur-[120px] animate-pulse duration-10000" />
        
        {/* Tech Grid Pattern Subtle Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* ==========================================
          MAIN WRAPPER & CONTAINER
          ========================================== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* ------------------------------------------
            LEFT CONTENT (45%)
            ------------------------------------------ */}
        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          {/* Circular Professional Profile Frame */}
          <div className="relative group p-1.5 rounded-full bg-white shadow-xl shadow-blue-100/40 border border-blue-50/80 transition-all duration-500 hover:scale-105 animate-[float_6s_ease-in-out_infinite]">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#00C2FF]">
              {/* Point this directly to your asset folder path (e.g., inside public/) */}
              <img 
                src="/priti-profile.jpg" 
                alt="Priti Harshal Mahajan"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
            {/* Soft decorative light indicator */}
            <span className="absolute bottom-1 right-2 sm:right-3 flex h-3.5 w-3.5 sm:h-4 sm:w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-[#00C2FF]"></span>
            </span>
          </div>

          {/* Greeting & Headline */}
          <div className="space-y-3 w-full">
            <div className="flex justify-center lg:justify-start">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-[#3B82F6] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Welcome to my space
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#111827] leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-[#3B82F6] via-[#00C2FF] to-[#22D3EE] bg-clip-text text-transparent block sm:inline">Priti Mahajan</span>
            </h1>
          </div>

          {/* Subtitle */}
          <h2 className="text-lg sm:text-2xl font-semibold text-[#3B82F6] tracking-wide">
            Aspiring Data Scientist
          </h2>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 max-w-md">
            {["Python", "Machine Learning", "SQL", "Power BI", "Data Analytics"].map((tech) => (
              <span 
                key={tech} 
                className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-md bg-white/60 backdrop-blur-sm border border-blue-100/80 text-[#6B7280] shadow-sm transition-all duration-300 hover:border-[#00C2FF]/40 hover:text-[#111827]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Concise Business Action Intro Paragraph */}
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-lg px-2 sm:px-0">
            I build intelligent data-driven solutions using Machine Learning, Python, SQL, Power BI, and Data Analytics to solve real-world business problems.
          </p>

          {/* Action Call buttons */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4 pt-2 px-4 sm:px-0">
            <a
              href="\PRITI MAHAJAN-resume26.pdf"
              download
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] text-white text-center font-medium rounded-xl shadow-lg shadow-blue-400/20 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-400/30 focus:outline-none focus:ring-2 focus:ring-[#00C2FF]/50"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#111827] text-center font-medium rounded-xl border border-blue-100 shadow-sm backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.03] hover:bg-gray-50 hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              View Projects
            </a>
          </div>

        </div>

        {/* ------------------------------------------
            RIGHT CONTENT - HERO ILLUSTRATION (55%)
            ------------------------------------------ */}
        <div className="w-full lg:w-[55%] flex items-center justify-center relative min-h-[340px] sm:min-h-[480px]">
          
          {/* Central Cosmic Matrix Mesh Area Container */}
          <div className="relative w-full max-w-[340px] sm:max-w-[480px] aspect-square flex items-center justify-center">
            
            {/* Core Animated Dashboard Interface Mock (Glassmorphism Center) */}
            <div className="absolute w-11/12 sm:w-[80%] h-[70%] bg-white/40 backdrop-blur-md rounded-3xl border border-white/60 shadow-2xl shadow-blue-900/5 p-4 sm:p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-3xl hover:bg-white/50">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 sm:w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 sm:w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-2.5 h-2.5 sm:w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">MODEL_TRAINING.py</span>
              </div>
              
              {/* Minimalist Data Visual Line Representation Component */}
              <div className="flex-1 flex items-end space-x-1.5 sm:space-x-2 pt-6 pb-2 px-1">
                {[40, 65, 45, 85, 55, 95, 70, 100].map((height, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                    <div 
                      style={{ height: `${height}%` }}
                      className="w-full bg-gradient-to-t from-[#3B82F6] to-[#22D3EE] rounded-t-sm transition-all duration-1000 origin-bottom scale-y-100"
                    />
                  </div>
                ))}
              </div>

              {/* Status Row */}
              <div className="flex justify-between items-center bg-white/70 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 border border-blue-50 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-ping"/>
                  <span className="text-[11px] sm:text-xs font-medium text-[#111827]">Accuracy Rate</span>
                </div>
                <span className="text-[11px] sm:text-xs font-bold font-mono text-[#3B82F6]">98.42%</span>
              </div>
            </div>

            {/* Orbiting Tech Node 1: Python */}
            <div className="absolute top-2 left-2 sm:top-4 sm:left-6 bg-white p-2 sm:p-3 rounded-2xl shadow-md border border-blue-50 flex items-center gap-1.5 sm:gap-2 animate-[float_5s_ease-in-out_infinite_1s]">
              <span className="text-xs sm:text-sm font-bold text-gray-700">Python</span>
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#3B82F6]/10 text-[#3B82F6] text-[10px] sm:text-xs font-bold rounded-md flex items-center justify-center">Py</div>
            </div>

            {/* Orbiting Tech Node 2: Database / SQL */}
            <div className="absolute bottom-2 left-0 sm:bottom-6 sm:left-2 bg-white p-2 sm:p-3 rounded-2xl shadow-md border border-blue-50 flex items-center gap-1.5 sm:gap-2 animate-[float_4.5s_ease-in-out_infinite_2s]">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#22D3EE]/10 text-[#22D3EE] text-[10px] sm:text-xs font-bold rounded-md flex items-center justify-center">SQL</div>
              <span className="text-xs sm:text-sm font-medium text-gray-700">PostgreSQL</span>
            </div>

            {/* Orbiting Tech Node 3: Power BI */}
            <div className="absolute top-8 right-0 sm:top-12 sm:right-2 bg-white p-2 sm:p-3 rounded-2xl shadow-md border border-blue-50 flex items-center gap-1.5 sm:gap-2 animate-[float_6.5s_ease-in-out_infinite_0.5s]">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-amber-500/10 text-amber-600 text-[10px] sm:text-xs font-bold rounded-md flex items-center justify-center">📊</div>
              <span className="text-xs sm:text-sm font-medium text-gray-700">Power BI</span>
            </div>

            {/* Orbiting Tech Node 4: Neural Network Node */}
            <div className="absolute bottom-8 right-2 sm:bottom-12 sm:right-8 bg-white p-2 sm:p-3 rounded-2xl shadow-md border border-blue-50 flex items-center gap-1.5 sm:gap-2 animate-[float_5.5s_ease-in-out_infinite_1.5s]">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00C2FF]" />
              <span className="text-[10px] sm:text-xs font-semibold font-mono text-[#111827]">ML Algorithms</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;