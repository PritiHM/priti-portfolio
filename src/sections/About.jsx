import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <section id="about" className="w-full bg-[#080808] text-white py-20">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-12">

        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="/about.png"
            alt="About Me"
            className="w-[460px] rounded-xl shadow-lg"
          />
        </div>

        <div className="md:w-1/2 w-full">

          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-red-500">Me</span>
          </h2>

          <p className= "text-xl text-gray-300 leading-relaxed mb-8">
            I’m <span className="text-white font-semibold">Priti Mahajan</span>, 
            a Full Stack Developer focused on building modern,
            responsive, and scalable web applications.
          </p>

          <div className="flex gap-8 mb-6 ">
            {["skills", "experience", "education"].map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  setActiveTab(activeTab === tab ? null : tab)
                }
                className={`pb-2 font-semibold capitalize transition ${
                  activeTab === tab
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-gray-400 hover:text-red-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="text-white text-lg leading-relaxed">
            {activeTab === "skills" && (
              <ul className="space-y-2">
                <ul className="space-y-2">
  <li>• HTML5, CSS3, JavaScript (ES6+)</li>
  <li>• React.js, Vite</li>
  <li>• Tailwind CSS, Responsive Design</li>
  <li>• Java, Spring Boot</li>
  <li>• RESTful APIs, JWT (Basics)</li>
  <li>• MySQL, Database Design</li>
  <li>• Git, GitHub, Postman</li>
</ul>

              </ul>
            )}

            {activeTab === "experience" && (
             <ul className="space-y-3">

  <li className="font-semibold text-white">
    Frontend Developer Intern
  </li>

  <li>Company: Reet Technology, Katraj</li>
  <li>Work Mode: Remote</li>

  <li className="mt-2">
    <span className="font-semibold text-red-500">
      My Work & Responsibilities:
    </span>

    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-300">
      <li>Developed responsive user interfaces using React</li>
      <li>Integrated REST APIs with frontend components</li>
      <li>Implemented reusable UI components</li>
      <li>Ensured mobile-first and cross-browser compatibility</li>
    </ul>
  </li>

</ul>

            )}

            {activeTab === "education" && (
             <ul className="space-y-4">
  <li>
    <span className="font-semibold text-red-500">
      B.Sc Computer Science
    </span>
    <br />
    North Maharashtra University<br />
    2022 • 70.21%
  </li>

  <li>
    <span className="font-semibold text-red-500">
      HSC (Science)
    </span>
    <br />
    Nashik Divisional Board<br />
    2019 • 66.15%
  </li>

  <li>
    <span className="font-semibold text-red-500">
      SSC
    </span>
    <br />
    Nashik Divisional Board<br />
    2017 • 84.80%
  </li>
</ul>

              
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
