import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "WHAT KIND OF PROJECTS DO YOU USUALLY WORK ON?",
    a: "I specialize in full-stack web applications using the MERN stack, including dashboards, SaaS platforms, APIs, and modern responsive websites.",
  },
  {
    q: "WHAT’S YOUR DEVELOPMENT PROCESS LIKE?",
    a: "I follow a clean workflow — understanding requirements, planning architecture, building scalable features, and optimizing performance before deployment.",
  },
  {
    q: "WHAT DO YOU NEED TO GET STARTED?",
    a: "I need your project idea, key features, timeline, and any design references if available. From there, I handle everything from development to deployment.",
  },
  {
    q: "WHAT MAKES YOUR WORK DIFFERENT?",
    a: "I focus on performance, scalability, and clean code. My goal is not just to build apps, but to create fast, reliable, and production-ready systems.",
  },
  {
    q: "CAN I SEE YOUR PREVIOUS WORK?",
    a: "Yes, you can explore my projects section or GitHub where I’ve shared real-world applications and case studies.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-24 px-4 sm:px-6 md:px-16 relative overflow-hidden">
      <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mb-8 sm:mb-12">
        <p>06</p>
        <p>/FAQ</p>
      </div>

      <h1 className="hidden sm:block absolute left-0 md:left-6 top-40 md:top-60 text-[80px] md:text-[120px] font-bold text-gray-200/40 -rotate-90 origin-left pointer-events-none">
        /faq
      </h1>

      <div className="max-w-5xl mx-auto mb-10 sm:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug">
          Before you ask me about. There’s what most people want to know.
        </h1>
      </div>

      <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
        {faqs.map((faq, i) => {
          const isOpen = active === i;

          return (
            <motion.div
              key={i}
              layout
              onClick={() => setActive(isOpen ? null : i)}
              className="border-b border-gray-300 pb-4 sm:pb-5 cursor-pointer group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center gap-4">
                <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800 group-hover:text-black transition">
                  {faq.q}
                </p>

                <motion.div
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    scale: isOpen ? 1.2 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative w-4 h-4 flex-shrink-0"
                >
                  <span className="absolute w-full h-[2px] bg-gray-500 top-1/2 left-0 -translate-y-1/2"></span>
                  <span className="absolute h-full w-[2px] bg-gray-500 left-1/2 top-0 -translate-x-1/2"></span>
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    layout
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 leading-relaxed pr-2">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className="h-[1px] bg-black mt-3"
              />
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-5xl mx-auto mt-12 sm:mt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 sm:gap-10">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm max-w-md">
            Feel free to get in touch — I’ll gladly clarify the details and help
            you decide if this is the right fit for your project.
          </p>
        </div>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-flex items-center justify-center rounded-full text-xs tracking-widest font-medium group"
        >
          <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-md group-hover:opacity-50 transition duration-500"></span>

          <span className="relative z-10 flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0f0f0f] text-white border border-white/10 backdrop-blur-md group-hover:bg-white group-hover:text-black transition duration-500">
            ASK ME
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </motion.a>
      </div>
    </section>
  );
}
