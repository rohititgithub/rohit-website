import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formattedTime = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      const formattedDate = now.toLocaleDateString("en-IN", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      setTime(formattedTime);
      setDate(formattedDate);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 🔥 IMAGE (TV STYLE MOBILE) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/hero.png"
          alt="hero"
          className="w-full h-full object-cover md:object-cover
      sm:scale-100 scale-[1.2] 
      sm:rounded-none rounded-2xl
      sm:m-0 m-3"
        />

        {/* TV frame effect (mobile only) */}
        <div className="absolute inset-0 sm:hidden m-3 rounded-2xl border border-white/10 pointer-events-none"></div>
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* LEFT TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute left-4 sm:left-6 top-[22%] sm:top-1/4 z-10 text-xs sm:text-sm space-y-1 sm:space-y-2 max-w-[200px] sm:max-w-none"
      >
        <div className="flex items-start gap-3">
          <div className="w-[2px] h-10 sm:h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

          <div>
            <p className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Full Stack Developer
            </p>
            <p className="text-gray-400 text-[11px] sm:text-sm">
              Crafting scalable web experiences
            </p>
          </div>
        </div>
      </motion.div>

      {/* MAIN TITLE */}
      <div className="absolute bottom-14 sm:bottom-20 left-4 sm:left-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 1 }}
          className="text-[36px] sm:text-[80px] md:text-[120px] lg:text-[150px] font-extrabold leading-none tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            ROHIT
          </span>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 1.2 }}
          className="text-[36px] sm:text-[80px] md:text-[120px] lg:text-[150px] font-extrabold leading-none tracking-tight relative"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            PORTFOLIO
          </span>

          {/* glow */}
          <span className="absolute inset-0 blur-2xl opacity-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
        </motion.h1>
      </div>

      {/* TIME CARD */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6 }}
        className="absolute right-4 sm:right-6 top-[22%] sm:top-1/4 z-10 text-right"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-20 rounded-xl"></div>

          <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 shadow-lg">
            <p className="tracking-widest text-gray-400 text-[9px] sm:text-xs">
              INDIA
            </p>

            <p className="font-semibold text-white text-base sm:text-xl mt-1">
              {time}
            </p>

            <p className="text-gray-400 text-[9px] sm:text-xs tracking-widest uppercase mt-1">
              {date}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
