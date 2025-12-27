const WebDesign = () => {
  return (
    <section className="w-full bg-[#080808] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          Web <span className="text-red-500">Design</span> Services
        </h1>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          I design modern, responsive, and user-friendly websites that help
          businesses grow their online presence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div className="bg-[#111] p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-red-500">
              Responsive Design
            </h2>
            <p className="text-gray-300">
              Mobile-first designs that work on all devices.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-red-500">
              UI / UX Design
            </h2>
            <p className="text-gray-300">
              Clean and user-focused interfaces.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-red-500">
              Business Websites
            </h2>
            <p className="text-gray-300">
              Professional websites for businesses.
            </p>
          </div>
        </div>

        <div className="text-center bg-[#111] p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Need a <span className="text-red-500">Website?</span>
          </h2>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-red-500 rounded-full"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default WebDesign;
