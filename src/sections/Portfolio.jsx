import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Personal Portfolio",
    image: "/images/portfolio.png",
    description: "Responsive portfolio using React & Tailwind CSS.",
    github: "https://github.com/yourname/portfolio",
    live: "#",
  },
  {
    title: "Amazon Clone",
    image: "/images/amazon.png",
    description: "Amazon UI clone using HTML, CSS and JavaScript.",
    github: "#",
    live: "#",
  },
  {
    title: "Student Management System",
    image: "/images/sms.png",
    description: "Full stack app with React frontend and Java backend.",
    github: "#",
    live: "#",
  },
  {
    title: "Rock Paper Scissors Game",
    image: "/images/rps.png",
    description: "JavaScript game with animations.",
    github: "#",
    live: "#",
  },
  {
    title: "Weather App",
    image: "/images/weather.png",
    description: "Weather app using API.",
    github: "#",
    live: "#",
  },
  {
    title: "To-Do App",
    image: "/images/todo.png",
    description: "Task manager using React.",
    github: "#",
    live: "#",
  },
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="portfolio" className="w-full bg-[#080808] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-14">
          My <span className="text-red-500">Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
 className="relative group bg-[#111] rounded-2xl overflow-hidden shadow-lg min-h-[340px]"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay Layer */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t from-black/80 to-red-600/40
                  flex flex-col items-center justify-center text-center
                  px-6
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-500
                "
              >
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-200 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex gap-6 text-2xl">
                  <a
                    href={project.github}
                    target="_blank"
                    className="hover:text-red-400 transition"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="hover:text-red-400 transition"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-14">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
