import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#080808] text-white fixed top-0 w-full z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-8 py-">

        {/* LOGO */}
        <h1 className="text-2xl md:text-3xl font-extrabold">
          PRITI
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-10">
          <li><a href="#home" className="hover:text-red-500 hover:underline">Home</a></li>
          <li><a href="#about" className="hover:text-red-500 hover:underline">About</a></li>
          <li><a href="#services" className="hover:text-red-500 hover:underline">Services</a></li>
          <li><a href="#portfolio" className="hover:text-red-500 hover:underline">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-red-500 hover:underline">Contact</a></li>
        </ul>

        {/* MOBILE ICON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#080808] border-t border-gray-700">
          <ul className="flex flex-col items-center space-y-6 py-6">
            <li><a onClick={() => setOpen(false)} href="#home">Home</a></li>
            <li><a onClick={() => setOpen(false)} href="#about">About</a></li>
            <li><a onClick={() => setOpen(false)} href="#services">Services</a></li>
            <li><a onClick={() => setOpen(false)} href="#portfolio">Portfolio</a></li>
            <li><a onClick={() => setOpen(false)} href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
