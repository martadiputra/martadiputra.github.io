import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Information Technology & Network Engineering",
      company: "The Kutaya Guest House",
      period: "2022 – 2025",
      achievements: [
        "Optimized network infrastructure by adding strategic access points, increasing signal strength from 15% to 45% across the property",
        "Implemented proactive network maintenance and monitoring protocols, achieving a reduction in problem reports from 40% to 20%",
        "Analyzed network performance data using Excel and Google Sheets to troubleshoot issues and optimize system reliability",
      ],
    },
    {
      title: "Network Operation Access Engineer",
      company: "Biznet Networks",
      period: "2021 – 2022",
      achievements: [
        "Delivered technical support and troubleshooting for broadband connectivity issues, maintaining a 5/5 customer satisfaction rating",
        "Achieved first-visit resolution rates that improved from 40% to over 75% through systematic diagnosis and problem-solving",
        "Analyzed diagnostic data and escalated unresolved cases to senior engineers, achieving an 85% escalation success rate",
      ],
    },
    {
      title: "IT Staff",
      company: "The Kutaya Guest House",
      period: "2019 – 2020",
      achievements: [
        "Diagnosed and repaired a critical CPU failure, restoring it to 100% operational status and preventing extended downtime",
        "Maintained IT infrastructure and provided day-to-day technical support to ensure seamless operations",
        "Documented system issues and solutions to build a comprehensive knowledge base for future troubleshooting",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-4xl font-bold">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-hover transition-all duration-300 animate-in fade-in slide-in-from-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full gradient-card flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
