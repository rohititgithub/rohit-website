import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-5 sm:px-8 md:px-16 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12 md:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
          Let’s build something meaningful together.
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 border-t border-white/10 pt-8 md:pt-10">
        <div>
          <h2 className="text-base md:text-lg font-semibold tracking-widest mb-3 md:mb-4">
            ROHIT KUMAR
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Full Stack Developer focused on building scalable, high-performance
            web applications with modern technologies.
          </p>
        </div>

        <div className="flex flex-col gap-2 md:gap-3 text-sm">
          <Link to="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link to="/projects" className="hover:text-gray-300 transition">
            Projects
          </Link>
          <Link to="/about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-2 md:gap-3 text-sm">
          <a
            href="https://github.com/rohititgithub"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            GitHub →
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-kumar6200/"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            LinkedIn →
          </a>
          <a
            href="mailto:rohitkumarsahu6200@gmail.com"
            className="hover:text-gray-300 transition"
          >
            Email →
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 md:mt-16 flex flex-col sm:flex-row gap-6 sm:gap-0 justify-between items-center text-xs text-gray-500">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Rohit Kumar. All rights reserved.
        </p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-flex items-center justify-center rounded-full text-xs tracking-widest font-medium group"
        >
          <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40 blur-lg group-hover:opacity-60 transition duration-500"></span>

          <span className="relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0f0f0f] text-white border border-white/10 backdrop-blur-md group-hover:bg-white group-hover:text-black transition duration-500">
            LET’S TALK
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </motion.a>
      </div>
    </footer>
  );
}
