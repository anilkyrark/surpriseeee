import { useState } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, you would control an audio element here
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={toggleMusic}
        size="icon"
        variant="outline"
        className="w-12 h-12 rounded-full shadow-soft hover:shadow-elegant bg-card/80 backdrop-blur-sm border-primary/20"
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-primary" />
        ) : (
          <VolumeX className="w-5 h-5 text-muted-foreground" />
        )}
      </Button>
      {isPlaying && (
        <div className="absolute -bottom-8 right-0 text-xs text-muted-foreground whitespace-nowrap bg-card/80 backdrop-blur-sm px-2 py-1 rounded-full">
          <Music className="w-3 h-3 inline animate-pulse mr-1" />
          Playing...
        </div>
      )}
    </div>
  );
};
