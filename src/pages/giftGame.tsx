import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stores = ["Zarah", "Uniqlo", "H&M"];
const types = ["You Pick", "We Pick"];
const styles = ["Old-money", "Sexy", "Streetwear"];

export default function GiftGame() {
  const [selectedStore, setSelectedStore] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<number | null>(null);
  const navigate = useNavigate();

  const renderCards = (items: string[], selected: number | null, setSelected: (index: number) => void) => (
    <div className="flex gap-4 flex-wrap justify-center">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`w-40 h-40 rounded-xl shadow-lg cursor-pointer flex items-center justify-center text-center p-4 border transition duration-300 ${
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
            className="text-cyan-100 font-medium"
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
        <h1 className="text-3xl font-bold text-center text-blue-300">🎁 Gift Game</h1>

        <Card className="glow-animation bg-[#1e293b]/70 p-6 rounded-2xl border border-blue-800 shadow-xl space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-cyan-400 mb-4 text-center">🛍️ Choose a Store</h2>
            {renderCards(stores, selectedStore, setSelectedStore)}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-400 mb-4 text-center">🎲 Choose a Type</h2>
            {renderCards(types, selectedType, setSelectedType)}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-400 mb-4 text-center">👗 Choose a Style</h2>
            {renderCards(styles, selectedStyle, setSelectedStyle)}
          </div>
        </Card>
        <div className="text-center space-y-4">
          <p className="text-lg text-green-400 font-semibold">🎉 Great choices! Remember You're GIFT for the next surprise!</p>
          <Button
            onClick={() => navigate("/chooseRestaurant")}
            className="cursor-pointer bg-gradient-to-b from-gray-800 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white text-lg px-6 py-3 rounded-md shadow-md"
          >
            Next →
          </Button>
        </div>
      </div>
    </div>
  );
}
