"use client"

import DocumentCard from "@/components/document-card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="research" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Research & Publications</h2>
          <p className="section-subtitle">Academic contributions and conference presentations</p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-6 mb-12" />
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <DocumentCard
            title="AR Performance Optimization using FAST and ORB Algorithms"
            type="Conference Paper"
            year="2025"
            description="Presented research on augmented reality performance optimization comparing FAST and ORB feature detection algorithms. Conducted comprehensive data analysis, performance evaluation, and statistical reporting for the ACET Conference."
            pdfUrl="/documents/research/ACET_Conference2025_Document.pdf"
          />
        </motion.div>
      </div>
    </section>
  )
}
