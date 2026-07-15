import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com', icon: FaGithub, label: 'GitHub' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: FaLinkedin, label: 'LinkedIn' },
    { name: 'Email', href: 'mailto:priti@example.com', icon: FaEnvelope, label: 'Email' },
    { name: 'Resume', href: '#', icon: FaFileDownload, label: 'Resume' },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-[#F8FCFF] to-[#EFF6FF] text-slate-600 font-sans border-t border-sky-100/80">
      {/* Top Thin Light Divider */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12">
          
          {/* Left Section - Bio */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-800">
              Priti Harshal Mahajan
            </h2>
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
              Aspiring Data Scientist
            </p>
            <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
              Passionate about Machine Learning, Data Analytics, Python, SQL, Power BI and AI.
            </p>
          </div>

          {/* Center Section - Quick Links */}
          <div className="md:col-span-4 md:pl-8 space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm font-medium">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block text-slate-500 transition-colors duration-250 hover:text-cyan-500 focus:outline-none focus:text-cyan-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Connect */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
              Connect
            </h3>
            <div className="flex flex-col space-y-3 text-sm font-medium">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name !== 'Resume' ? "_blank" : undefined}
                    rel={social.name !== 'Resume' ? "noopener noreferrer" : undefined}
                    className="group flex items-center space-x-3 text-slate-500 transition-colors duration-250 hover:text-cyan-500 focus:outline-none focus:text-cyan-500"
                    aria-label={`Priti's ${social.label}`}
                  >
                    <Icon className="w-4 h-4 text-sky-500 group-hover:text-cyan-500 transition-colors duration-250" />
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Section with Thin Cyan Divider */}
        <div className="pt-8 border-t border-cyan-100/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400 tracking-wide">
          <p className="text-center sm:text-left">
            &copy; {currentYear} Priti Harshal Mahajan. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1 text-center sm:text-right">
            Built with <span className="text-cyan-500 animate-pulse">❤️</span> using React, Vite and Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
}