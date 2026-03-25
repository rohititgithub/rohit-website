import { motion } from "framer-motion";
import TicTacToe from "../components/fun/TicTacToe";
import MemoryGame from "../components/fun/MemoryGame";

export default function FunZone() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 opacity-20 blur-[120px]"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-20 blur-[120px]"></div>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold text-center mb-16"
      >
        🎮 Gaming Dashboard
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <GameCard title="Tic Tac Toe 🎮">
          <TicTacToe />
        </GameCard>

        <GameCard title="Memory Game 🧩">
          <MemoryGame />
        </GameCard>
      </div>
    </section>
  );
}

function GameCard({ title, children }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative p-5 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl overflow-hidden"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 blur-xl"></div>

      <div className="relative z-10">
        <h2 className="text-sm mb-3 text-gray-300">{title}</h2>
        {children}
      </div>
    </motion.div>
  );
}
