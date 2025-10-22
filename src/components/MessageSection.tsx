export const MessageSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-secondary/10 via-background to-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-script text-primary animate-fade-in-up">
            Dear Friend 💕
          </h2>
          
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg md:text-xl font-body text-foreground leading-relaxed">
              Today we celebrate not just another year, but the incredible person you are. 
              Your kindness, your laughter, your spirit – they light up every room you enter.
            </p>
            
            <p className="text-lg md:text-xl font-body text-foreground leading-relaxed">
              I'm so grateful for every moment we've shared, every laugh, every adventure, 
              and every heart-to-heart conversation. You make life more beautiful just by being in it.
            </p>
            
            <p className="text-lg md:text-xl font-body text-foreground leading-relaxed">
              Here's to celebrating you today and always. May this year bring you endless joy, 
              amazing adventures, and all the happiness you deserve. You wished for skyshots, 
              and I hope the fireworks above captured just a glimpse of how bright you make the world! ✨
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-shadow">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-xl font-dancing text-primary mb-2">Shine Bright</h3>
              <p className="text-sm text-muted-foreground font-body">
                May your light continue to inspire everyone around you
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-shadow">
              <div className="text-4xl mb-3">💝</div>
              <h3 className="text-xl font-dancing text-primary mb-2">Love Always</h3>
              <p className="text-sm text-muted-foreground font-body">
                Surrounded by those who cherish you deeply
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-shadow">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="text-xl font-dancing text-primary mb-2">Celebrate Life</h3>
              <p className="text-sm text-muted-foreground font-body">
                Every day is a gift, and so are you to us
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-gradient-romantic rounded-2xl shadow-elegant animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <p className="text-2xl font-dancing text-primary-foreground italic">
              "Cheers to another year of making beautiful memories together! 🥂"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
