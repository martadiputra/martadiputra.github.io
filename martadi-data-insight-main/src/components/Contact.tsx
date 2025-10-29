import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-4xl font-bold">Let's Connect</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I am actively seeking opportunities as a Data Analyst. If you have a role in mind or just want to chat about data, please reach out.
            </p>
          </div>

          <Card className="p-8 shadow-hover">
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="mailto:martadi@icloud.com"
                className="group"
              >
                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg hover:bg-secondary transition-colors">
                  <div className="w-14 h-14 rounded-full gradient-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      martadi@icloud.com
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/imadedwimartadiputra"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg hover:bg-secondary transition-colors">
                  <div className="w-14 h-14 rounded-full gradient-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      I Made Dwi Martadi Putra
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/martadi"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg hover:bg-secondary transition-colors">
                  <div className="w-14 h-14 rounded-full gradient-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Github className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      View Projects
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </Card>

          <div className="text-center">
            <a href="mailto:martadi@icloud.com">
              <Button size="lg" className="group">
                <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Send Me an Email
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
