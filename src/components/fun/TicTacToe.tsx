import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TicTacToe() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [isAI, setIsAI] = useState(true);

  const winner = calculateWinner(board);
  const isDraw = board.every((cell) => cell) && !winner;

  useEffect(() => {
    if (isAI && !xTurn && !winner) {
      const empty = board
        .map((val, i) => (val === null ? i : null))
        .filter((v) => v !== null) as number[];

      if (empty.length === 0) return;

      const randomMove = empty[Math.floor(Math.random() * empty.length)];

      setTimeout(() => handleClick(randomMove), 400);
    }
  }, [xTurn, board, isAI, winner]);

  function handleClick(i: number) {
    if (board[i] || winner) return;

    const newBoard = [...board];
    newBoard[i] = xTurn ? "X" : "O";

    setBoard(newBoard);
    setXTurn(!xTurn);
  }

  useEffect(() => {
    if (winner) {
      setScore((prev) => ({
        ...prev,
        [winner]: prev[winner as "X" | "O"] + 1,
      }));
    }
  }, [winner]);

  function resetGame() {
    setBoard(Array(9).fill(null));
    setXTurn(true);
  }

  return (
    <div>
      <h2 className="text-lg mb-4">Tic Tac Toe 🎮</h2>

      <div className="flex justify-between text-sm mb-3">
        <p>X: {score.X}</p>
        <p>O: {score.O}</p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {board.map((val, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleClick(i)}
            className="h-16 bg-white/10 rounded-xl text-2xl font-bold"
          >
            {val}
          </motion.button>
        ))}
      </div>

      <motion.p
        key={`${winner}-${isDraw}-${xTurn}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 text-sm text-gray-300"
      >
        {winner
          ? `🎉 Winner: ${winner}`
          : isDraw
            ? "🤝 It's a Draw"
            : `Turn: ${xTurn ? "X" : "O"}`}
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={resetGame}
        className="mt-4 px-5 py-2 rounded-full relative group"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-md"></span>
        <span className="relative z-10 px-5 py-2 rounded-full bg-white/10 border border-white/20">
          🔄 Restart
        </span>
      </motion.button>

      <button
        onClick={() => setIsAI(!isAI)}
        className="mt-3 text-xs text-gray-400 underline"
      >
        {isAI ? "Switch to 2 Player" : "Switch to AI Mode"}
      </button>
    </div>
  );
}

function calculateWinner(b: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b1, c] of lines) {
    if (b[a] && b[a] === b[b1] && b[a] === b[c]) {
      return b[a];
    }
  }
  return null;
}
