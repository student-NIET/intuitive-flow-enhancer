import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  ArrowLeft,
  MessageCircle,
  Search,
  Send,
  Plus,
  Phone,
  Video,
  MoreVertical,
  Image,
  Paperclip
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const chats = [
    {
      id: 1,
      type: "team",
      name: "Project Phoenix",
      lastMessage: "Great work on the frontend! 🚀",
      time: "2m ago",
      unread: 3,
      avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=32&h=32&fit=crop",
      online: true,
      teamMembers: ["Alex", "Maria", "David", "You"]
    },
    {
      id: 2,
      type: "personal", 
      name: "Sarah Bennett",
      lastMessage: "Let's schedule the design review for tomorrow",
      time: "15m ago",
      unread: 1,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=32&h=32&fit=crop&crop=face",
      online: true
    },
    {
      id: 3,
      type: "team",
      name: "Code Crusaders",
      lastMessage: "Hackathon submission is ready!",
      time: "1h ago", 
      unread: 0,
      avatar: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=32&h=32&fit=crop",
      online: false,
      teamMembers: ["Sarah", "Ben", "Chloe", "You"]
    },
    {
      id: 4,
      type: "personal",
      name: "Ethan Carter",
      lastMessage: "Thanks for the Python help earlier!",
      time: "3h ago",
      unread: 0,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      online: false
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Alex",
      content: "Hey team! Just pushed the latest changes to the repo",
      time: "10:30 AM",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      isMe: false
    },
    {
      id: 2,
      sender: "You",
      content: "Awesome! I'll review them now and start working on the UI components",
      time: "10:32 AM",
      isMe: true
    },
    {
      id: 3,
      sender: "Maria",
      content: "The data visualization is looking great! 📊",
      time: "10:35 AM",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=32&h=32&fit=crop&crop=face",
      isMe: false
    },
    {
      id: 4,
      sender: "You",
      content: "Thanks! Should we schedule a demo for this afternoon?",
      time: "10:37 AM",
      isMe: true
    },
    {
      id: 5,
      sender: "Alex",
      content: "Great work on the frontend! 🚀",
      time: "10:38 AM",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      isMe: false
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message
      setMessage("");
    }
  };

  if (selectedChat === null) {
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
                <h1 className="text-xl font-semibold">Chats</h1>
              </div>
              
              <Button variant="ghost" size="icon">
                <Plus className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Search */}
        <div className="container mx-auto px-4 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Search conversations..." className="pl-10" />
          </div>
        </div>

        {/* Chat List */}
        <div className="container mx-auto px-4 pb-8">
          <div className="space-y-2">
            {chats.map((chat) => (
              <ChatListItem 
                key={chat.id} 
                chat={chat} 
                onClick={() => setSelectedChat(chat.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const currentChat = chats.find(c => c.id === selectedChat);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Chat Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => setSelectedChat(null)}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={currentChat?.avatar} />
                    <AvatarFallback>{currentChat?.name[0]}</AvatarFallback>
                  </Avatar>
                  {currentChat?.online && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                
                <div>
                  <h2 className="font-semibold">{currentChat?.name}</h2>
                  <p className="text-xs text-muted-foreground">
                    {currentChat?.type === "team" 
                      ? `${currentChat.teamMembers?.length} members` 
                      : currentChat?.online ? "Online" : "Last seen 2h ago"
                    }
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Phone className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 container mx-auto px-4 py-4 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </div>

      {/* Message Input */}
      <div className="border-t bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Paperclip className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Image className="w-5 h-5" />
            </Button>
            
            <div className="flex-1 relative">
              <Input 
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="pr-12"
              />
              <Button 
                size="icon" 
                className="absolute right-1 top-1 h-8 w-8"
                onClick={handleSendMessage}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatListItem = ({ chat, onClick }: { chat: any; onClick: () => void }) => (
  <Card 
    className="p-4 hover:bg-muted/50 cursor-pointer border-0 shadow-sm transition-smooth"
    onClick={onClick}
  >
    <div className="flex items-center gap-3">
      <div className="relative">
        <Avatar className="w-12 h-12">
          <AvatarImage src={chat.avatar} />
          <AvatarFallback>{chat.name[0]}</AvatarFallback>
        </Avatar>
        {chat.online && (
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-medium truncate">{chat.name}</h3>
          {chat.type === "team" && (
            <Badge variant="secondary" className="text-xs">Team</Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
      </div>
      
      <div className="text-right">
        <p className="text-xs text-muted-foreground mb-1">{chat.time}</p>
        {chat.unread > 0 && (
          <Badge variant="destructive" className="text-xs">
            {chat.unread}
          </Badge>
        )}
      </div>
    </div>
  </Card>
);

const MessageBubble = ({ message }: { message: any }) => (
  <div className={`flex gap-3 ${message.isMe ? "flex-row-reverse" : ""}`}>
    {!message.isMe && (
      <Avatar className="w-8 h-8">
        <AvatarImage src={message.avatar} />
        <AvatarFallback>{message.sender[0]}</AvatarFallback>
      </Avatar>
    )}
    
    <div className={`max-w-[80%] ${message.isMe ? "text-right" : ""}`}>
      {!message.isMe && (
        <p className="text-xs text-muted-foreground mb-1">{message.sender}</p>
      )}
      
      <div 
        className={`p-3 rounded-lg ${
          message.isMe 
            ? "gradient-primary text-white" 
            : "bg-muted"
        }`}
      >
        <p className="text-sm">{message.content}</p>
      </div>
      
      <p className="text-xs text-muted-foreground mt-1">{message.time}</p>
    </div>
  </div>
);

export default Chat;