import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const icons = ["🔥", "🚀", "🎯", "💎", "⚡", "🎮"];

export default function MemoryGame() {
  const [cards, setCards] = useState<any[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    shuffleCards();
  }, []);

  function shuffleCards() {
    const doubled = [...icons, ...icons]
      .sort(() => Math.random() - 0.5)
      .map((icon, i) => ({ id: i, icon }));

    setCards(doubled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  }

  function handleClick(index: number) {
    if (flipped.length === 2 || flipped.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);

      const [a, b] = newFlipped;

      if (cards[a].icon === cards[b].icon) {
        setMatched((prev) => [...prev, a, b]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 700);
      }
    }
  }

  const isWin = matched.length === cards.length;

  return (
    <div>
      <h2 className="text-lg mb-4">Memory Game 🧩</h2>

      <div className="grid grid-cols-4 gap-3">
        {cards.map((card, i) => {
          const isFlipped = flipped.includes(i) || matched.includes(i);

          return (
            <motion.div
              key={card.id}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleClick(i)}
              className="h-16 flex items-center justify-center rounded-xl bg-white/10 text-xl cursor-pointer"
            >
              {isFlipped ? card.icon : "❓"}
            </motion.div>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-gray-300">Moves: {moves}</p>

      {isWin && (
        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-green-400 mt-3"
        >
          🎉 You Won!
        </motion.p>
      )}

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={shuffleCards}
        className="mt-4 px-5 py-2 rounded-full relative group"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-md"></span>
        <span className="relative z-10 px-5 py-2 rounded-full bg-white/10 border border-white/20">
          🔄 Restart
        </span>
      </motion.button>
    </div>
  );
}
