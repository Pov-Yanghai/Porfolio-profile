"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, FileText, Award } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const achievements = [
  {
    icon: Trophy,
    title: "Innovation Award",
    organization: "Akhara Project",
    year: "2025",
    description:
      "Recognized for outstanding contribution to the Akhara innovation project, particularly in database design and backend development.",
  },
  {
    icon: FileText,
    title: "Research Paper Presenter",
    organization: "ACET Conference",
    year: "2025",
    description:
      "Successfully presented research on AR performance optimization using data analysis and algorithm evaluation.",
  },
  {
    icon: Award,
    title: "100% Decho Scholarship",
    organization: "CADT",
    year: "2023",
    description: "Awarded full scholarship for academic excellence and potential in Computer Science studies.",
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-lg text-muted-foreground">Recognition and milestones in my journey</p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-6 mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <Badge className="w-fit mb-3">{achievement.year}</Badge>
                <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground font-medium mb-3">{achievement.organization}</p>
                <p className="text-sm text-muted-foreground flex-1">{achievement.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
