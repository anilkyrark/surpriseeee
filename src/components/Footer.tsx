import { Heart, Share2 } from "lucide-react";
import { toast } from "sonner";

export const Footer = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Birthday Celebration",
          text: "Check out this beautiful birthday website!",
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled share
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast("Link copied to clipboard! 🎉", {
        description: "Share this celebration with others",
      });
    }
  };

  return (
    <footer className="py-12 px-4 bg-gradient-to-t from-primary/10 to-background">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="flex justify-center gap-2 items-center animate-fade-in">
          <Heart className="text-accent fill-accent animate-float" size={24} />
          <p className="text-2xl font-dancing text-primary">
            Made with Love
          </p>
          <Heart className="text-accent fill-accent animate-float-slow" size={24} />
        </div>
        
        <p className="text-muted-foreground font-body">
          For someone who makes every day brighter ✨
        </p>
        
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full font-body shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105"
        >
          <Share2 size={18} />
          Share This Celebration
        </button>
        
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground font-body">
            © 2025 • Every moment with you is a gift 🎁
          </p>
        </div>
      </div>
    </footer>
  );
};
