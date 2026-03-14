"use client";

import React, { useEffect, useRef, useState } from "react";
import { Rocket, Heart } from "lucide-react";

export function About() {
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

  const highlights = [
    { icon: Rocket, label: "Projects", value: 3, suffix: "+", color: "from-accent to-primary" },
    { icon: Heart, label: "Dedication", value: 100, suffix: "%", color: "from-primary to-accent" },
  ];

  const Counter = ({ value, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 1500;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;

        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [value]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 max-w-md mx-auto gap-6 mb-16 animate-on-scroll opacity-0">
          {highlights.map((item) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.label}
                className="gradient-border rounded-2xl p-6 bg-card text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} text-background mb-3`}
                >
                  <IconComponent size={24} />
                </div>

                <p className="text-xl font-bold text-foreground">
                  <Counter value={item.value} suffix={item.suffix} />
                </p>

                <p className="text-sm text-muted-foreground">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Avatar */}
          <div
            className="lg:col-span-2 flex justify-center animate-on-scroll opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center overflow-hidden">
                  <img
                    src="images/Profile.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover object-top rounded-2xl"
                  />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full blur-2xl opacity-30" />
            </div>
          </div>

          {/* Text */}
          <div
            className="lg:col-span-3 space-y-6 animate-on-scroll opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-xl text-foreground leading-relaxed">
              I&apos;m a front-end developer passionate about building{" "}
              <span className="text-primary font-semibold">responsive</span>,{" "}
              <span className="text-accent font-semibold">user-friendly</span>{" "}
              web interfaces and turning ideas into interactive digital
              experiences.
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
              I enjoy learning modern web technologies and continuously
              improving my skills to create websites that are not only visually
              appealing but also focused on performance, usability, and clean
              design.
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
              I spend my time building projects, exploring new tools and
              frameworks, and refining my problem-solving and development
              skills while growing as a front-end developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}