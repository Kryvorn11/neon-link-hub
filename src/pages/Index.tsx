import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import profileAvatar from "@/assets/profile-avatar.jpg";
import catLeft from "@/assets/cat-left.png";
import catRight from "@/assets/cat-right.png";
const Index = () => {
  const interests = ["Cooking", "Anime", "Playing Guitar", "Music", "Sketching", "Reading", "Writing Poems & Songs", "Call of Duty"];
  const roles = ["Developer", "Coder", "Digital Creator", "Dropshipper"];
  return <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Cute cat animations on sides */}
      <div className="fixed left-4 top-1/4 animate-float opacity-30 hover:opacity-60 transition-opacity pointer-events-none hidden md:block">
        <img src={catLeft} alt="" className="w-24 h-24 neon-glow" />
      </div>
      <div className="fixed right-4 top-1/3 animate-float opacity-30 hover:opacity-60 transition-opacity pointer-events-none hidden md:block" style={{
      animationDelay: '1s'
    }}>
        <img src={catRight} alt="" className="w-24 h-24 neon-glow" />
      </div>
      <div className="fixed left-8 bottom-1/4 animate-float opacity-20 hover:opacity-50 transition-opacity pointer-events-none hidden md:block" style={{
      animationDelay: '2s'
    }}>
        <img src={catLeft} alt="" className="w-20 h-20 neon-glow" />
      </div>
      <div className="fixed right-8 bottom-1/3 animate-float opacity-20 hover:opacity-50 transition-opacity pointer-events-none hidden md:block" style={{
      animationDelay: '0.5s'
    }}>
        <img src={catRight} alt="" className="w-20 h-20 neon-glow" />
      </div>

      <div className="w-full max-w-2xl mx-auto space-y-8 animate-fade-in relative z-10">
        {/* Profile Section */}
        <div className="text-center space-y-4">
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary neon-glow animate-float mx-auto">
              <img alt="Profile" className="w-full h-full object-cover" src="/lovable-uploads/853e1d8e-0807-41c6-b17d-c45283738f1c.png" />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Arzz
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              aka Ishq / Kryvorn / Prats
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              He/Him • 17 • Single 💙
            </p>
          </div>

          <p className="text-lg md:text-xl text-foreground/90 max-w-md mx-auto">
            Gentleman overthinker. Introvert IRL, extrovert online. Living in code & creativity.
          </p>

          <div className="flex flex-wrap gap-2 justify-center">
            {roles.map(role => <span key={role} className="px-3 py-1 text-xs md:text-sm rounded-full bg-primary/20 text-primary border border-primary/30">
                {role}
              </span>)}
          </div>
        </div>

        {/* About Me Card */}
        <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-primary/20 space-y-3">
          <h2 className="text-2xl font-bold text-primary">About Me</h2>
          <p className="text-foreground/80 leading-relaxed">
            A 17-year-old developer and digital creator with a passion for building cool stuff.
            When I'm not coding, you'll find me jamming on my guitar, sketching, or binge-watching anime.
            I love cats, tech, and good food. Currently leveling up my skills in development while
            exploring dropshipping and creating digital content. Always overthinking, always creating.
          </p>
        </Card>

        {/* Auto-scrolling Lyrics Box */}
        <Card className="p-6 md:p-8 bg-card/40 backdrop-blur-md border-primary/20 neon-glow space-y-4">
          <h2 className="text-2xl font-bold text-center gradient-text">Now Playing: Fairytale</h2>
          <p className="text-center text-sm text-muted-foreground">by Alexander Rybak</p>
          <ScrollArea className="h-64 w-full rounded-md">
            
          </ScrollArea>
        </Card>

        {/* Interests Section */}
        <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-secondary/20 space-y-4">
          <h2 className="text-2xl font-bold text-secondary">What I Love</h2>
          <div className="flex flex-wrap gap-2">
            {interests.map(interest => <span key={interest} className="px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30 transition-colors text-sm">
                {interest}
              </span>)}
          </div>
          <p className="text-sm text-muted-foreground pt-2">
            🐱 Cat lover • 🎵 Music enthusiast • 🍔 Foodie • 💻 Tech geek
          </p>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground pb-4">
          <p>Made with 💙 by Arzz</p>
        </div>
      </div>
    </div>;
};
export default Index;