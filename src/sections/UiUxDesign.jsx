import { Link } from "react-router-dom";

const UiUxDesign = () => {
  return (
    <section className="w-full bg-[#080808] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          UI / UX <span className="text-red-500">Design</span>
        </h1>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          I design intuitive, visually appealing, and user-focused interfaces
          that improve usability and user satisfaction.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">

          <div className="bg-[#262626] p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">
              User Research
            </h2>
            <p className="text-gray-300">
              Understanding user behavior, needs, and goals to design meaningful
              experiences.
            </p>
          </div>

          <div className="bg-[#262626] p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">
              Wireframes & Prototypes
            </h2>
            <p className="text-gray-300">
              Creating low and high-fidelity designs to visualize user journeys.
            </p>
          </div>

          <div className="bg-[#262626] p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">
              Usability Testing
            </h2>
            <p className="text-gray-300">
              Testing designs to ensure ease of use and better accessibility.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center bg-[#262626] p-12 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Need better <span className="text-red-500">User Experience?</span>
          </h2>
         <Link
  to="/#contact"
  className="inline-block px-8 py-3 bg-red-500 rounded-full hover:bg-red-600 transition"
>
  Contact Me
</Link>
        </div>

      </div>
    </section>
  );
};

export default UiUxDesign;
