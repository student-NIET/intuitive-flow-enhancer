import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Github, 
  Linkedin, 
  Search, 
  Users, 
  MessageCircle, 
  Star,
  Code,
  Lightbulb,
  Trophy,
  UserPlus
} from "lucide-react";

const Index = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  if (!isSignedIn) {
    return <LandingPage onSignIn={() => setIsSignedIn(true)} />;
  }

  return <Dashboard />;
};

const LandingPage = ({ onSignIn }: { onSignIn: () => void }) => {
  return (
    <div className="min-h-screen gradient-subtle">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
        
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
                size="lg" 
                className="w-full sm:w-auto min-w-48"
                onClick={onSignIn}
              >
                <Github className="mr-2" />
                Sign in with GitHub
              </Button>
              
              <Button 
                variant="social" 
                size="lg" 
                className="w-full sm:w-auto min-w-48"
                onClick={onSignIn}
              >
                <Linkedin className="mr-2" />
                Sign in with LinkedIn
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
  <Card className="p-8 text-center border-0 shadow-soft hover-lift bg-white/80 backdrop-blur-sm">
    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-soft">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </Card>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("discover");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-soft">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold">HackMatch</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search teams or people..." className="pl-10 w-64" />
              </div>
              
              <Avatar className="hover-scale cursor-pointer">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                <AvatarFallback>You</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b bg-white/50">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {[
              { id: "discover", label: "Discover", icon: <Star className="w-4 h-4" /> },
              { id: "teams", label: "My Teams", icon: <Users className="w-4 h-4" /> },
              { id: "chat", label: "Chat", icon: <MessageCircle className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 transition-smooth ${
                  activeTab === tab.id
                    ? "border-primary text-primary font-semibold"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === "discover" && <DiscoverSection />}
        {activeTab === "teams" && <TeamsSection />}
        {activeTab === "chat" && <ChatSection />}
      </main>
    </div>
  );
};

const DiscoverSection = () => {
  const people = [
    {
      name: "Ethan Carter",
      role: "Python, Data Analysis",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      skills: ["Python", "Machine Learning", "Data Science"]
    },
    {
      name: "Sophia Bennett",
      role: "UI/UX Design, Figma",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=64&h=64&fit=crop&crop=face",
      skills: ["UI/UX", "Figma", "Design Systems"]
    },
    {
      name: "Pragya Misra",
      role: "React, JavaScript",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      skills: ["React", "JavaScript", "Frontend"]
    },
    {
      name: "Olivia Hayes",
      role: "Machine Learning, TensorFlow",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face",
      skills: ["ML", "TensorFlow", "AI"]
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Discover Teammates</h2>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">Skills</Button>
          <Button variant="outline" size="sm">Experience</Button>
          <Button variant="outline" size="sm">Availability</Button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {people.map((person, index) => (
          <PersonCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

const PersonCard = ({ person }: { person: any }) => (
  <Card className="p-6 hover-lift border-0 shadow-soft bg-white">
    <div className="text-center">
      <Avatar className="w-16 h-16 mx-auto mb-4">
        <AvatarImage src={person.avatar} />
        <AvatarFallback>{person.name[0]}</AvatarFallback>
      </Avatar>
      
      <h3 className="font-semibold text-lg mb-2">{person.name}</h3>
      <p className="text-muted-foreground text-sm mb-4">{person.role}</p>
      
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {person.skills.map((skill: string, index: number) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
      </div>
      
      <Button size="sm" className="w-full">
        <UserPlus className="w-4 h-4 mr-2" />
        Connect
      </Button>
    </div>
  </Card>
);

const TeamsSection = () => {
  const teams = [
    {
      name: "Project Phoenix",
      members: 5,
      project: "EcoTrack - Sustainability tracker app",
      status: "Live Hackathon",
      color: "bg-green-100"
    },
    {
      name: "Code Crusaders", 
      members: 3,
      project: "HealthHub - Wellness platform",
      status: "Hackathon 2022",
      color: "bg-blue-100"
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">My Teams</h2>
        <Button>
          <UserPlus className="w-4 h-4 mr-2" />
          Create Team
        </Button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team, index) => (
          <TeamCard key={index} team={team} />
        ))}
      </div>
    </div>
  );
};

const TeamCard = ({ team }: { team: any }) => (
  <Card className="p-6 hover-lift border-0 shadow-soft bg-white">
    <div className="flex items-start gap-4 mb-4">
      <div className={`w-12 h-12 ${team.color} rounded-xl flex items-center justify-center`}>
        <Lightbulb className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{team.name}</h3>
        <p className="text-sm text-muted-foreground">{team.members} members</p>
      </div>
      <Badge variant={team.status.includes("Live") ? "default" : "secondary"}>
        {team.status}
      </Badge>
    </div>
    
    <p className="text-muted-foreground mb-6">{team.project}</p>
    
    <Button variant="outline" size="sm" className="w-full">
      View Team
    </Button>
  </Card>
);

const ChatSection = () => (
  <div className="animate-fade-in">
    <div className="text-center py-20">
      <MessageCircle className="w-16 h-16 mx-auto mb-6 text-muted-foreground" />
      <h3 className="text-2xl font-semibold mb-4">No conversations yet</h3>
      <p className="text-muted-foreground mb-8">
        Start connecting with teammates to begin collaborating!
      </p>
      <Button>Find Teammates</Button>
    </div>
  </div>
);

export default Index;