"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Let&apos;s Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I&apos;m currently open to new opportunities. Whether you have a project in mind or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 animate-on-scroll opacity-0" style={{ animationDelay: "0.1s" }}>
            <div className="gradient-border rounded-2xl p-6 bg-card">
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <Link
                  href="mailto:hello@alexchen.dev"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-background">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground group-hover:text-primary transition-colors font-medium">
                      hello@alexchen.dev
                    </p>
                  </div>
                </Link>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-primary text-background">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">
                      San Francisco, CA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-background">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick note */}
            <div className="gradient-border rounded-2xl p-6 bg-card">
              <p className="text-muted-foreground text-sm leading-relaxed">
                I typically respond within 24-48 hours. For urgent matters, please include &quot;URGENT&quot; in the subject line.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-on-scroll opacity-0" style={{ animationDelay: "0.2s" }}>
            <form
              onSubmit={handleSubmit}
              className="gradient-border rounded-2xl p-6 md:p-8 bg-card"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none text-foreground placeholder:text-muted-foreground"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
