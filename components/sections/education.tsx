"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic background and language qualifications</p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-6 mb-12" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* University */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold">
                      B.Sc. Computer Science (Data Science)
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      2023 – Present
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground font-medium mb-2">
                    Cambodia Academy of Digital Technology (CADT)
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-4 h-4 text-primary" />
                    <Badge className="text-xs">100% Decho Scholarship</Badge>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">SQL</Badge>
                      <Badge variant="secondary" className="text-xs">Database Systems</Badge>
                      <Badge variant="secondary" className="text-xs">Python Programming</Badge>
                      <Badge variant="secondary" className="text-xs">Data Analysis</Badge>
                      <Badge variant="secondary" className="text-xs">Data Structures</Badge>
                      <Badge variant="secondary" className="text-xs">Algorithms</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* English Diploma */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold">English Diploma</h3>
                    <Badge variant="outline" className="text-xs">
                      2023 – 2024
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground font-medium mb-3">
                    Panhasastra University of Cambodia (PUC-IFL)
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Skills & Focus:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Academic English
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Professional Communication
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Presentation Skills
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        English Writing
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Reading & Listening
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* High School */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold">High School Diploma</h3>
                    <Badge variant="outline" className="text-xs">
                      2021 – 2023
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground font-medium">
                    Prek Dombok High School
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
