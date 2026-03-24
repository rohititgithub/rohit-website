import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section className="bg-[#f5f5f5] py-12 sm:py-20 px-4 sm:px-6 md:px-16 relative overflow-hidden">
      {/* TOP BAR */}
      <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mb-8 sm:mb-12">
        <p>04</p>
        <p>/SERVICES</p>
      </div>

      {/* ❌ HIDE ON MOBILE */}
      <div className="hidden sm:block absolute left-0 md:left-6 top-40 md:top-48 pointer-events-none">
        <h1 className="vertical-text text-[60px] md:text-[100px] font-bold text-gray-200/60 tracking-widest">
          /what i do
        </h1>
      </div>

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-10 sm:mb-16"
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          .. services
        </h1>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
      >
        {/* BIG CARD */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="group sm:col-span-2 relative rounded-2xl sm:rounded-3xl p-[1px] bg-gradient-to-br from-white/30 to-transparent"
        >
          <div className="bg-black/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              Full Stack Development
            </h2>
            <p className="text-xs sm:text-sm mt-3 sm:mt-4 text-gray-300">
              Building scalable web applications using MERN stack with clean
              architecture and performance optimization.
            </p>
          </div>
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div variants={item} className="flex items-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug text-gray-800">
            End-to-end development tailored for real-world applications
          </h2>
        </motion.div>

        {/* CARD */}
        <motion.div
          variants={item}
          whileHover={{ y: -6, scale: 1.03 }}
          className="group relative rounded-2xl sm:rounded-3xl p-[1px] bg-gradient-to-br from-gray-200 to-transparent"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-md hover:shadow-xl transition duration-300">
            <p className="text-[10px] sm:text-xs text-gray-400">
              Frontend Engineering
            </p>
            <h3 className="text-sm sm:text-lg font-semibold mt-2 sm:mt-3 text-gray-900">
              React + Tailwind UI
            </h3>
          </div>
        </motion.div>

        {/* CARD */}
        <motion.div
          variants={item}
          whileHover={{ y: -6, scale: 1.03 }}
          className="group relative rounded-2xl sm:rounded-3xl p-[1px] bg-gradient-to-br from-gray-200 to-transparent flex items-center justify-center"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-md w-full text-center">
            <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-gray-800">
              BACKEND DEVELOPMENT
            </h3>
          </div>
        </motion.div>

        {/* DARK CARD */}
        <motion.div
          variants={item}
          whileHover={{ y: -6, scale: 1.03 }}
          className="group relative rounded-2xl sm:rounded-3xl p-[1px] bg-gradient-to-br from-white/20 to-transparent"
        >
          <div className="bg-black/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-md">
            <h3 className="font-semibold text-white text-sm sm:text-base">
              API & DATABASE
            </h3>
            <p className="text-[10px] sm:text-xs text-gray-400 mt-2">
              secure REST APIs with MongoDB integration
            </p>
          </div>
        </motion.div>

        {/* STACK */}
        <motion.div
          variants={item}
          className="sm:col-span-2 flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          {/* DARK */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="relative rounded-xl sm:rounded-2xl p-[1px] bg-gradient-to-br from-white/20 to-transparent w-full"
          >
            <div className="bg-black/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 h-[90px] sm:h-[110px] flex flex-col justify-between shadow-md">
              <p className="text-[10px] sm:text-xs text-gray-400">
                Performance
              </p>
              <p className="text-[10px] sm:text-xs text-gray-300">
                Optimized apps with fast loading & scalability.
              </p>
            </div>
          </motion.div>

          {/* LIGHT */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="relative rounded-xl sm:rounded-2xl p-[1px] bg-gradient-to-br from-gray-200 to-transparent w-full"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 h-[90px] sm:h-[110px] flex items-center shadow-md">
              <p className="text-xs sm:text-sm text-gray-700">
                Clean code & maintainable architecture
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
