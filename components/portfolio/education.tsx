"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, GraduationCap } from "lucide-react";
import Link from "next/link";

const education = [
  {
    period: "2024 — Present",
    title: "Computer Science Student",
    institution: "Capital University",
    institutionUrl: "#",
    description:
      "Studying core computer science concepts including data structures, algorithms, and software engineering. Actively working on personal projects and improving front-end development skills.",
    technologies: ["Programming", "Algorithms", "Problem Solving" , "Data Structures"],
  },
  {
    period: "2024",
    title: "Frontend Development Learning",
    institution: "Self Learning",
    institutionUrl: "#",
    description:
      "Focused on learning modern frontend technologies and building responsive web applications while practicing UI development and web performance optimization.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
];

export function Education() {
  const sectionRef = useRef(null);

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
    <section id="education" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-5xl relative z-10">

        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Academic Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My academic background and learning journey in computer science and web development
          </p>
        </div>

        <div className="relative">

          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-1/2" />

          <div className="space-y-12">

            {education.map((edu, index) => (

              <div
                key={edu.title + edu.institution}
                className={`relative grid md:grid-cols-2 gap-8 animate-on-scroll opacity-0 ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent -translate-x-1/2 mt-2 ring-4 ring-background" />

                {index % 2 === 0 ? (
                  <>
                    <div className="pl-8 md:pl-0 md:pr-12">

                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                        {edu.period}
                      </span>

                      <div className="gradient-border rounded-2xl p-6 bg-card hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">

                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {edu.title}
                        </h3>

                        <Link
                          href={edu.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-accent transition-colors inline-flex items-center gap-1 mb-3 font-medium"
                        >
                          {edu.institution}
                          <ExternalLink size={14} />
                        </Link>

                        <p className="text-muted-foreground mb-4 leading-relaxed text-left">
                          {edu.description}
                        </p>

                        <div className="flex flex-wrap gap-2 justify-start">
                          {edu.technologies.map((tech) => (
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

                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />

                    <div className="pl-8 md:pl-12">

                      <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-3">
                        {edu.period}
                      </span>

                      <div className="gradient-border rounded-2xl p-6 bg-card hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">

                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {edu.title}
                        </h3>

                        <Link
                          href={edu.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-primary transition-colors inline-flex items-center gap-1 mb-3 font-medium"
                        >
                          {edu.institution}
                          <ExternalLink size={14} />
                        </Link>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {edu.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {edu.technologies.map((tech) => (
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