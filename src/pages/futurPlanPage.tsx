import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FuturePlans() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white flex flex-col items-center justify-center p-4 space-y-8">
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

      <div className="w-full max-w-2xl space-y-6">

        <Card className="glow-animation bg-[#1e293b]/70 backdrop-blur-md p-6 rounded-2xl border border-blue-800 shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4 text-center">🔮 Future Plans</h2>
          <p className="text-gray-300 text-center">W R I T E :</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0f172a] border border-cyan-700 rounded-xl p-4 shadow-inner">
              <h2 className="text-xl font-semibold text-cyan-400 mb-2">Something I will do for you 💙</h2>
              <p className="text-gray-200">egg : I will pay you KFC 🐔 </p>
            </div>

            <div className="bg-[#0f172a] border border-blue-700 rounded-xl p-4 shadow-inner">
              <h2 className="text-xl font-semibold text-blue-400 mb-2">Something you will do for me 💫</h2>
              <p className="text-gray-200">egg : I want you to run 100 miles 🚀 </p>
            </div>
          </div>
      
          <h2 className="text-white mt-4 text-center">We will write it in an paper and open the content tomorrow 🎁</h2>
        </Card>
      </div>

      <Button
        onClick={() => navigate("/quizGames")}
        className="cursor-pointer bg-gradient-to-b from-gray-800 to-blue-900 hover:bg-blue-700 text-white text-lg px-6 py-3 "
      >
        Next Game →
      </Button>
    </div>
  );
}