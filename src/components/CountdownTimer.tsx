import { useState, useEffect } from "react";

export const CountdownTimer = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set birthday date (you can customize this)
    const birthday = new Date("2025-01-01T00:00:00");

    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - birthday.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {[
        { label: "Days", value: timeElapsed.days },
        { label: "Hours", value: timeElapsed.hours },
        { label: "Minutes", value: timeElapsed.minutes },
        { label: "Seconds", value: timeElapsed.seconds },
      ].map((item) => (
        <div
          key={item.label}
          className="bg-card p-4 rounded-xl shadow-soft text-center"
        >
          <div className="text-3xl font-bold text-primary font-body">
            {item.value.toString().padStart(2, "0")}
          </div>
          <div className="text-xs text-muted-foreground font-body mt-1">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};
