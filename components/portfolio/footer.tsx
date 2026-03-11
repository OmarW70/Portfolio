"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold gradient-text">
            AC
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 text-muted-foreground"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          {/* Credits */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Designed & Built with <Heart size={14} className="text-primary fill-primary" /> by Alex Chen
            </p>
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
