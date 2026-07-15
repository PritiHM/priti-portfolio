import React from "react";

const Services = () => {
  const services = [
    {
      title: "Data Analysis",
      description: "Analyze, clean, and transform data to generate meaningful insights and support business decisions.",
      gradient: "group-hover:from-[#2563EB]/10 group-hover:to-[#00C2FF]/10",
      iconColor: "text-[#2563EB]",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      )
    },
    {
      title: "Machine Learning",
      description: "Develop predictive machine learning models using Python and Scikit-learn to solve real-world problems.",
      gradient: "group-hover:from-[#00C2FF]/10 group-hover:to-[#22D3EE]/10",
      iconColor: "text-[#00C2FF]",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Power BI Dashboards",
      description: "Design interactive dashboards and visual reports to present business data clearly and effectively.",
      gradient: "group-hover:from-[#3B82F6]/10 group-hover:to-[#2563EB]/10",
      iconColor: "text-[#3B82F6]",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Frontend Development",
      description: "Develop responsive and user-friendly web applications using HTML, CSS, JavaScript, React, and Tailwind CSS.",
      gradient: "group-hover:from-[#22D3EE]/10 group-hover:to-[#3B82F6]/10",
      iconColor: "text-[#22D3EE]",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="expertise" 
      className="relative w-full bg-gradient-to-br from-[#F8FBFF] to-[#EAF6FF] text-[#111827] py-20 lg:py-28 overflow-hidden font-sans border-t border-blue-50 selection:bg-[#22D3EE]/30"
    >
      {/* Ambient background glows mapped to tie in with Home and About sections */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-[#00C2FF]/6 rounded-full blur-[120px] animate-pulse duration-[9000ms]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#2563EB]/6 rounded-full blur-[100px] animate-pulse duration-[7000ms]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 space-y-12 lg:space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-[#2563EB] bg-blue-50/85 px-3 py-1 rounded-full border border-blue-100 inline-block">
            Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
            What <span className="bg-gradient-to-r from-[#2563EB] via-[#00C2FF] to-[#22D3EE] bg-clip-text text-transparent">I Do</span>
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Leveraging analytical rigor and clean engineering to structure data pipelines, uncover statistics, and construct high-fidelity frontend products.
          </p>
        </div>

        {/* Services Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group relative p-6 rounded-3xl bg-white/40 backdrop-blur-md border border-white/80 shadow-lg shadow-blue-900/5 flex flex-col justify-between transition-all duration-500 hover:scale-[1.03] hover:bg-white/60 hover:shadow-xl hover:shadow-blue-100/40 hover:border-blue-100/60 overflow-hidden"
            >
              {/* Dynamic hover-reveal background gradient glow layer */}
              <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${service.gradient}`} />

              <div className="relative z-10 space-y-5">
                {/* Modern Icon Bubble Container with Hover Ring Animation */}
                <div className={`w-12 h-12 rounded-2xl bg-white border border-blue-50/80 shadow-sm flex items-center justify-center ${service.iconColor} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md`}>
                  {service.icon}
                </div>

                {/* Service Metadata */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#111827] tracking-tight group-hover:text-[#2563EB] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Minimal gradient highlight element on the bottom border */}
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;