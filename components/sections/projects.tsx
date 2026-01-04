"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    title: "Akhara - Innovation Project",
    role: "Backend Developer",
    period: "2025-NOW",
    description:
      "Comprehensive backend system for an innovation project focusing on machine learning integration and data management.",
    technologies: ["MySQL", "PostgreSQL", "Node.js", "REST API", "Database Design"],
    highlights: [
      "Designed relational database schema for ML applications",
      "Integrated backend with frontend systems",
      "Implemented data preparation and cleaning workflows",
      "Maintained data integrity and security",
    ],
    github: "https://github.com/PunleuTY/Khmer-Data-Annotation-Tool.git",
    demo: "/videos/akhara-demo.mp4",
  },
  {
  title: "RIWAS - Recruitment Platform",
  role: "Database Designer",
  period: "2025-NOW",
  description:
    "Front-end interface built for recruitment platform. Database schema and system architecture designed. Next phase: implement full backend functionality and workflows.",
  technologies: ["Database Design", "ER Diagrams", "SQL", "System Architecture", "React.js"],
  highlights: [
    "Designed database structure and ER diagrams",
    "Planned user roles and permissions system",
    "Developed front-end interface for job listings and applications",
    "Next: integrate backend and implement complete functionality",
  ],
  github: "https://github.com/EngMengeang/RIWAS_V0.git",
  demo: "/videos/riwas-demo.mp4",
}
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Key projects demonstrating technical skills and problem-solving abilities</p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-6 mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow flex flex-col h-full border border-border">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-balance">{project.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.role}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {project.period}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} className="bg-primary/10 text-primary text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1 font-bold">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" className="flex-1 gap-2 bg-transparent" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 gap-2 bg-transparent" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
