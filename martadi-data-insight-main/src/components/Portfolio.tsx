import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectDashboard from "@/assets/project-dashboard.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-4xl font-bold">My Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <Card className="overflow-hidden shadow-hover">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden group">
                <img
                  src={projectDashboard}
                  alt="RevoBizRepublicNet Customer Churn Analysis Dashboard"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-primary-foreground font-medium">Interactive Tableau Dashboard</p>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      Tableau
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      SQL
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      Data Analysis
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    RevoBizRepublicNet - ISP Customer Churn Analysis
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">September 2025</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Problem</h4>
                    <p className="text-muted-foreground">
                      Identified 27,043 churned customers despite no reports through conventional channels, with a total churn rate of 55.41%.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Action</h4>
                    <p className="text-muted-foreground">
                      Utilized Tableau to analyze customer segments (33,528 active vs 27,043 churned), identifying poor service quality and low add-on engagement as significant drivers of churn.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Impact</h4>
                    <p className="text-muted-foreground">
                      Designed and deployed an interactive dashboard that visualized key performance indicators, reducing data presentation time to stakeholders from 1-2 hours to 5-10 minutes.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Result</h4>
                    <p className="text-muted-foreground">
                      Translated analytical findings into three targeted recommendations projected to reduce churn by approximately 15%.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <Button className="group">
                    <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    View Dashboard
                  </Button>
                  <Button variant="outline" className="group">
                    <Github className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
