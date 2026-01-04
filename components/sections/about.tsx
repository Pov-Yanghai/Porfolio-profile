"use client"

import { Card } from "@/components/ui/card"
import { Code2, Database, TrendingUp, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const highlights = [
  {
    icon: Database,
    title: "Database Expertise",
    description:
      "Specialized in SQL, MySQL, and PostgreSQL with strong focus on relational database design and optimization.",
  },
  {
    icon: Code2,
    title: "Backend Development",
    description: "Proficient in building scalable backend systems with Node.js, REST APIs, and modern frameworks.",
  },
  {
    icon: TrendingUp,
    title: "Data Analysis",
    description: "Experienced in data cleaning, visualization, and statistical analysis using Python, R, and Excel.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Strong communicator and mentor, with experience teaching and collaborating on team projects.",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            {
              "I'm a third-year Computer Science student at Cambodia Academy of Digital Technology (CADT), specializing in"
            }{" "}
            Data Science. My passion lies in databases, backend systems, and transforming raw data into actionable
            insights.
          </p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-6 mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-balance">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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
