import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#f5f5f5] text-black py-16 sm:py-20 px-4 sm:px-6 md:px-16 relative overflow-hidden"
    >
      {/* TOP BAR */}
      <div className="flex justify-between items-center text-[10px] sm:text-xs text-gray-500 mb-10 sm:mb-12">
        <p>01</p>
        <p>/INTRODUCTION</p>
      </div>

      {/* ❌ HIDE ON MOBILE */}
      <div className="hidden sm:block absolute left-0 md:left-6 top-20 md:top-28">
        <h1 className="vertical-text text-[50px] md:text-[80px] font-bold text-gray-200/80 tracking-widest pointer-events-none">
          /about me
        </h1>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug"
        >
          I craft digital experiences where design meets code —{" "}
          <span className="text-gray-400">
            Building scalable web applications with performance,
          </span>{" "}
          clarity, and purpose.
        </motion.h2>

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center"
        >
          {/* IMAGE */}
          <div className="w-full overflow-hidden rounded-xl">
            <motion.img
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              src="/profile.png"
              alt="profile"
              className="w-full h-52 sm:h-40 object-cover object-top"
            />
          </div>

          {/* TEXT */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed"
          >
            I am Rohit Kumar —{" "}
            <span className="text-black font-medium">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "Creative Developer",
                  2000,
                  "Building scalable web applications",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.p>

          {/* BUTTON */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex justify-start md:justify-end"
          >
            <a
              href="/rohit.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-gray-400 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm tracking-widest text-black transition-all duration-300 hover:text-white"
            >
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>

              <span className="relative z-10 flex items-center gap-2">
                RESUME
              </span>

              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)]"></span>
            </a>
          </motion.div>
        </motion.div>

        {/* SKILLS */}
        <div className="mt-12 sm:mt-16 overflow-hidden">
          <p className="text-[10px] sm:text-xs text-gray-500 mb-4 sm:mb-6">
            /SKILLS
          </p>

          <div className="relative overflow-hidden border-y border-gray-300 py-3 sm:py-4">
            <div className="absolute left-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-r from-[#f5f5f5] to-transparent"></div>
            <div className="absolute right-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-l from-[#f5f5f5] to-transparent"></div>

            <motion.div
              className="flex gap-8 sm:gap-12 whitespace-nowrap text-gray-400 text-sm sm:text-lg"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
            >
              {[
                "React.js",
                "TypeScript",
                "Node.js",
                "JavaScript",
                "Express.js",
                "React.js",
                "TypeScript",
                "Node.js",
              ].map((skill, i) => (
                <span key={i} className="tracking-widest">
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
