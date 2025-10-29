import { Card } from "@/components/ui/card";
import { BarChart3, FileText, Database } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Creating interactive and insightful dashboards using Tableau to track KPIs and uncover trends.",
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Using Python and SQL to clean, analyze, and interpret complex datasets to answer key business questions.",
    },
    {
      icon: FileText,
      title: "Reporting",
      description: "Translating analytical findings into clear, actionable recommendations and reports for stakeholders.",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-4xl font-bold">What I Offer</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming data into strategic insights that drive business decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-hover transition-all duration-300 group animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg gradient-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
