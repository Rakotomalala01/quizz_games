import { Card } from "@/components/ui/card";

export default function FuturePlans() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6">
        <Card className="bg-[#1e293b]/70 backdrop-blur-md p-6 rounded-2xl border border-blue-800 shadow-lg">
          <h1 className="text-3xl font-bold text-blue-300 mb-2">🔮 Future Plans</h1>
          <p className="text-sm text-gray-300 mb-4">Open Tomorrow</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0f172a] border border-cyan-700 rounded-xl p-4 shadow-inner">
              <h2 className="text-xl font-semibold text-cyan-400 mb-2">Something I will do for you 💙</h2>
              <p className="text-gray-200">I will organize our unforgettable trip 🌍✈️</p>
            </div>

            <div className="bg-[#0f172a] border border-blue-700 rounded-xl p-4 shadow-inner">
              <h2 className="text-xl font-semibold text-blue-400 mb-2">Something you will do for me 💫</h2>
              <p className="text-gray-200">I want you to help me dress (Glow up zoky a) 👗🕶️</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}