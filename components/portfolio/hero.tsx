"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [displayedName, setDisplayedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullName = "Alex Chen";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

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

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <p
              className="text-lg font-medium text-accent animate-on-scroll opacity-0"
              style={{ animationDelay: "0.1s" }}
            >
              Hello, I&apos;m
            </p>
            
            {/* Typing Name */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold animate-on-scroll opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="gradient-text">
                {displayedName}
              </span>
              <span 
                className={`inline-block w-1 h-12 md:h-14 lg:h-16 ml-1 bg-primary align-middle transition-opacity ${showCursor ? 'opacity-100' : 'opacity-0'}`}
              />
            </h1>
            
            <h2
              className="text-2xl md:text-3xl text-foreground/80 font-medium animate-on-scroll opacity-0"
              style={{ animationDelay: "0.4s" }}
            >
              Full Stack Developer
            </h2>
            
            <p
              className="text-muted-foreground text-lg leading-relaxed animate-on-scroll opacity-0 max-w-lg"
              style={{ animationDelay: "0.5s" }}
            >
              I craft accessible, pixel-perfect digital experiences with modern technologies. 
              Passionate about building products that make a difference.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap items-center gap-4 pt-2 animate-on-scroll opacity-0"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold px-8"
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary"
              >
                <Link href="/resume.pdf" target="_blank">
                  <Download size={18} className="mr-2" />
                  Resume
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div
              className="flex items-center gap-4 pt-4 animate-on-scroll opacity-0"
              style={{ animationDelay: "0.7s" }}
            >
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="GitHub"
              >
                <Github size={22} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-accent hover:bg-accent/10 hover:text-accent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/20"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </Link>
              <Link
                href="mailto:hello@example.com"
                className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="Email"
              >
                <Mail size={22} />
              </Link>
            </div>
          </div>

          {/* Hero Avatar with Gradient */}
          <div
            className="order-1 lg:order-2 flex justify-center animate-on-scroll opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-transparent animate-glow" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-accent/20 via-primary/30 to-transparent animate-float" style={{ animationDelay: "0.5s" }} />
              
              {/* Main circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-secondary via-card to-secondary flex items-center justify-center border border-border">
                <span className="text-7xl md:text-8xl font-bold gradient-text">
                  AC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          aria-label="Scroll to about section"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} className="animate-bounce group-hover:text-primary" />
        </Link>
      </div>
    </section>
  );
}
