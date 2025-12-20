import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSent(false);
        }, 3000);
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.log("Form submit error:", error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-[#080808] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Contact <span className="text-red-500">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT INFO */}
          <div className="space-y-10">
            <h3 className="text-2xl font-semibold">
              Let’s work together
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Feel free to reach out for collaborations or projects.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-red-500" />
                <span>+91 7420806320</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-red-500" />
                <span>pritimali2806@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-red-500" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>

            <div className="flex gap-6 text-2xl">
              <a
                href="https://github.com/PritiHM"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/priti-mahajan-345b93371"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-500 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-[#111] rounded-2xl p-10 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none resize-none focus:border-red-500"
              ></textarea>

              <button
                type="submit"
                disabled={sent || loading}
                className={`w-full py-3 rounded-lg font-medium transition
                  ${sent
                    ? "bg-green-500 cursor-not-allowed"
                    : "bg-red-500 hover:bg-red-600"
                  }`}
              >
                {loading
                  ? "Sending..."
                  : sent
                  ? "Message Sent ✓"
                  : "Send Message"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
