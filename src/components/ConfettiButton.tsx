import { useState } from "react";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";

export const ConfettiButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerConfetti = () => {
    setIsAnimating(true);
    toast("🎊 Celebration time!", {
      description: "Confetti burst just for you!",
    });

    setTimeout(() => setIsAnimating(false), 3000);
  };

  return (
    <div className="relative">
      <button
        onClick={triggerConfetti}
        disabled={isAnimating}
        className="px-8 py-4 bg-gradient-romantic text-primary-foreground rounded-full font-dancing text-xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
      >
        <Sparkles className="w-5 h-5" />
        {isAnimating ? "Celebrating! 🎉" : "Burst Confetti"}
      </button>

      {isAnimating && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => {
            const angle = (Math.PI * 2 * i) / 50;
            const velocity = 150 + Math.random() * 100;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            
            return (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-firework"
                style={{
                  left: `50%`,
                  top: "50%",
                  background: `hsl(${Math.random() * 360}, 90%, 60%)`,
                  animationDelay: `${Math.random() * 0.2}s`,
                  animationDuration: `${1 + Math.random() * 0.5}s`,
                  '--tx': `${tx}px`,
                  '--ty': `${ty}px`,
                } as React.CSSProperties}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
