import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function JarOfChoicesWin() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/chooseOrders"); // Replace with your actual next page route
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0f1a] via-[#0e1b2d] to-[#162e4d] text-white p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >

        <h1 className="text-2xl font-bold text-white mb-6 text-center">
           Congrats You unlocked the Jar of Choices
        </h1>

        <motion.div
          animate={{ y: [0, -8, 0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative w-48 h-64 bg-gradient-to-b from-gray-800 to-blue-900 rounded-t-full rounded-b-full border-4 border-blue-500 shadow-[0_0_30px_rgba(56,189,248,0.4)] overflow-hidden"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-t-xl border border-blue-400"></div>

          {/* Floating cards inside the jar */}
          {[...Array(3)].map((_, idx) => (
            <motion.div
              key={idx}
              className="absolute w-10 h-14 bg-cyan-300/20 border border-cyan-400 rounded-md backdrop-blur-sm"
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3 + idx,
                delay: idx * 0.5,
                ease: "easeInOut",
              }}
              style={{ left: `${45 + idx * 30}px`, top: `${90 + idx * 20}px` }}
            />
          ))}
        </motion.div>

        <Button
          className="cursor-pointer mt-8  bg-gradient-to-b from-gray-800 to-blue-900 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-3"
          onClick={handleNext}
        >
          OPEN 
        </Button>
      </motion.div>
    </div>
  );
}