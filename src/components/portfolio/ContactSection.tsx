import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="project-card">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    required 
                    className="mt-1 min-h-[120px]" 
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development.
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="mailto:khadkaarun366@gmail.com" 
                className="flex items-center gap-4 p-4 rounded-lg border hover:bg-secondary/50 transition-colors"
              >
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-medium">Personal Email</div>
                  <div className="text-sm text-muted-foreground">khadkaarun366@gmail.com</div>
                </div>
              </a>

              <a 
                href="mailto:khadkaa3@nku.edu" 
                className="flex items-center gap-4 p-4 rounded-lg border hover:bg-secondary/50 transition-colors"
              >
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-medium">University Email</div>
                  <div className="text-sm text-muted-foreground">khadkaa3@nku.edu</div>
                </div>
              </a>

              <a 
                href="https://github.com/khadkaarun/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border hover:bg-secondary/50 transition-colors"
              >
                <Github className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-medium">GitHub</div>
                  <div className="text-sm text-muted-foreground">github.com/khadkaarun</div>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/arun-khadka/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border hover:bg-secondary/50 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">linkedin.com/in/arun-khadka</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;