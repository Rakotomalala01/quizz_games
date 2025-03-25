import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const cardContent = ["🌟 Future Plans", "💡Quizz Game ", "🎁 Gift Cards"];

const cardStyles = [
  "bg-gradient-to-br from-blue-900 to-purple-800 border-blue-400 text-blue-100",
  "bg-gradient-to-tr from-teal-400 to-blue-600 border-indigo-500 text-indigo-100",
  "bg-gradient-to-br from-purple-600 to-pink-500 border-cyan-500 text-cyan-100"
];

export default function ChooseOrders() {
  const navigate = useNavigate();

  const [revealedIndexes, setRevealedIndexes] = useState<number[]>([]);
  const [currentRevealIndex, setCurrentRevealIndex] = useState(0);

  const handleReveal = (index: number) => {
    if (!revealedIndexes.includes(index) && currentRevealIndex < cardContent.length) {
      setRevealedIndexes((prev) => [...prev, index]);
      setCurrentRevealIndex((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    navigate("/futurePlans"); // Replace with your actual next page route
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0f1a] via-[#0e1b2d] to-[#162e4d] p-6 text-white space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Choose the game order
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex gap-6"
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`w-40 h-56 ${cardStyles[index]} border rounded-xl shadow-lg flex items-center justify-center text-center p-4 cursor-pointer hover:shadow-lg`}
            onClick={() => handleReveal(index)}
            animate={
              revealedIndexes.includes(index)
                ? {
                    y: [0, -10, 0],
                    transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                  }
                : {}
            }
            whileHover={{ scale: 1.05 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: revealedIndexes.includes(index) ? 1 : 0 }}
              transition={{ duration: 0.5, delay: revealedIndexes.includes(index) ? 0.3 : 0 }}
              className="font-medium"
            >
              {revealedIndexes.includes(index)
                ? cardContent[currentRevealIndex - (revealedIndexes.length - revealedIndexes.indexOf(index))]
                : "? ? ?"}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: revealedIndexes.length > 0 ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center space-y-1"
      >
        <p className="text-lg text-cyan-300 text-center">
          THE GAME WILL BE PLAYED IN THIS ORDER:
        </p>
        <ul className="mt-2 text-sm text-bold text-gray-400 space-y-1 text-center">
          {revealedIndexes.map((index, i) => (
            <li key={i}>
              <span className="text-cyan-500 font-semibold">{i + 1}.</span> {cardContent[i]}
            </li>
          ))}
        </ul>
      </motion.div>
      
      <Button
          className="cursor-pointer mt-8  bg-gradient-to-b from-gray-800 to-blue-900 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-3"
          onClick={handleNext}
          style={{ opacity: revealedIndexes.length > 2 ? 1 : 0 }}
        >
          P L  A Y
      </Button>
    </div>
  );
}