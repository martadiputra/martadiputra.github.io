import { Card } from "@/components/ui/card";
import { GraduationCap, Database, Code, BarChart3, MessageSquare, Users, Lightbulb, Repeat } from "lucide-react";

const About = () => {
  const technicalSkills = [
    { name: "Spreadsheet", icon: BarChart3 },
    { name: "SQL", icon: Database },
    { name: "Python", icon: Code },
    { name: "Tableau", icon: BarChart3 },
  ];

  const softSkills = [
    { name: "Data Analysis", icon: BarChart3 },
    { name: "Communication", icon: MessageSquare },
    { name: "Teamwork", icon: Users },
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Adaptability", icon: Repeat },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-4xl font-bold">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <Card className="p-8 shadow-card hover:shadow-hover transition-all duration-300">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an aspiring Data Analyst with three years of experience in IT and Network Engineering, where I honed my ability to troubleshoot complex issues, optimize systems, and analyze performance metrics. Recently, I completed training in advanced data analysis and visualization through RevoU's Full Stack Data Analyst program, where I developed proficiency in Python, SQL, and Tableau. I am eager to leverage my skills to transform operational data into actionable insights that drive strategic business decisions.
            </p>
          </Card>

          <Card className="p-6 shadow-card hover:shadow-hover transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              <div>
                <p className="font-medium text-foreground">Full Stack Data Analyst</p>
                <p className="text-muted-foreground">RevoU</p>
                <p className="text-sm text-muted-foreground mb-2">June 2025 – Present</p>
                <p className="text-sm text-muted-foreground">
                  Developed skills in data analysis and visualization with Tableau and Python while working on collaborative, real-world projects. Gained hands-on experience in SQL for data extraction and preprocessing, as well as statistical analysis and dashboard creation to support data-driven decision-making.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">Bachelor of Information Technology</p>
                <p className="text-muted-foreground">Udayana University</p>
                <p className="text-sm text-muted-foreground mb-2">2013 – 2018 | GPA: 3.12/4.00</p>
                <p className="text-sm text-muted-foreground">
                  Thesis: "Design and Development of a Balinese Calendar Application Based on Python"
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 shadow-card hover:shadow-hover transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Code className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium"
                  >
                    <skill.icon className="h-3.5 w-3.5" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-hover transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-full text-sm font-medium"
                  >
                    <skill.icon className="h-3.5 w-3.5" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
