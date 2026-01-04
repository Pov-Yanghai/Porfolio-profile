"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    icon: Briefcase,
    role: "Backend Developer",
    organization: "Akhara - Innovation Project",
    period: "2025-NOW",
    type: "Project",
    description:
      "Designed and implemented relational databases using MySQL/PostgreSQL for machine learning applications.",
    achievements: [
      "Integrated backend with frontend systems for seamless data flow",
      "Maintained data integrity and schema management",
      "Prepared and cleaned data for machine learning workflows",
    ],
  },
  {
    icon: Briefcase,
    role: "Database Designer",
    organization: "RIWAS - Recruitment Document Management",
    period: "2025-NOW",
    type: "Project",
    description:
      "Designed comprehensive database structure for recruitment platform including users, roles, jobs, and applications.",
    achievements: [
      "Created detailed ER diagrams and system architecture",
      "Collaborated with full-stack team for seamless integration",
      "Ensured data security and efficient query performance",
    ],
  },
  {
    icon: GraduationCap,
    role: "Trainer",
    organization: "Next Gen Program (CADT)",
    period: "2023",
    type: "Teaching",
    description: "Taught web design fundamentals to first-year students, focusing on HTML, CSS, and design principles.",
    achievements: [
      "Guided students through practical web design projects",
      "Mentored on best practices and modern design patterns",
      "Fostered collaborative learning environment",
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Professional journey and key contributions</p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-6 mb-12" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <exp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-balance">{exp.role}</h3>
                      <Badge variant="outline" className="text-xs">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">{exp.organization}</p>
                    <Badge className="mb-3 text-xs">{exp.type}</Badge>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1 font-bold">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
