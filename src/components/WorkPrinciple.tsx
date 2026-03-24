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

export default function Principles() {
  return (
    <section className="bg-[#f5f5f5] py-12 sm:py-20 px-4 sm:px-6 md:px-16 relative overflow-hidden">
      {/* Top Bar */}
      <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mb-8 sm:mb-12">
        <p>03</p>
        <p>/PRINCIPLES</p>
      </div>

      {/* ❌ Hide on Mobile */}
      <div className="hidden sm:block absolute left-0 md:left-6 top-40 md:top-50 pointer-events-none">
        <h1 className="vertical-text text-[60px] md:text-[100px] font-bold text-gray-200/80 tracking-widest">
          /principles
        </h1>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-10 sm:mb-20"
      >
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight">
          .. work principles
        </h1>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8"
      >
        {/* BIG CARD */}
        <motion.div
          variants={item}
          className="sm:col-span-2 bg-black text-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 flex flex-col justify-center shadow-lg hover:shadow-2xl transition duration-300"
        >
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold">
            Transparency
          </h2>
          <p className="text-xs sm:text-sm mt-3 sm:mt-4 opacity-80">
            We discuss goals and outcomes before starting every project.
          </p>
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div variants={item} className="flex items-center">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold leading-snug">
            Every project is tailored to the client and business
          </h2>
        </motion.div>

        {/* CARD */}
        <motion.div
          variants={item}
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition duration-300"
        >
          <p className="text-xs sm:text-sm text-gray-500">
            Not beauty for its own sake
          </p>
          <h3 className="text-sm sm:text-lg font-semibold mt-4 sm:mt-6">
            Smart aesthetics
          </h3>
        </motion.div>

        {/* CARD */}
        <motion.div
          variants={item}
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-center items-center text-center shadow-md hover:shadow-xl transition duration-300"
        >
          <h3 className="font-semibold text-xs sm:text-sm tracking-widest">
            HONESTY ABOUT TECHNOLOGY
          </h3>
        </motion.div>

        {/* DARK CARD */}
        <motion.div
          variants={item}
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-black text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-end shadow-md hover:shadow-xl transition duration-300"
        >
          <h3 className="font-semibold text-sm sm:text-base">
            VALUE-DRIVEN DESIGN
          </h3>
          <p className="text-[10px] sm:text-xs opacity-80 mt-2">
            visuals serve your goals
          </p>
        </motion.div>

        {/* STACK */}
        <motion.div
          variants={item}
          className="sm:col-span-2 flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          {/* SMALL DARK */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-black text-white rounded-xl sm:rounded-2xl p-3 sm:p-4 h-[90px] sm:h-[110px] flex flex-col justify-between shadow-md"
          >
            <p className="text-[10px] sm:text-xs opacity-70">12:00</p>
            <p className="text-[10px] sm:text-xs">
              I respect deadlines and take full ownership of quality.
            </p>
          </motion.div>

          {/* LIGHT */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 h-[90px] sm:h-[110px] flex items-center shadow-md"
          >
            <p className="text-xs sm:text-sm text-gray-600">
              I never use unlicensed work
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
