import { useEffect, useState } from "react";

export const Fireworks = () => {
  const [bursts, setBursts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const createBurst = () => {
      const id = Date.now();
      const x = 20 + Math.random() * 60; // Keep in middle 60% of screen
      const y = 20 + Math.random() * 40; // Upper portion of screen
      
      setBursts(prev => [...prev, { id, x, y }]);
      
      // Remove burst after animation completes
      setTimeout(() => {
        setBursts(prev => prev.filter(b => b.id !== id));
      }, 2000);
    };

    // Create initial bursts
    const initialDelay = setTimeout(() => {
      createBurst();
    }, 500);

    // Create random bursts
    const interval = setInterval(() => {
      if (Math.random() > 0.3) { // 70% chance every interval
        createBurst();
      }
    }, 800);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {bursts.map(burst => (
        <div
          key={burst.id}
          className="absolute"
          style={{
            left: `${burst.x}%`,
            top: `${burst.y}%`,
          }}
        >
          {/* Create particles in a circle */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 360) / 12;
            const distance = 80 + Math.random() * 40;
            const tx = Math.cos((angle * Math.PI) / 180) * distance;
            const ty = Math.sin((angle * Math.PI) / 180) * distance;
            
            return (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: `hsl(${Math.random() * 60 + 330}, 100%, ${60 + Math.random() * 20}%)`,
                  animation: `firework 1.5s ease-out forwards`,
                  // @ts-ignore - CSS custom properties
                  "--tx": `${tx}px`,
                  "--ty": `${ty}px`,
                  animationDelay: `${Math.random() * 0.1}s`,
                }}
              />
            );
          })}
          
          {/* Center flash */}
          <div className="absolute w-4 h-4 rounded-full bg-accent -translate-x-1/2 -translate-y-1/2 animate-scale-in shadow-glow" />
        </div>
      ))}
    </div>
  );
};
