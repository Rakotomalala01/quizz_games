import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { Home } from "lucide-react";

const restaurantThemes = ["Asian", "African", "European"];
const challenges = ["Role Swap", "Try Something New And Weird"];
const twists = [
  "Sorceress Jil & Dumby Prince Saul",
  "Killer Loki & Inspector Selene ",
  "Songwriter Loki & Big Fans Samantha"
];

export default function ChooseRestaurant() {
  const navigate = useNavigate();

  const [selectedTheme, setSelectedTheme] = useState<number | null>(null);
  const [selectedChallenge, setSelectedChallenge] = useState<number | null>(null);
  const [selectedTwist, setSelectedTwist] = useState<number | null>(null);

  const renderCards = (items: string[], selected: number | null, setSelected: (i: number) => void) => (
    <div className="flex gap-4 flex-wrap justify-center">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`w-48 h-40 rounded-xl shadow-lg cursor-pointer flex items-center justify-center text-center p-4 border transition duration-300 ${
            selected === index
              ? "border-gray-600 bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-600 hover:opacity-90"
              : "border-cyan-400 bg-gradient-to-br from-blue-900 to-purple-800"
          }`}
          onClick={() => setSelected(index)}
          whileHover={{ scale: 1.05 }}
          animate={
            selected === index
              ? {
                  y: [0, -8, 0],
                  transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                }
              : {}
          }
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: selected === index ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="text-cyan-100 text-sm font-medium"
          >
            {selected === index ? item : "? ? ?"}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white flex flex-col items-center justify-center p-6 space-y-10">
      <style jsx>{`
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(56, 189, 248, 0.6);
          }
        }

        .glow-animation {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>

      <div className="w-full max-w-4xl space-y-10">
        <h1 className="text-3xl font-bold text-center text-blue-300">🍽️ Choose the Restaurant</h1>
        <h1 className="text-2xl font-bold text-center text-blue-100">Must be a place we never visited </h1>

        <Card className="glow-animation bg-[#1e293b]/70 p-6 rounded-2xl border border-blue-800 shadow-xl space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-cyan-400 mb-4 text-center">🏷️ Restaurant Theme</h2>
            {renderCards(restaurantThemes, selectedTheme, setSelectedTheme)}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-400 mb-4 text-center">🎯 Challenge</h2>
            {renderCards(challenges, selectedChallenge, setSelectedChallenge)}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-400 mb-4 text-center">📖 Story Twist</h2>
            {renderCards(twists, selectedTwist, setSelectedTwist)}
          </div>
        </Card>
        <div className="text-center space-y-4">
          <p className="text-lg text-green-400 font-semibold">🎉 HAPPY BIRTHDAY AGAIN THANKS FOR PARTICIPATING! 🎉</p>
          <Button
            onClick={() => navigate("/")}
            className="cursor-pointer w-16 h-16 bg-gradient-to-b from-gray-800 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white text-lg px-6 py-3 rounded-md shadow-md"
          >
            <Home />
          </Button>
        </div>
      </div>
    </div>
  );
}
