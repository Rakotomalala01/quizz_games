import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function GuessCodeGame() {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // SECRET CODE WHO WILL BE USED 
  const secretCode = "1903";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 4);
    setInput(value);
  };

  const handleSubmit = () => {
    if (input === secretCode) {
      setFeedback("🎉 Correct!");
      setTimeout(() => navigate("/jarOfChoices"), 1000);
    } else {
      setFeedback("❌ Wrong code. Try again.");
    }
    setInput("");
    inputRef.current?.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0f1a] via-[#0e1b2d] to-[#162e4d] p-4 relative space-y-6">
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

      <h1 className="text-3xl font-bold text-cyan-300 text-center">🧩 Hello dear visitor </h1>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card
          className="glow-animation relative rounded-2xl bg-[#0f172a]/60 backdrop-blur-md p-6 text-center border border-blue-900 ring-2 ring-blue-500/40"
        >
          <h1 className="text-2xl font-bold mb-4 text-blue-300">🔐 Crack the 4 Digits Secret Code</h1>
          <div
            className="flex justify-center gap-4 mb-6 cursor-pointer"
            onClick={() => inputRef.current?.focus()}
          >
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className="w-14 h-14 rounded-lg bg-[#1e293b] border border-blue-700 text-2xl font-mono text-cyan-200 flex items-center justify-center shadow-inner"
              >
                {input[index] || ""}
              </div>
            ))}
          </div>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleChange}
            maxLength={4}
            className="absolute opacity-0 pointer-events-none"
          />
          <Button className="cursor-pointer w-full bg-gradient-to-b from-gray-800 to-blue-900 hover:bg-blue-800 text-white transition-all duration-200" onClick={handleSubmit}>
            Submit
          </Button>
          {feedback && (
            <motion.p
              className={`mt-5 text-3xl font-bold ${
                feedback.includes("Correct") ? "text-cyan-400" : "text-red-500"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {feedback}
            </motion.p>
          )}
        </Card>
      </motion.div>
    </div>
  );
}
