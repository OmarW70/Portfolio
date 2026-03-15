"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, GraduationCap, BookOpen } from "lucide-react";
import Link from "next/link";

const education = {
  period: "2024 — Present",
  title: "Computer Science & Artificial Intelligence",
  institution: "Capital University",
  institutionUrl: "#",
  location: "Cairo, Egypt",
};

const courses = [
  {
    period: "08/2025 – 09/2025",
    title: "Machine Learning Internship",
    institution: "National Telecommunication Institute (NTI)",
    description : "Applied supervised and unsupervised learning techniques. Gained foundational knowledge of Neural Networks and explored their practical applications" , 
    institutionUrl: "https://www.nti.sci.eg/",
    technologies: ["Python", "Machine Learning", "Neural Networks"],
  },

  {
    period: "07/2025 – 08/2025",
    title: "Database Internship",
    institution: "EDGE-PRO For Information Systems",
    description : "Understanding core concepts of relational databases. Working with Entity-Relationship (ER) modeling , normalization , and schema design.", 
    institutionUrl: "https://www.linkedin.com/company/edge-pro-for-information-systems/posts/?feedView=all",
    technologies: ["PostgreSQL", "ERD (Entity Relationship Diagrams)"],
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

    const elements =
      sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl relative z-10">

        {/* Title */}
        <div className="text-center mb-16 animate-on-scroll opacity-0">

          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Academic Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Education</span>
          </h2>

        </div>

        {/* Education Card */}
        <div className="bg-card border border-border rounded-2xl p-6 flex gap-5 items-start animate-on-scroll opacity-0 mb-16">

          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
            <GraduationCap size={22} />
          </div>

          <div>

            <h3 className="text-xl font-bold text-foreground">
              {education.title}
            </h3>

            <p className="text-primary">
  {education.institution}
</p>

            <div className="text-sm text-muted-foreground mt-2 flex gap-2">

              <span>{education.period}</span>

              <span>|</span>

              <span>{education.location}</span>

            </div>

          </div>

        </div>

        {/* Courses / Internships */}
        <div className="animate-on-scroll opacity-0">

          <h3 className="text-4xl md:text-5xl font-bold text-center mb-10">
            <span className="gradient-text">Courses & Internships</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            {courses.map((course) => (

              <div
                key={course.title}
                className="bg-card border border-border rounded-xl p-6 flex gap-4"
              >

                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <BookOpen size={18} />
                </div>

                <div>

                  <span className="text-xs text-muted-foreground">
                    {course.period}
                  </span>

                  <h4 className="text-lg font-semibold mt-1">
                    {course.title}
                  </h4>

                  <Link
                    href={course.institutionUrl}
                    target="_blank"
                    className="text-accent inline-flex items-center gap-1 text-sm"
                  >
                    {course.institution}
                    <ExternalLink size={12} />
                  </Link>
                  <p className="text-sm text-muted-foreground mt-2">
  {course.description}
</p>

                  <div className="flex flex-wrap gap-2 mt-3">

                    {course.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-full"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}