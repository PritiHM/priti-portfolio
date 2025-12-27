const AppDesign = () => {
  return (
    <section className="w-full bg-[#080808] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          App <span className="text-red-500">Design</span>
        </h1>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          I design modern, responsive, and engaging mobile app interfaces that
          deliver smooth user experiences.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">

          <div className="bg-[#262626] p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">
              Mobile UI Design
            </h2>
            <p className="text-gray-300">
              Clean and modern layouts designed specifically for mobile devices.
            </p>
          </div>

          <div className="bg-[#262626] p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">
              Responsive Layouts
            </h2>
            <p className="text-gray-300">
              Adaptive designs that work smoothly across all screen sizes.
            </p>
          </div>

          <div className="bg-[#262626] p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">
              Interactive Design
            </h2>
            <p className="text-gray-300">
              Engaging animations and interactions for better user engagement.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center bg-[#262626] p-12 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Planning a <span className="text-red-500">Mobile App?</span>
          </h2>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-red-500 rounded-full hover:bg-red-600 transition"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default AppDesign;
