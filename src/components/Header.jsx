import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowDownToLine } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  // Handle scroll effects: background change & active section tracking
  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar background change
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Active Section Highlighting
      const scrollPosition = window.scrollY + 120; // offset for navbar height
      
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-white/50 dark:bg-slate-900/75 backdrop-blur-md shadow-lg shadow-blue-500/10 rounded-b-2xl border-b border-blue-100/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* ================= LEFT SIDE: LOGO ================= */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, 'home')}
          className="group flex items-center gap-3 cursor-pointer focus:outline-none"
        >
          {/* Hexagonal Dynamic Logo Icon */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#00C2FF] text-white font-bold text-lg shadow-md shadow-blue-500/20 group-hover:scale-110 transition-all duration-300 ease-out">
            PM
            {/* Soft decorative outer glow ring */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#00C2FF] opacity-0 group-hover:opacity-40 blur-sm transition-all duration-300"></div>
          </div>
          
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#00C2FF] bg-clip-text text-transparent group-hover:brightness-110 transition-all duration-300">
              Priti Mahajan
            </span>
            <span className="text-[10px] tracking-wider text-slate-500 uppercase font-bold -mt-1 group-hover:text-blue-500 transition-colors duration-300">
              Data Scientist
            </span>
          </div>
        </a>

        {/* ================= CENTER MENU (DESKTOP) ================= */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`relative py-2 text-sm font-semibold tracking-wide transition-colors duration-300 ${
                  isActive
                    ? 'text-[#2563EB]'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#2563EB]'
                }`}
              >
                {item.label}
                {/* Underline Animation */}
                <span
                  className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#2563EB] to-[#00C2FF] rounded-full transition-all duration-300 ease-out ${
                    isActive ? 'w-full' : 'w-0 hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* ================= RIGHT SIDE: CTA (DESKTOP) ================= */}
        <div className="hidden md:block">
          <a
            href="/resume.pdf" // Update with your actual resume path
            download
            className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-semibold overflow-hidden group shadow-md shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/35 active:scale-95"
          >
            {/* Gradient Background Layer */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#00C2FF] transition-all duration-500 ease-out group-hover:opacity-90" />
            
            {/* Hover reflection sheen */}
            <span className="absolute top-0 -left-full w-1/2 h-full bg-white/20 skew-x-12 transform group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
            
            <span className="relative z-10 flex items-center gap-2">
              Resume <ArrowDownToLine size={16} className="animate-pulse" />
            </span>
          </a>
        </div>

        {/* ================= MOBILE MENU TRIGGER ================= */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-200 hover:text-[#2563EB] focus:outline-none transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE DRAWER (SLIDE-IN) ================= */}
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Drawer Container */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-l border-white/20 shadow-2xl flex flex-col p-6 transition-transform duration-300 ease-out transform md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-lg font-extrabold bg-gradient-to-r from-[#2563EB] to-[#00C2FF] bg-clip-text text-transparent">
            Navigation
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={20} className="text-slate-600 dark:text-slate-300" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col gap-5 flex-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`text-base font-semibold px-4 py-2.5 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-950/40 text-[#2563EB] border-l-4 border-[#2563EB]'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40 hover:text-[#2563EB]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile CTA Button */}
        <div className="mt-auto pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
          <a
            href="/resume.pdf"
            download
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-[#2563EB] to-[#00C2FF] shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
          >
            Download Resume <ArrowDownToLine size={16} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;