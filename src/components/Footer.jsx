import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-12">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              Priti <span className="text-red-500">Mahajan</span>
            </h3>
            <p className="mt-2 text-sm">
              Full Stack Developer | React • Java • Spring Boot
            </p>
          </div>

          {/* Center Links */}
          <ul className="flex gap-8 text-sm">
            <li>
              <a href="#home" className="hover:text-red-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-red-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-red-500 transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-500 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Right Socials */}
          <div className="flex gap-6 text-xl">
            <a href="https://github.com/PritiHM" className="hover:text-red-500 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/priti-mahajan-345b93371" className="hover:text-red-500 transition">
              <FaLinkedin />
            </a>
            
            <a href="mailto:pritimali2806@gmail.com" className="hover:text-red-500 transition">
              <FaEnvelope />
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 text-center text-sm border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} Priti Mahajan. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
