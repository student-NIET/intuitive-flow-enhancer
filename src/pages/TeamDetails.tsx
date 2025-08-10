import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Calendar, MessageCircle, Users } from "lucide-react";

interface Team {
  id: number;
  name: string;
  project: string;
  members: { name: string; avatar?: string }[];
  status?: string;
  role?: string;
  progress?: number;
  description?: string;
  skills?: string[];
}

export default function TeamDetails() {
  const { state } = useLocation() as { state?: { team?: Team } };
  const { id } = useParams();
  const navigate = useNavigate();

  const team: Team = state?.team || {
    id: Number(id),
    name: `Team #${id}`,
    project: "Project details coming soon",
    members: [],
    progress: 0,
    description: "We couldn't load the full context for this team. Try navigating from the Teams page to see all details.",
    skills: [],
  };

  useEffect(() => {
    const title = `${team.name} | Team Details`;
    document.title = title;
    const desc = `View details for ${team.name}: ${team.project}`;

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = desc;

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = `${window.location.origin}/teams/${team.id}`;
  }, [team]);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} aria-label="Go back">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold">Team Details</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="rounded-2xl border bg-card p-6 shadow-sm animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold">{team.name}</h1>
              <p className="text-muted-foreground mt-1">{team.project}</p>
              {team.status && (
                <Badge variant="secondary" className="mt-3 inline-flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {team.status}
                </Badge>
              )}
            </div>
            <div className="w-full md:w-64">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-1">
                <span>Progress</span>
                <span>{team.progress ?? 0}%</span>
              </div>
              <Progress value={team.progress ?? 0} className="h-2" />
            </div>
          </div>
        </section>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 border bg-card shadow-sm animate-fade-in">
            <h2 className="text-lg font-semibold mb-3">About</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {team.description}
            </p>
          </Card>

          <Card className="p-6 border bg-card shadow-sm animate-fade-in">
            <h2 className="text-lg font-semibold mb-3">Team Members</h2>
            {team.members.length ? (
              <div className="flex flex-wrap gap-3">
                {team.members.map((m, i) => (
                  <div className="flex items-center gap-2" key={i}>
                    <Avatar className="w-8 h-8 ring-2 ring-background">
                      {m.avatar ? <AvatarImage src={m.avatar} /> : null}
                      <AvatarFallback>{m.name?.[0] ?? "?"}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{m.name}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No members listed.</p>
            )}
          </Card>

          <Card className="p-6 border bg-card shadow-sm animate-fade-in">
            <h2 className="text-lg font-semibold mb-3">Skills</h2>
            {team.skills && team.skills.length ? (
              <div className="flex flex-wrap gap-2">
                {team.skills.map((s, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">{s}</Badge>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No skills listed.</p>
            )}
          </Card>
        </section>

        <section className="mt-6 flex flex-wrap gap-3">
          <Button variant="outline">
            <MessageCircle className="w-4 h-4 mr-2" />
            Open Chat
          </Button>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Meeting
          </Button>
        </section>
      </main>
    </div>
  );
}
