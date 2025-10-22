import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = window.document.documentElement;
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      root.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const newTheme = theme === "light" ? "dark" : "light";
    
    root.classList.toggle("dark");
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      <Button
        onClick={toggleTheme}
        size="icon"
        variant="outline"
        className="w-12 h-12 rounded-full shadow-soft hover:shadow-elegant bg-card/80 backdrop-blur-sm border-primary/20"
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5 text-primary" />
        ) : (
          <Sun className="w-5 h-5 text-accent" />
        )}
      </Button>
    </div>
  );
};
