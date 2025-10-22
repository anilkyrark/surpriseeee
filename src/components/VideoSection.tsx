export const VideoSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-script text-center mb-4 text-primary animate-fade-in">
          A Special Message
        </h2>
        <p className="text-center text-muted-foreground mb-12 font-body animate-fade-in">
          Made with love, just for you 💝
        </p>
        
        <div className="relative animate-scale-in">
          {/* Decorative Frame */}
          <div className="absolute -inset-4 bg-gradient-romantic rounded-3xl opacity-20 blur-xl" />
          
          <div className="relative bg-card rounded-2xl overflow-hidden shadow-elegant border-4 border-primary/20">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <video
                controls
                className="w-full h-full"
                poster="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80"
              >
                <source src="/placeholder-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          {/* Decorative Hearts */}
          <div className="absolute -top-6 -left-6 text-accent opacity-50 animate-float">
            ✨
          </div>
          <div className="absolute -bottom-6 -right-6 text-accent opacity-50 animate-float-slow">
            💝
          </div>
        </div>
        
        <p className="text-center mt-8 text-lg font-body text-muted-foreground italic">
          "Every moment with you is a memory worth treasuring"
        </p>
      </div>
    </section>
  );
};
