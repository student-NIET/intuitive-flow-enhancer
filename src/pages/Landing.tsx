import { Button } from "@/components/ui/button";
import { Code, User, Users, MessageCircle, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen landing-bg bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent dark:from-primary/20 dark:via-accent/10" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center shadow-soft">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                HackMatch
              </h1>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Find your perfect
              <span className="gradient-primary bg-clip-text text-transparent"> hackathon team</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Connect with talented developers, designers, and innovators. 
              Build amazing projects together and win hackathons as a team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                variant="default"
                size="lg" 
                className="w-full sm:w-auto min-w-48"
                onClick={handleSignIn}
              >
                <User className="mr-2" />
                Sign in with ERP
              </Button>
              
            </div>
            
            <div className="text-sm text-muted-foreground">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
          <FeatureCard 
            icon={<Users className="w-8 h-8" />}
            title="Smart Matching"
            description="Find teammates with complementary skills and shared interests using our AI-powered matching system."
          />
          <FeatureCard 
            icon={<MessageCircle className="w-8 h-8" />}
            title="Team Collaboration"
            description="Built-in chat, project management, and collaboration tools to help your team succeed."
          />
          <FeatureCard 
            icon={<Trophy className="w-8 h-8" />}
            title="Track Success"
            description="See your team's progress, celebrate wins, and build lasting connections in the developer community."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <Card className="p-8 text-center border bg-card shadow-sm hover-lift backdrop-blur-sm">
    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-soft">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </Card>
);

export default Landing;