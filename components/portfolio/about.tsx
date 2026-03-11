"use client";

import { useEffect, useRef } from "react";
import { Code2, Sparkles, Rocket, Heart } from "lucide-react";

export function About() {
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

  const highlights = [
    { icon: Code2, label: "5+ Years Experience", color: "from-primary to-accent" },
    { icon: Rocket, label: "50+ Projects", color: "from-accent to-primary" },
    { icon: Heart, label: "100% Dedication", color: "from-primary to-accent" },
    { icon: Sparkles, label: "Award Winning", color: "from-accent to-primary" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-on-scroll opacity-0" style={{ animationDelay: "0.1s" }}>
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.label}
                className="gradient-border rounded-2xl p-4 md:p-6 bg-card text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} text-background mb-3`}>
                  <IconComponent size={24} />
                </div>
                <p className="text-sm md:text-base font-medium text-foreground">{item.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Avatar/Image */}
          <div
            className="lg:col-span-2 flex justify-center animate-on-scroll opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <span className="text-8xl md:text-9xl font-bold gradient-text">A</span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full blur-2xl opacity-30" />
            </div>
          </div>

          {/* Text Content */}
          <div
            className="lg:col-span-3 space-y-6 animate-on-scroll opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-xl text-foreground leading-relaxed">
              I&apos;m a developer passionate about crafting{" "}
              <span className="text-primary font-semibold">accessible</span>,{" "}
              <span className="text-accent font-semibold">pixel-perfect</span> user interfaces 
              that blend thoughtful design with robust engineering.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              My favorite work lies at the intersection of design and development, 
              creating experiences that not only look great but are meticulously 
              built for performance and usability.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              In the past, I&apos;ve had the opportunity to develop software across a 
              variety of settings — from{" "}
              <span className="text-foreground font-medium">innovative startups</span> and{" "}
              <span className="text-foreground font-medium">creative agencies</span> to{" "}
              <span className="text-foreground font-medium">Fortune 500 companies</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              When I&apos;m not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or enjoying a good cup of coffee
              while diving into the latest web development trends.
            </p>

            {/* Tech interests tags */}
            <div className="pt-4 flex flex-wrap gap-3">
              {["React Ecosystem", "TypeScript", "Web Performance", "UI/UX Design", "Open Source"].map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-sm font-medium text-foreground/80"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
