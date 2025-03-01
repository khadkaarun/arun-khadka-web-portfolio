import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  type: string;
  tech: string[];
  summary: string;
  features: string[];
  link?: string;
  github?: string;
  className?: string;
}

const ProjectCard = ({ title, type, tech, summary, features, link, github, className }: ProjectCardProps) => {
  return (
    <Card className={`project-card h-full ${className}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl mb-2">{title}</CardTitle>
            <CardDescription className="text-primary/70 font-medium mb-3">{type}</CardDescription>
          </div>
          <div className="flex gap-2">
            {link && (
              <Button variant="ghost" size="sm" asChild>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
            {github && (
              <Button variant="ghost" size="sm" asChild>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span key={index} className="tech-tag">
              {item}
            </span>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground mb-4">{summary}</p>
        
        <div>
          <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start">
                <span className="mr-2 text-primary">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;