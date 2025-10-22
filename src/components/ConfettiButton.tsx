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
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 animate-confetti-fall"
              style={{
                left: `${50}%`,
                top: "50%",
                background: `hsl(${Math.random() * 360}, 80%, 60%)`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${2 + Math.random()}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
