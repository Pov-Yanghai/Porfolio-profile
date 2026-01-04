"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import DocumentCard from "@/components/document-card"

const certificates = [
  {
    title: "100% Decho Scholarship",
    type: "Scholarship Certificate",
    year: "2023",
    description: "Full scholarship awarded for academic excellence in Computer Science at CADT.",
    pdfUrl: "/documents/certificates/decho-scholarship.pdf",
  },
  {
    title: "English Diploma",
    type: "Language Certificate",
    year: "2023",
    description: "Completed English Diploma program at Panhasastra University of Cambodia (PUC).",
    pdfUrl: "/documents/certificates/Diploma.pdf",
  },
  {
    title: "Trainer Certification",
    type: "Professional Training",
    year: "2024",
    description: "Certification for completing professional training on teaching or technical mentoring.",
    pdfUrl: "/documents/certificates/Trainer.pdf"
  },
  {
    title: "Innovation Award - Akhara Project",
    type: "Achievement",
    year: "2025",
    description: "Recognition for outstanding contribution in database design and backend development.",
    pdfUrl: "/documents/certificates/innovation-award.pdf",
  },
   {
    title: "Research Paper Presenter",
    type: "Academic Achievement",
    year: "2025",
    description: "Successfully presented research on AR performance optimization at ACET Conference.",
    pdfUrl: "/documents/certificates/Research_paper.pdf",
  },
]

export default function Certificates() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certificates" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Certificates & Achievements</h2>
          <p className="section-subtitle">
            Academic honors, language diplomas, professional certifications, and recognition for excellence
          </p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-6 mb-12" />
        </motion.div>
        

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DocumentCard {...cert} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
