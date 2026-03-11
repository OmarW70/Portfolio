"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and analytics dashboard. Built for scale with modern architecture.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/images/project-ecommerce.jpg",
    category: "Full Stack",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces. Perfect for remote teams.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/images/project-tasks.jpg",
    category: "Web App",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy using cutting-edge LLMs.",
    technologies: ["Next.js", "OpenAI API", "Vercel AI SDK", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/images/project-ai.jpg",
    category: "AI / ML",
  },
  {
    title: "Portfolio Builder",
    description:
      "A drag-and-drop portfolio builder that allows developers to create stunning portfolios without coding knowledge.",
    technologies: ["React", "TypeScript", "DnD Kit", "Supabase"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/images/project-portfolio.jpg",
    category: "SaaS",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts, interactive maps, and historical data visualization.",
    technologies: ["React", "Chart.js", "OpenWeather API", "Mapbox"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/images/project-weather.jpg",
    category: "Web App",
  },
  {
    title: "Code Snippet Manager",
    description:
      "A VS Code extension for organizing and sharing code snippets with syntax highlighting and powerful search.",
    technologies: ["TypeScript", "VS Code API", "SQLite"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/images/project-code.jpg",
    category: "Developer Tool",
  },
];

export function Projects() {
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
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of projects I&apos;ve built, from web applications to developer tools
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gradient-border rounded-2xl overflow-hidden bg-card h-full flex flex-col hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 flex items-center justify-center">
                    <span className="text-6xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-primary border border-primary/20">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-background/90 text-foreground hover:text-primary hover:bg-background transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={18} />
                      </Link>
                      {project.live && (
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-background/90 text-foreground hover:text-accent hover:bg-background transition-colors"
                          aria-label={`View ${project.title} live`}
                        >
                          <ExternalLink size={18} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium text-primary/80 bg-primary/10 rounded-md border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium text-muted-foreground">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground"
                    >
                      <Link href={project.live || "#"} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-border hover:border-primary hover:bg-primary/10"
                    >
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={14} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className="text-center mt-12 animate-on-scroll opacity-0"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary group"
          >
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
