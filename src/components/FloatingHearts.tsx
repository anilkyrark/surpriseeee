import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: string; delay: number }>>([]);

  useEffect(() => {
    // Generate initial hearts
    const initialHearts = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 6,
    }));
    setHearts(initialHearts);

    // Add new hearts periodically
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev.slice(-7), // Keep only last 7 hearts
        {
          id: Date.now(),
          left: `${Math.random() * 100}%`,
          delay: 0,
        },
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-heart-float"
          style={{
            left: heart.left,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <Heart
            className="text-primary/30 fill-primary/20"
            size={20 + Math.random() * 20}
          />
        </div>
      ))}
    </div>
  );
};
