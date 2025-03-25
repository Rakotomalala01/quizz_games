import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const dareCards = [
  "Do 10 jumping jacks 💪",
  "Speak like a robot for 1 minute 🤖",
  "Act out your favorite movie scene 🎬",
  "Sing a line from a random song 🎤",
  "Tell a funny story or joke 😂",
];

export default function DareGame() {
  const [showInstructions, setShowInstructions] = useState(true);
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [showCards, setShowCards] = useState(false);

  const handleReveal = (index: number) => {
    if (!revealedCards.includes(index)) {
      setRevealedCards([...revealedCards, index]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0f1a] via-[#0e1b2d] to-[#162e4d] p-6 text-white space-y-10">
      {showInstructions ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl text-center space-y-4"
        >
          <h1 className="text-3xl font-bold text-cyan-300">🎯 Dare Challenge</h1>
          <p className="text-sm text-gray-300">
            This game is designed for fun, lighthearted dares. When you're ready, you'll see five mysterious dare cards. Click each one to reveal your challenge!
          </p>
          <Button onClick={() => setShowInstructions(false)} className="w-full mt-4">
            Let's Go!
          </Button>
        </motion.div>
      ) : !showCards ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button onClick={() => setShowCards(true)} className="px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700">
            Reveal the Dare Cards 🎲
          </Button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {dareCards.map((dare, index) => (
            <motion.div
              key={index}
              className="w-40 h-56 bg-gradient-to-br from-blue-900 to-purple-800 border border-cyan-500 rounded-xl shadow-lg flex items-center justify-center text-center p-4 cursor-pointer hover:shadow-cyan-500/40"
              onClick={() => handleReveal(index)}
              animate={
                revealedCards.includes(index)
                  ? {
                      y: [0, -10, 0],
                      transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                    }
                  : {}
              }
              whileHover={{ scale: 1.05 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: revealedCards.includes(index) ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm text-cyan-100 font-medium"
              >
                {revealedCards.includes(index) ? dare : "? ? ?"}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}