import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft,
  Edit3,
  Save,
  Camera,
  Plus,
  X,
  MapPin,
  Calendar,
  Award,
  Github,
  Linkedin,
  Globe
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "Alex Johnson",
    bio: "Full-stack developer passionate about creating innovative solutions. Love working on hackathons and building products that make a difference.",
    location: "San Francisco, CA",
    email: "alex.johnson@email.com",
    joinedDate: "March 2023",
    skills: ["React", "TypeScript", "Node.js", "Python", "UI/UX Design"],
    interests: ["Sustainability", "AI/ML", "Web3", "Mobile Development"],
    experience: "3+ years in software development",
    githubUrl: "https://github.com/alexjohnson",
    linkedinUrl: "https://linkedin.com/in/alexjohnson",
    portfolioUrl: "https://alexjohnson.dev"
  });

  const [newSkill, setNewSkill] = useState("");
  const [newInterest, setNewInterest] = useState("");

  const achievements = [
    { title: "First Place - EcoHack 2023", date: "November 2023", icon: "🏆" },
    { title: "Best Design - HealthTech Challenge", date: "August 2023", icon: "🎨" },
    { title: "People's Choice - AI Innovation Summit", date: "May 2023", icon: "⭐" }
  ];

  const teamHistory = [
    { name: "Project Phoenix", role: "Team Lead", status: "Active", members: 5 },
    { name: "Code Crusaders", role: "Developer", status: "Completed", members: 3 },
    { name: "Innovation Squad", role: "UI Designer", status: "Completed", members: 4 }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, this would save to a backend
  };

  const addSkill = () => {
    if (newSkill.trim() && !profileData.skills.includes(newSkill.trim())) {
      setProfileData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setProfileData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const addInterest = () => {
    if (newInterest.trim() && !profileData.interests.includes(newInterest.trim())) {
      setProfileData(prev => ({
        ...prev,
        interests: [...prev.interests, newInterest.trim()]
      }));
      setNewInterest("");
    }
  };

  const removeInterest = (interestToRemove: string) => {
    setProfileData(prev => ({
      ...prev,
      interests: prev.interests.filter(interest => interest !== interestToRemove)
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <h1 className="text-xl font-semibold">Profile</h1>
            </div>
            
            <Button 
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
              size="sm"
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </>
              ) : (
                <>
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit
                </>
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Profile Header */}
        <Card className="p-6 border bg-card shadow-sm">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <Avatar className="w-24 h-24">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button size="icon" className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full">
                  <Camera className="w-4 h-4" />
                </Button>
              )}
            </div>
            
            {isEditing ? (
              <div className="w-full max-w-sm space-y-3">
                <Input 
                  value={profileData.fullName}
                  onChange={(e) => setProfileData(prev => ({ ...prev, fullName: e.target.value }))}
                  className="text-center font-semibold text-lg"
                />
                <Textarea 
                  value={profileData.bio}
                  onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                  className="text-center"
                  rows={3}
                />
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold">{profileData.fullName}</h2>
                <p className="text-muted-foreground max-w-md">{profileData.bio}</p>
              </>
            )}
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {isEditing ? (
                  <Input 
                    value={profileData.location}
                    onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                    className="h-6 text-sm"
                  />
                ) : (
                  <span>{profileData.location}</span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Joined {profileData.joinedDate}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact & Links */}
        <Card className="p-6 border bg-card shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Contact & Links</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Label className="w-20 text-sm">Email</Label>
              {isEditing ? (
                <Input 
                  value={profileData.email}
                  onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                  className="flex-1"
                />
              ) : (
                <span className="text-sm">{profileData.email}</span>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5" />
              {isEditing ? (
                <Input 
                  value={profileData.githubUrl}
                  onChange={(e) => setProfileData(prev => ({ ...prev, githubUrl: e.target.value }))}
                  className="flex-1"
                  placeholder="GitHub URL"
                />
              ) : (
                <a href={profileData.githubUrl} className="text-sm text-primary hover:underline">
                  {profileData.githubUrl}
                </a>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5" />
              {isEditing ? (
                <Input 
                  value={profileData.linkedinUrl}
                  onChange={(e) => setProfileData(prev => ({ ...prev, linkedinUrl: e.target.value }))}
                  className="flex-1"
                  placeholder="LinkedIn URL"
                />
              ) : (
                <a href={profileData.linkedinUrl} className="text-sm text-primary hover:underline">
                  {profileData.linkedinUrl}
                </a>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5" />
              {isEditing ? (
                <Input 
                  value={profileData.portfolioUrl}
                  onChange={(e) => setProfileData(prev => ({ ...prev, portfolioUrl: e.target.value }))}
                  className="flex-1"
                  placeholder="Portfolio URL"
                />
              ) : (
                <a href={profileData.portfolioUrl} className="text-sm text-primary hover:underline">
                  {profileData.portfolioUrl}
                </a>
              )}
            </div>
          </div>
        </Card>

        {/* Skills */}
        <Card className="p-6 border bg-card shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Skills</h3>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {profileData.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {skill}
                  {isEditing && (
                    <button
                      onClick={() => removeSkill(skill)}
                      className="ml-2 hover:text-destructive"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </Badge>
              ))}
            </div>
            
            {isEditing && (
              <div className="flex gap-2">
                <Input 
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add a skill..."
                  onKeyPress={(e) => e.key === "Enter" && addSkill()}
                  className="flex-1"
                />
                <Button size="sm" onClick={addSkill}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </Card>

        {/* Interests */}
        <Card className="p-6 border bg-card shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Interests</h3>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {profileData.interests.map((interest, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {interest}
                  {isEditing && (
                    <button
                      onClick={() => removeInterest(interest)}
                      className="ml-2 hover:text-destructive"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </Badge>
              ))}
            </div>
            
            {isEditing && (
              <div className="flex gap-2">
                <Input 
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                  placeholder="Add an interest..."
                  onKeyPress={(e) => e.key === "Enter" && addInterest()}
                  className="flex-1"
                />
                <Button size="sm" onClick={addInterest}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </Card>

        {/* Experience */}
        <Card className="p-6 border bg-card shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Experience</h3>
          {isEditing ? (
            <Textarea 
              value={profileData.experience}
              onChange={(e) => setProfileData(prev => ({ ...prev, experience: e.target.value }))}
              placeholder="Describe your experience..."
              rows={3}
            />
          ) : (
            <p className="text-muted-foreground">{profileData.experience}</p>
          )}
        </Card>

        {/* Achievements */}
        <Card className="p-6 border bg-card shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Achievements</h3>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <span className="text-2xl">{achievement.icon}</span>
                <div className="flex-1">
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Team History */}
        <Card className="p-6 border bg-card shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Team History</h3>
          <div className="space-y-3">
            {teamHistory.map((team, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">{team.name}</h4>
                  <p className="text-sm text-muted-foreground">{team.role} • {team.members} members</p>
                </div>
                <Badge variant={team.status === "Active" ? "default" : "secondary"}>
                  {team.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;