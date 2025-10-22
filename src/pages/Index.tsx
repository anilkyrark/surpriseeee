import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { PhotoGallery } from "@/components/PhotoGallery";
import { VideoSection } from "@/components/VideoSection";
import { MessageSection } from "@/components/MessageSection";
import { InteractiveSection } from "@/components/InteractiveSection";
import { Footer } from "@/components/Footer";
import { MusicPlayer } from "@/components/MusicPlayer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FloatingHearts } from "@/components/FloatingHearts";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />
      <MusicPlayer />
      <ThemeToggle />
      
      <Hero />
      <PhotoGallery />
      <VideoSection />
      <MessageSection />
      <InteractiveSection />
      <Footer />
    </div>
  );
};

export default Index;
