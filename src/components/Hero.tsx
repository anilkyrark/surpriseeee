import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { Fireworks } from "./Fireworks";

export const Hero = () => {
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    // Start fireworks after a brief delay
    const timer = setTimeout(() => setShowFireworks(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-background">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          >
            <Heart className="text-primary" size={16 + Math.random() * 16} />
          </div>
        ))}
      </div>

      {/* Sparkle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 bg-accent rounded-full animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Fireworks Display */}
      {showFireworks && <Fireworks />}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-script mb-6 text-primary drop-shadow-lg animate-scale-in">
          Happy Birthday!
        </h1>
        <p className="text-2xl md:text-3xl font-dancing text-secondary mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Wishing you a day as beautiful as you are ✨
        </p>
        <div className="flex gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Heart className="text-accent fill-accent animate-float" size={32} />
          <span className="text-xl font-body text-muted-foreground">Celebrating You Today</span>
          <Heart className="text-accent fill-accent animate-float-slow" size={32} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
