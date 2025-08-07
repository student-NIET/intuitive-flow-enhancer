import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Search, 
  Filter,
  UserPlus,
  ArrowLeft,
  MapPin,
  Star,
  Clock
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");

  const people = [
    {
      name: "Ethan Carter",
      role: "Python, Data Analysis", 
      location: "San Francisco, CA",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      skills: ["Python", "Machine Learning", "Data Science"],
      rating: 4.9,
      availability: "Available now"
    },
    {
      name: "Sophia Bennett",
      role: "UI/UX Design, Figma",
      location: "New York, NY", 
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=64&h=64&fit=crop&crop=face",
      skills: ["UI/UX", "Figma", "Design Systems"],
      rating: 4.8,
      availability: "Available weekends"
    },
    {
      name: "Pragya Misra",
      role: "React, JavaScript",
      location: "Austin, TX",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      skills: ["React", "JavaScript", "Frontend"],
      rating: 4.7,
      availability: "Available now"
    },
    {
      name: "Olivia Hayes", 
      role: "Machine Learning, TensorFlow",
      location: "Seattle, WA",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face",
      skills: ["ML", "TensorFlow", "AI"],
      rating: 5.0,
      availability: "Available evenings"
    },
    {
      name: "Noah Foster",
      role: "Java, Android Development",
      location: "Boston, MA",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      skills: ["Java", "Android", "Mobile"],
      rating: 4.6,
      availability: "Available now"
    },
    {
      name: "Ava Mitchell",
      role: "iOS Development, Swift",
      location: "Los Angeles, CA",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      skills: ["iOS", "Swift", "Mobile"],
      rating: 4.9,
      availability: "Available weekends"
    }
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "design", label: "Design" },
    { id: "ml", label: "ML/AI" },
    { id: "mobile", label: "Mobile" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-semibold">Discover Teammates</h1>
          </div>
        </div>
      </header>

      {/* Search & Filters */}
      <div className="container mx-auto px-4 py-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input placeholder="Search by skills, name, or location..." className="pl-10" />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className="whitespace-nowrap"
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {people.length} developers found
          </p>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            More filters
          </Button>
        </div>
      </div>

      {/* People Grid */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PersonCard = ({ person }: { person: any }) => (
  <Card className="p-6 hover-lift border-0 shadow-soft bg-white">
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <Avatar className="w-12 h-12">
          <AvatarImage src={person.avatar} />
          <AvatarFallback>{person.name[0]}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <h3 className="font-semibold">{person.name}</h3>
          <p className="text-sm text-muted-foreground">{person.role}</p>
          
          <div className="flex items-center gap-1 mt-1">
            <MapPin className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{person.location}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-medium">{person.rating}</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {person.skills.map((skill: string, index: number) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
      </div>
      
      <div className="flex items-center gap-2 text-sm">
        <Clock className="w-4 h-4 text-green-600" />
        <span className="text-green-600">{person.availability}</span>
      </div>
      
      <Button size="sm" className="w-full">
        <UserPlus className="w-4 h-4 mr-2" />
        Connect
      </Button>
    </div>
  </Card>
);

export default Discover;