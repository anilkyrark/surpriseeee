import { useState } from "react";
import { toast } from "sonner";

export const BirthdayCake = () => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [blowAttempts, setBlowAttempts] = useState(0);

  const handleBlowCandles = () => {
    if (!candlesLit) {
      toast("The candles are already out! 🎂", {
        description: "Make another wish!",
      });
      return;
    }

    setCandlesLit(false);
    setBlowAttempts(prev => prev + 1);
    
    toast("🎉 Candles blown! Your wish has been made!", {
      description: "May all your dreams come true ✨",
    });

    // Relight candles after 5 seconds
    setTimeout(() => {
      setCandlesLit(true);
      if (blowAttempts < 3) {
        toast("✨ The magic candles are lit again!", {
          description: "Blow them out once more!",
        });
      }
    }, 5000);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative bg-card p-12 rounded-3xl shadow-elegant hover:shadow-glow transition-all duration-500">
        {/* Cake */}
        <div className="relative flex flex-col items-center">
          {/* Candles */}
          <div className="relative z-10 mb-2 flex gap-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="relative flex flex-col items-center">
                {/* Flame */}
                {candlesLit && (
                  <div className="relative mb-1">
                    <div className="w-3 h-5 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full animate-float opacity-90" />
                    <div className="absolute inset-0 w-3 h-5 bg-gradient-to-t from-orange-400 via-yellow-300 to-white rounded-full animate-pulse blur-[2px]" />
                  </div>
                )}
                {/* Candle stick */}
                <div className="w-2 h-12 bg-gradient-to-b from-red-400 to-red-500 rounded-sm border border-red-600/50 shadow-md" />
                {/* Candle holder */}
                <div className="w-4 h-2 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-full border border-yellow-500/50 -mt-1" />
              </div>
            ))}
          </div>
          
          {/* Top tier - smallest */}
          <div className="relative flex flex-col items-center">
            {/* Frosting top */}
            <div className="w-32 h-3 bg-gradient-to-b from-pink-200 to-pink-300 rounded-t-2xl shadow-sm" />
            {/* Cake layer */}
            <div className="w-32 h-10 bg-gradient-to-b from-amber-200 via-amber-300 to-amber-400 border-x-2 border-amber-400/50 shadow-md relative overflow-hidden">
              {/* Cake texture lines */}
              <div className="absolute inset-0 flex flex-col justify-around">
                <div className="h-px bg-amber-500/30 w-full" />
                <div className="h-px bg-amber-500/30 w-full" />
              </div>
            </div>
            {/* Frosting decoration */}
            <div className="w-36 flex justify-around -mt-1">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-3 bg-gradient-to-b from-pink-300 to-pink-400 rounded-b-full shadow-sm"
                />
              ))}
            </div>
          </div>

          {/* Middle tier */}
          <div className="relative flex flex-col items-center -mt-1">
            {/* Frosting top */}
            <div className="w-44 h-3 bg-gradient-to-b from-purple-200 to-purple-300 rounded-t-2xl shadow-sm" />
            {/* Cake layer */}
            <div className="w-44 h-12 bg-gradient-to-b from-amber-200 via-amber-300 to-amber-400 border-x-2 border-amber-400/50 shadow-md relative overflow-hidden">
              {/* Cake texture lines */}
              <div className="absolute inset-0 flex flex-col justify-around">
                <div className="h-px bg-amber-500/30 w-full" />
                <div className="h-px bg-amber-500/30 w-full" />
                <div className="h-px bg-amber-500/30 w-full" />
              </div>
            </div>
            {/* Frosting decoration */}
            <div className="w-48 flex justify-around -mt-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-3 bg-gradient-to-b from-purple-300 to-purple-400 rounded-b-full shadow-sm"
                />
              ))}
            </div>
          </div>

          {/* Bottom tier - largest */}
          <div className="relative flex flex-col items-center -mt-1">
            {/* Frosting top */}
            <div className="w-56 h-3 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-2xl shadow-sm" />
            {/* Cake layer */}
            <div className="w-56 h-16 bg-gradient-to-b from-amber-200 via-amber-300 to-amber-400 rounded-b-3xl border-x-2 border-amber-400/50 shadow-lg relative overflow-hidden">
              {/* Cake texture lines */}
              <div className="absolute inset-0 flex flex-col justify-around px-2">
                <div className="h-px bg-amber-500/30 w-full" />
                <div className="h-px bg-amber-500/30 w-full" />
                <div className="h-px bg-amber-500/30 w-full" />
                <div className="h-px bg-amber-500/30 w-full" />
              </div>
            </div>
            {/* Frosting decoration */}
            <div className="w-60 flex justify-around absolute bottom-0">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 bg-gradient-to-b from-pink-400 to-pink-500 rounded-b-full shadow-sm"
                />
              ))}
            </div>
          </div>
          
          {/* Cake plate */}
          <div className="w-64 h-2 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full shadow-lg -mt-1" />
          <div className="w-60 h-1 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full shadow-md" />
        </div>
        
        {/* Glow effect when lit */}
        {candlesLit && (
          <div className="absolute -inset-4 bg-gradient-radial from-yellow-300/20 to-transparent rounded-3xl blur-2xl pointer-events-none" />
        )}
      </div>
      
      <button
        onClick={handleBlowCandles}
        className="mt-8 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-dancing text-xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105"
      >
        {candlesLit ? "🌬️ Blow the Candles" : "🎂 Make Another Wish"}
      </button>
      
      {!candlesLit && (
        <p className="mt-4 text-sm text-muted-foreground font-body italic animate-fade-in">
          Wish granted! ✨ (Candles will relight soon...)
        </p>
      )}
    </div>
  );
};
