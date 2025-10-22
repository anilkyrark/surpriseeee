import { BirthdayCake } from "./BirthdayCake";
import { ConfettiButton } from "./ConfettiButton";
import { CountdownTimer } from "./CountdownTimer";

export const InteractiveSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-script text-center mb-4 text-primary animate-fade-in">
          Make a Wish! 🎂
        </h2>
        <p className="text-center text-muted-foreground mb-12 font-body animate-fade-in">
          Interactive surprises just for you
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-scale-in">
            <BirthdayCake />
          </div>
          
          <div className="space-y-8 animate-fade-in-up">
            <div className="text-center">
              <h3 className="text-3xl font-dancing text-secondary mb-4">
                Celebrating You For
              </h3>
              <CountdownTimer />
            </div>
            
            <div className="text-center">
              <p className="text-lg font-body text-muted-foreground mb-4">
                Ready for more celebrations?
              </p>
              <ConfettiButton />
            </div>
            
            <div className="bg-card p-6 rounded-2xl shadow-soft text-center">
              <p className="text-sm font-body text-muted-foreground italic mb-2">
                "Age is merely the number of years the world has been enjoying you!"
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <span className="text-2xl animate-float">🎈</span>
                <span className="text-2xl animate-float-slow">🎁</span>
                <span className="text-2xl animate-float">🎊</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
