import React, { useState } from "react";

const Contact = () => {
  // Form handling state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus("loading");
    
    // Simulate a brief premium UI layout transition state before opening tab
    setTimeout(() => {
      const phoneNumber = "917420806320";
      const subjectText = formData.subject.trim() ? formData.subject : "No Subject Provided";
      
      // Construct dynamic message body with precise formatting string literals
      const messageText = `📩 New Portfolio Contact\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n📌 Subject: ${subjectText}\n💬 Message:\n${formData.message}`;
      
      const whatsappUrl = `https://wa.me/${7420806320}?text=${encodeURIComponent(messageText)}`;
      
      // Open communication target link in secondary active window hook
      window.open(whatsappUrl, "_blank");

      // Set successful pipeline state flags & clean tracking variables
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset back to idle state after premium notice visibility window duration
      setTimeout(() => setStatus("idle"), 4000);
    }, 1000);
  };

  return (
    <section 
      id="contact" 
      className="relative w-full bg-gradient-to-br from-[#F8FBFF] to-[#EAF6FF] text-[#111827] py-20 lg:py-28 overflow-hidden font-sans border-t border-blue-50 selection:bg-[#00C2FF]/30"
    >
      {/* ==========================================
          DYNAMIC FLOATING BACKGROUND AESTHETICS
          ========================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Large Floating Blurred Ambient Orbs */}
        <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-[#2563EB]/6 rounded-full blur-[120px] animate-pulse duration-[9000ms]" />
        <div className="absolute top-10 right-[-100px] w-[500px] h-[500px] bg-[#00C2FF]/8 rounded-full blur-[100px] animate-pulse duration-[7000ms]" />
        
        {/* Subtle Interactive Particle Dots Grid */}
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#2563EB_1.5px,transparent_1.5px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* ==========================================
            LEFT SIDE (5 COLUMNS): METADATA DECK
            ========================================== */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
              Let's <span className="bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#00C2FF] bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-base text-[#6B7280] leading-relaxed font-medium">
              I'm always open to discussing Data Science opportunities, Machine Learning projects, Frontend Development, freelance work, and collaborations. Feel free to reach out.
            </p>
          </div>

          {/* 4 Premium Glass Information Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: Email */}
            <div className="p-5 rounded-2xl bg-white/40 backdrop-blur-md border border-white/80 shadow-md shadow-blue-900/5 transition-all duration-300 hover:scale-[1.02] hover:bg-white/60 hover:border-[#00C2FF]/30 group">
              <div className="text-xl mb-2 group-hover:scale-110 transition-transform duration-300">✉️</div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email</h4>
              <a href="mailto:pritimali2806@gmail.com" className="text-xs sm:text-sm font-bold text-[#111827] hover:text-[#2563EB] block truncate transition-colors">
                pritimali2806@gmail.com
              </a>
            </div>

            {/* Card 2: Phone */}
            <div className="p-5 rounded-2xl bg-white/40 backdrop-blur-md border border-white/80 shadow-md shadow-blue-900/5 transition-all duration-300 hover:scale-[1.02] hover:bg-white/60 hover:border-[#2563EB]/30 group">
              <div className="text-xl mb-2 group-hover:scale-110 transition-transform duration-300">📞</div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Phone</h4>
              <a href="tel:+917420806320" className="text-xs sm:text-sm font-bold text-[#111827] hover:text-[#2563EB] block transition-colors">
                +91 7420806320
              </a>
            </div>

            {/* Card 3: Location */}
            <div className="p-5 rounded-2xl bg-white/40 backdrop-blur-md border border-white/80 shadow-md shadow-blue-900/5 transition-all duration-300 hover:scale-[1.02] hover:bg-white/60 hover:border-blue-200/50 group">
              <div className="text-xl mb-2 group-hover:scale-110 transition-transform duration-300">📍</div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Location</h4>
              <p className="text-xs sm:text-sm font-bold text-[#111827]">
                Pune, Maharashtra, India
              </p>
            </div>

            {/* Card 4: Open To Roles */}
            <div className="p-5 rounded-2xl bg-white/40 backdrop-blur-md border border-white/80 shadow-md shadow-blue-900/5 transition-all duration-300 hover:scale-[1.02] hover:bg-white/60 hover:border-[#00C2FF]/30 group sm:col-span-2">
              <div className="text-xl mb-2 group-hover:scale-110 transition-transform duration-300">💼</div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Open To</h4>
              <div className="flex flex-wrap gap-1.5">
                {[
  "Data Scientist",
  "Data Analyst",
  "Machine Learning Engineer",
  "Generative AI Engineer",
  "MLOps Engineer"
].map((role) => (
                  <span key={role} className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 bg-white border border-gray-100 rounded-lg text-gray-600 shadow-sm">
                    • {role}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Premium Circular Social Access Handles */}
          <div className="space-y-3 pt-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400">Social Architecture</h5>
            <div className="flex gap-4">
              {[
                { name: "LinkedIn", link: "https://www.linkedin.com/in/priti-mahajan-345b93371", icon: "👔" },
                { name: "GitHub", link: "https://github.com/PritiHM", icon: "💻" },
                { name: "Gmail", link: "mailto:pritimali2806@gmail.com", icon: "✉️" }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white hover:bg-[#2563EB] text-[#111827] hover:text-white border border-gray-200/60 shadow-sm flex items-center justify-center text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ==========================================
            RIGHT SIDE (7 COLUMNS): PREMIUM CONTACT FORM
            ========================================== */}
        <div className="lg:col-span-7">
          <div className="w-full bg-white/40 backdrop-blur-md border border-white/80 rounded-3xl p-6 sm:p-8 shadow-xl shadow-blue-900/5 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#00C2FF]" />
            
            <h3 className="text-xl font-extrabold text-[#111827] tracking-tight mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Name + Email split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold tracking-wide text-gray-500 uppercase">Full Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    disabled={status === "loading"}
                    className="w-full text-sm font-semibold px-4 py-3 bg-white/60 border border-gray-200/80 rounded-xl focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all duration-200 disabled:opacity-50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold tracking-wide text-gray-500 uppercase">Email Address *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    disabled={status === "loading"}
                    className="w-full text-sm font-semibold px-4 py-3 bg-white/60 border border-gray-200/80 rounded-xl focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all duration-200 disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold tracking-wide text-gray-500 uppercase">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Collaboration Opportunities"
                  disabled={status === "loading"}
                  className="w-full text-sm font-semibold px-4 py-3 bg-white/60 border border-gray-200/80 rounded-xl focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all duration-200 disabled:opacity-50"
                />
              </div>

              {/* Message Block */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold tracking-wide text-gray-500 uppercase">Message *</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Priti, I reviewed your profile and want to discuss a project..."
                  disabled={status === "loading"}
                  className="w-full text-sm font-semibold px-4 py-3 bg-white/60 border border-gray-200/80 rounded-xl focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all duration-200 resize-none disabled:opacity-50"
                />
              </div>

              {/* High-Fidelity Button with Embedded Loading/Success/Error feedback loops */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={`w-full font-bold text-sm text-white px-6 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 tracking-wide shadow-md ${
                    status === "success" 
                      ? "bg-emerald-600 shadow-emerald-100" 
                      : status === "error"
                      ? "bg-rose-600 shadow-rose-100"
                      : "bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#00C2FF] hover:opacity-95 shadow-blue-100 active:scale-[0.99]"
                  } disabled:cursor-not-allowed`}
                >
                  {status === "idle" && (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}

                  {status === "loading" && (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Securing Connection...</span>
                    </>
                  )}

                  {status === "success" && (
                    <>
                      <svg className="w-5 h-5 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Message Transmitted Successfully!</span>
                    </>
                  )}

                  {status === "error" && (
                    <>
                      <svg className="w-5 h-5 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Transmission Failed. Try Again.</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;