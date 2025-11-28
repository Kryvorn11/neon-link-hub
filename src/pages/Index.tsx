import { Instagram, Music, Github, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import profileAvatar from "@/assets/profile-avatar.jpg";

const Index = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/arzz_chaudhary",
      username: "@arzz_chaudhary",
    },
    {
      name: "Spotify",
      icon: Music,
      url: "https://open.spotify.com/user/arzz_chaudhary",
      username: "Arzz Chaudhary",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Kryvorn11",
      username: "@Kryvorn11",
    },
    {
      name: "Reddit",
      icon: MessageCircle,
      url: "https://reddit.com/user/Kryvorn",
      username: "u/Kryvorn",
    },
    {
      name: "Discord",
      icon: User,
      url: "#",
      username: "imaginary_me.hehe",
    },
  ];

  const interests = [
    "Cooking",
    "Anime",
    "Playing Guitar",
    "Music",
    "Sketching",
    "Reading",
    "Writing Poems & Songs",
    "Call of Duty",
  ];

  const roles = ["Developer", "Coder", "Digital Creator", "Dropshipper"];

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-2xl mx-auto space-y-8 animate-fade-in">
        {/* Profile Section */}
        <div className="text-center space-y-4">
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary neon-glow animate-float mx-auto">
              <img
                src={profileAvatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
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
            {roles.map((role) => (
              <span
                key={role}
                className="px-3 py-1 text-xs md:text-sm rounded-full bg-primary/20 text-primary border border-primary/30"
              >
                {role}
              </span>
            ))}
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

        {/* Social Links */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center text-secondary">Connect With Me</h2>
          <div className="space-y-3">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Button
                    variant="outline"
                    className="w-full h-auto py-4 px-6 text-left flex items-center justify-between neon-glow bg-card/30 backdrop-blur-sm border-primary/30 hover:border-primary hover:bg-primary/10"
                  >
                    <div className="flex items-center gap-4">
                      <Icon className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">{link.name}</p>
                        <p className="text-sm text-muted-foreground">{link.username}</p>
                      </div>
                    </div>
                    <div className="text-primary">→</div>
                  </Button>
                </a>
              );
            })}
          </div>
        </div>

        {/* Interests Section */}
        <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-secondary/20 space-y-4">
          <h2 className="text-2xl font-bold text-secondary">What I Love</h2>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30 transition-colors text-sm"
              >
                {interest}
              </span>
            ))}
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
    </div>
  );
};

export default Index;
