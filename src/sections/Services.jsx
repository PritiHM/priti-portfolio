import { FaCode, FaPalette, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="w-full bg-[#080808] text-white py-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-center mb-14">
          My <span className="text-red-400">Services</span>
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Web Design */}
          <Link to="/web-design">
            <div className="bg-[#262626] rounded-2xl p-8 text-center hover:bg-red-500 hover:-translate-y-2 transition duration-300 shadow-lg cursor-pointer">
              <FaCode className="text-red-300 text-5xl mx-auto mb-6" />

              <h3 className="text-2xl font-semibold mb-4">
                Web Design
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Creating responsive and modern websites using HTML, CSS,
                JavaScript and React with clean UI and performance focused design.
              </p>

              <span className="inline-block px-6 py-2 border border-red-400 rounded-full text-white">
                Learn More
              </span>
            </div>
          </Link>

          {/* UI/UX Design */}
          <Link to="/ui-ux-design">
            <div className="bg-[#262626] rounded-2xl p-8 text-center hover:bg-red-500 hover:-translate-y-2 transition duration-300 shadow-lg cursor-pointer">
              <FaPalette className="text-red-300 text-5xl mx-auto mb-6" />

              <h3 className="text-2xl font-semibold mb-4">
                UI / UX Design
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Designing intuitive user interfaces and smooth user experiences
                with focus on usability, accessibility and visual consistency.
              </p>

              <span className="inline-block px-6 py-2 border border-red-400 rounded-full text-white">
                Learn More
              </span>
            </div>
          </Link>

          {/* App Design */}
          <Link to="/app-design">
            <div className="bg-[#262626] rounded-2xl p-8 text-center hover:bg-red-500 hover:-translate-y-2 transition duration-300 shadow-lg cursor-pointer">
              <FaMobileAlt className="text-red-300 text-5xl mx-auto mb-6" />

              <h3 className="text-2xl font-semibold mb-4">
                App Design
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Designing modern and user-friendly mobile app interfaces
                with responsive layouts and engaging interactions.
              </p>

              <span className="inline-block px-6 py-2 border border-red-400 rounded-full text-white">
                Learn More
              </span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Services;
