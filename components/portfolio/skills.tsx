"use client";

import { useEffect, useRef } from "react";
import { 
  Code2, 
  Server, 
  Wrench, 
  Users,
  Palette,
  Database,
  Cloud,
  Smartphone
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Palette,
    color: "from-primary to-accent",
    skills: [
            { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-accent to-primary",
    skills: [
      { name: "Python"},
      {name : "Java"}
    
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-primary via-accent to-primary",
    skills: [
      { name: "PostgreSQL"},
      { name: "MySQL" },
    ],
  },
  
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technologies I&apos;ve been working with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="group animate-on-scroll opacity-0"
                style={{ animationDelay: `${categoryIndex * 0.15}s` }}
              >
                <div className="gradient-border rounded-2xl p-6 md:p-8 bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-background`}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="group/skill relative p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 cursor-default"
                        style={{
                          animationDelay: `${categoryIndex * 0.15 + skillIndex * 0.05}s`,
                        }}
                      >
                        <div className="flex flex-col items-center gap-2 text-center">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-sm font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-accent/0 group-hover/skill:from-primary/5 group-hover/skill:to-accent/5 transition-all duration-300 pointer-events-none" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Bar */}
        <div
          className="mt-12 animate-on-scroll opacity-0"
          style={{ animationDelay: "0.6s" }}
        >

        </div>
      </div>
    </section>
  );
}
