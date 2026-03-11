"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, Briefcase } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior Frontend Engineer",
    company: "TechCorp Inc",
    companyUrl: "https://example.com",
    description:
      "Build and maintain critical components used to construct the frontend, across the whole product. Work closely with cross-functional teams to implement and advocate for best practices in web accessibility.",
    technologies: ["JavaScript", "TypeScript", "React", "Storybook"],
  },
  {
    period: "2022 — 2024",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    companyUrl: "https://example.com",
    description:
      "Developed and shipped highly interactive web applications for a diverse array of clients. Built robust APIs and microservices architecture to support high-traffic applications.",
    technologies: ["React", "Node.js", "Python", "AWS", "PostgreSQL"],
  },
  {
    period: "2020 — 2022",
    title: "Frontend Developer",
    company: "Digital Agency",
    companyUrl: "https://example.com",
    description:
      "Collaborated with designers and other developers to build responsive, accessible websites and web applications for clients across various industries.",
    technologies: ["JavaScript", "Vue.js", "SCSS", "WordPress"],
  },
  {
    period: "2019 — 2020",
    title: "Junior Developer",
    company: "WebDev Studio",
    companyUrl: "https://example.com",
    description:
      "Assisted in developing and maintaining client websites, fixing bugs, and implementing new features under the guidance of senior developers.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  },
];

export function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A timeline of my professional journey and the companies I&apos;ve worked with
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className={`relative grid md:grid-cols-2 gap-8 animate-on-scroll opacity-0 ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent -translate-x-1/2 mt-2 ring-4 ring-background" />

                {index % 2 === 0 ? (
                  <>
                    {/* Content - Left side */}
                    <div className="pl-8 md:pl-0 md:pr-12">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                        {exp.period}
                      </span>
                      <div className="gradient-border rounded-2xl p-6 bg-card hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <Link
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-accent transition-colors inline-flex items-center gap-1 mb-3 font-medium"
                        >
                          {exp.company}
                          <ExternalLink size={14} />
                        </Link>
                        <p className="text-muted-foreground mb-4 leading-relaxed text-left">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-start">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Spacer - Right side */}
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    {/* Spacer - Left side */}
                    <div className="hidden md:block" />
                    {/* Content - Right side */}
                    <div className="pl-8 md:pl-12">
                      <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-3">
                        {exp.period}
                      </span>
                      <div className="gradient-border rounded-2xl p-6 bg-card hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <Link
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-primary transition-colors inline-flex items-center gap-1 mb-3 font-medium"
                        >
                          {exp.company}
                          <ExternalLink size={14} />
                        </Link>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full border border-accent/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
