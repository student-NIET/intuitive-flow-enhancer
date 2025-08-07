import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  ArrowLeft,
  Users,
  UserPlus,
  MessageCircle,
  Calendar,
  Settings,
  Crown,
  Trophy,
  Lightbulb,
  Plus
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Teams = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("my-teams");

  const myTeams = [
    {
      id: 1,
      name: "Project Phoenix",
      project: "EcoTrack - Sustainability tracker app",
      members: [
        { name: "Alex", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" },
        { name: "Maria", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=32&h=32&fit=crop&crop=face" },
        { name: "David", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" },
      ],
      status: "Live Hackathon",
      role: "Team Lead",
      color: "bg-green-100",
      iconColor: "text-green-600",
      progress: 75,
      unreadMessages: 3
    },
    {
      id: 2,
      name: "Code Crusaders",
      project: "HealthHub - Wellness platform",
      members: [
        { name: "Sarah", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" },
        { name: "Ben", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" },
        { name: "Chloe", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face" },
      ],
      status: "Hackathon 2022",
      role: "Developer",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      progress: 100,
      unreadMessages: 0
    }
  ];

  const suggestedTeams = [
    {
      name: "Team Alpha",
      project: "AI-powered fitness tracker",
      members: 4,
      skills: ["React", "Python", "ML"],
      lookingFor: ["Frontend Developer", "UI Designer"],
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      name: "Team Beta", 
      project: "Sustainable energy dashboard",
      members: 6,
      skills: ["Vue.js", "Node.js", "IoT"],
      lookingFor: ["Backend Developer", "Data Scientist"],
      color: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      name: "Team Gamma",
      project: "Social impact marketplace",
      members: 3,
      skills: ["React Native", "Firebase", "Design"],
      lookingFor: ["Mobile Developer", "Product Manager"],
      color: "bg-pink-100",
      iconColor: "text-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <h1 className="text-xl font-semibold">Teams</h1>
            </div>
            
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Create Team
            </Button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b bg-white/50">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {[
              { id: "my-teams", label: "My Teams" },
              { id: "suggested", label: "Suggested" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 transition-smooth ${
                  activeTab === tab.id
                    ? "border-primary text-primary font-semibold"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        {activeTab === "my-teams" && (
          <div className="space-y-6">
            {myTeams.map((team) => (
              <MyTeamCard key={team.id} team={team} />
            ))}
          </div>
        )}

        {activeTab === "suggested" && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-lg font-semibold mb-2">Teams looking for your skills</h2>
              <p className="text-sm text-muted-foreground">
                Based on your profile: React, TypeScript, UI/UX Design
              </p>
            </div>
            
            {suggestedTeams.map((team, index) => (
              <SuggestedTeamCard key={index} team={team} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const MyTeamCard = ({ team }: { team: any }) => (
  <Card className="p-6 hover-lift border-0 shadow-soft bg-white">
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className={`w-12 h-12 ${team.color} rounded-xl flex items-center justify-center`}>
            <Lightbulb className={`w-6 h-6 ${team.iconColor}`} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg">{team.name}</h3>
              {team.role === "Team Lead" && (
                <Crown className="w-4 h-4 text-yellow-600" />
              )}
            </div>
            <p className="text-sm text-muted-foreground">{team.project}</p>
            <Badge variant={team.status.includes("Live") ? "default" : "secondary"} className="mt-2">
              {team.status}
            </Badge>
          </div>
        </div>
        
        <Button variant="ghost" size="icon">
          <Settings className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {team.members.map((member: any, index: number) => (
              <Avatar key={index} className="w-8 h-8 border-2 border-white">
                <AvatarImage src={member.avatar} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {team.members.length} members
          </span>
        </div>
        
        <div className="text-sm text-muted-foreground">
          Progress: {team.progress}%
        </div>
      </div>
      
      <div className="flex gap-3">
        <Button variant="outline" size="sm" className="flex-1">
          <MessageCircle className="w-4 h-4 mr-2" />
          Chat
          {team.unreadMessages > 0 && (
            <Badge variant="destructive" className="ml-2 text-xs">
              {team.unreadMessages}
            </Badge>
          )}
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <Calendar className="w-4 h-4 mr-2" />
          Schedule
        </Button>
        <Button size="sm" className="flex-1">
          View Details
        </Button>
      </div>
    </div>
  </Card>
);

const SuggestedTeamCard = ({ team }: { team: any }) => (
  <Card className="p-6 hover-lift border-0 shadow-soft bg-white">
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <div className={`w-12 h-12 ${team.color} rounded-xl flex items-center justify-center`}>
          <Users className={`w-6 h-6 ${team.iconColor}`} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{team.name}</h3>
          <p className="text-sm text-muted-foreground">{team.project}</p>
          <p className="text-sm text-muted-foreground mt-1">{team.members} members</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium mb-2">Team Skills</h4>
          <div className="flex flex-wrap gap-2">
            {team.skills.map((skill: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Looking for</h4>
          <div className="flex flex-wrap gap-2">
            {team.lookingFor.map((role: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs border-primary text-primary">
                {role}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex gap-3">
        <Button variant="outline" size="sm" className="flex-1">
          View Profile
        </Button>
        <Button size="sm" className="flex-1">
          <UserPlus className="w-4 h-4 mr-2" />
          Request to Join
        </Button>
      </div>
    </div>
  </Card>
);

export default Teams;