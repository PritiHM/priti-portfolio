import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-[#080808] text-white mx-auto px-6 md:px-8
                 flex flex-col md:flex-row items-center
                 min-h-[calc(100vh-96px)]"
    >
      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 mt-16 md:mt-0">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 typing-oneline">
          Hi, I’m Priti Mahajan
        </h2>

        <p className="text-base md:text-xl font-bold mb-8 text-gray-300">
          Connecting frontend creativity with backend logic to build complete web experiences.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a
            href="/PritiMahajanResume.pdf"
            download
            className="inline-block text-center px-8 py-3 bg-red-500 rounded-lg font-medium
                       hover:bg-red-600 transition"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="inline-block text-center px-8 py-3 border border-red-500 rounded-lg
                       hover:bg-red-500 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-1/2 md:sticky md:top-14 mt-14 md:mt-0 flex justify-center md:justify-end">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl
                        h-[360px] sm:h-[420px] md:h-[520px]
                        overflow-hidden">
          <img
            src="/src/assets/images/Untitled.png"
            alt="Hero"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
