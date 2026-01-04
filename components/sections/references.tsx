"use client"

import { Card } from "@/components/ui/card"
import { FileCheck } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function References() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="references" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">References</h2>
          <p className="section-subtitle">Professional and academic recommendations</p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-6 mb-12" />
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-10 text-center border-2 border-border">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <FileCheck className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">References Available Upon Request</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional references from academic supervisors, faculty advisors, and project mentors are available
              upon request. Please contact me directly for detailed recommendation letters and contact information.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
