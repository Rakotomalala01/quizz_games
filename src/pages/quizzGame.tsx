import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import gameData from './../game-data.private.json';

const questions = gameData.quiz;

//EXEMPLES OF QUIZZ QUESTIONS 

// const questions = [
//   {
//     type: "multiple",
//     question: "What's my favorite color?",
//     options: ["Blue", "Red", "Green", "Yellow"],
//     answer: "BLUE",
//   },
//   {
//     type: "free",
//     question: "What's the name of the first movie we watched together?",
//     answer: "INCEPTION",
//   },
//   {
//     type: "multiple",
//     question: "What day did we first meet?",
//     options: ["Monday", "Friday", "Sunday", "Saturday"],
//     answer: "SATURDAY",
//   },
// ];

export default function QuizGame() {
  const navigate = useNavigate();

  const [showInstructions, setShowInstructions] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(3);

  const currentQuestion = questions[currentIndex];

  const handleSubmit = () => {
    const isCorrect =
      currentQuestion.answer.toLowerCase().trim() === userAnswer.toLowerCase().trim();
    setFeedback(isCorrect ? "✅ Good good !" : "❌ Naah !");
    setScore((prev) => prev + (isCorrect ? 1 : -1));
    setAnswered(true);
  };

  const handleNext = () => {
    setUserAnswer("");
    setFeedback(null);
    setAnswered(false);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0f1a] via-[#0e1b2d] to-[#162e4d] p-6 text-white">
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
      <Card className=" glow-animation max-w-xl w-full p-6 bg-[#1e293b]/70 border border-blue-800 shadow-xl rounded-2xl text-center space-y-6">
        {showInstructions ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-2xl font-bold text-cyan-300">📝 Quiz Instructions</h1>
            <ul className="text-left text-sm text-gray-300 list-disc list-inside space-y-2">
              <li>You’ll begin by a SCORE of 3 good answers + 1 pts bad one - 1 pts </li>
              <li>try to have as many points you'll need it 🫣</li>
              <li>You’ll be asked a mix of free and multiple-choice questions.</li>
              <li>Read carefully and try your best to answer correctly.</li>
              <li>Some answers are sweet memories only we share. 😉</li>
              <li className="text-red-600">All answers are ONE word in CAPITAL ⚠️⚠️</li>
            </ul>
            <Button onClick={() => setShowInstructions(false)} className="cursor-pointer mt-4 w-full hover:bg-blue-900">
              I Understand 💡
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-blue-300">🧠 Quiz Time!</h1>
              <span
                className={`text-sm font-semibold text-white px-4 py-1 rounded-full shadow-md
                    ${score >= 0
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600'
                    : 'bg-gradient-to-r from-red-500 to-rose-600'}`}
                >
                {score >= 0 ? '⭐ Score: ' : '⚠️ Score: '} {score}
                </span>


            </div>

            <p className="text-lg text-cyan-200 mb-4">{currentQuestion.question}</p>

            {currentQuestion.type === "multiple" ? (
              <div className="grid grid-cols-1 gap-2">
                {currentQuestion.options.map((option, i) => (
                  <Button
                    key={i}
                    onClick={() => setUserAnswer(option)}
                    className={`w-full ${userAnswer === option ? "bg-blue-400" : ""}`}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            ) : (
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="w-full p-2 mt-2 rounded-md text-black bg-gray-400"
                placeholder="Type your answer..."
              />
            )}

            {!answered && (
              <Button onClick={handleSubmit} className="mt-4 w-full bg-gray-950 hover:bg-gray-900">
                Submit
              </Button>
            )}

            {feedback && <p className="mt-4 text-lg font-semibold text-white">{feedback}</p>}

            {answered && currentIndex < questions.length - 1 && (
              <Button onClick={handleNext} className="mt-4 w-full bg-gray-950 hover:bg-gray-900">
                Next Question →
              </Button>
            )}

            {answered && currentIndex === questions.length - 1 && (
            <div className="mt-6 flex flex-col items-center gap-4">
                <p className="text-green-400 font-bold text-xl">🎉 Quiz Completed with {score}pts! </p>
                <Button
                onClick={() => navigate("/dareGames")}
                className="cursor-pointer bg-gradient-to-b from-gray-800 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white text-lg px-6 py-3 rounded-md shadow-md"
                >
                Next Game →
                </Button>
            </div>
            )}

          </motion.div>
        )}
      </Card>
    </div>
  );
}