import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import gameData from './../game-data.private.json';


const dareCards = gameData.dares;


// Exemples of Dares Cards
// const dareCards = [
//   "Do 10 jumping jacks 💪",
//   "Speak like a robot for 1 minute 🤖",
//   "Act out your favorite movie scene 🎬",
//   "Sing a line from a random song 🎤",
//   "Tell a funny story or joke 😂",
// ];

export default function DareGame() {
    const navigate = useNavigate();
    const [showInstructions, setShowInstructions] = useState(true);
    const [revealedCards, setRevealedCards] = useState<number[]>([]);

    const handleReveal = (index: number) => {
        if (!revealedCards.includes(index)) {
        setRevealedCards([...revealedCards, index]);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0f1a] via-[#0e1b2d] to-[#162e4d] p-6 text-white space-y-10">
            <h1 className="text-3xl font-bold text-cyan-300">🎯 Dare Challenge</h1>
            <p className="text-xl text-gray-300">
                    Depending on the previous Score the gameMasters will do a dare for each points the user have
            </p>
            {showInstructions ? (
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-xl text-center space-y-4"
                >

                <p className="text-xl text-gray-300">
                    Egg: 3pts Game masters will do 3 dares and the users 2 dares. The total will be five
                </p>
                <Button onClick={() => setShowInstructions(false)} className="w-full mt-4 cursor-pointer mt-4 w-full hover:bg-blue-900">
                    Let's Go!
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
            { revealedCards.length === dareCards.length && (
                            <Button
                            onClick={() => navigate("/giftGame")}
                            className="cursor-pointer bg-gradient-to-b from-gray-800 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white text-lg px-6 py-3 rounded-md shadow-md"
                            >
                            Next Game →
                            </Button>
            )
            }
        </div>
    );
    }