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
      <div className="relative bg-card p-8 rounded-3xl shadow-elegant hover:shadow-glow transition-all duration-500">
        {/* Cake */}
        <div className="relative">
          {/* Top Layer */}
          <div className="relative">
            <div className="w-48 h-16 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-3xl border-4 border-pink-500/30 shadow-lg" />
            {/* Frosting decoration */}
            <div className="absolute top-0 left-0 right-0 flex justify-around">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-4 bg-white/80 rounded-b-full"
                  style={{ marginTop: "-8px" }}
                />
              ))}
            </div>
          </div>
          
          {/* Middle Layer */}
          <div className="w-56 h-20 bg-gradient-to-b from-purple-300 to-purple-400 border-4 border-purple-500/30 shadow-lg" />
          
          {/* Bottom Layer */}
          <div className="w-64 h-24 bg-gradient-to-b from-pink-400 to-pink-500 rounded-b-3xl border-4 border-pink-600/30 shadow-lg" />
          
          {/* Candles */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="relative">
                {/* Candle */}
                <div className="w-3 h-16 bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-t-full border-2 border-yellow-500/30" />
                {/* Flame */}
                {candlesLit && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="w-4 h-6 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full animate-float opacity-90 blur-sm" />
                    <div className="absolute inset-0 w-4 h-6 bg-gradient-to-t from-orange-400 via-yellow-300 to-yellow-100 rounded-full animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Glow effect when lit */}
        {candlesLit && (
          <div className="absolute -inset-2 bg-gradient-radial from-yellow-200/30 to-transparent rounded-3xl blur-xl pointer-events-none" />
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
