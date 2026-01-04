"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import DocumentCard from "@/components/document-card"

const documents = [
  {
    title: "Curriculum Vitae (CV)",
    type: "Resume",
    year: "2025",
    description:
      "Comprehensive CV detailing education, experience, skills, projects, and achievements.",
    pdfUrl: "/documents/CV_POV_YANGHAI.pdf",
  },
  {
    title: "Academic Transcript",
    type: "Official Document",
    year: "2025",
    description:
      "Official transcript from Cambodia Academy of Digital Technology (CADT). Available upon request.",
    
  },
  {
    title: "Cover Letter",
    type: "Professional Document",
    year: "2025",
    description:
      "Personalized cover letter tailored for specific internship or job applications. Available upon request.",
  },
  {
    title: "Recommendation Letter – Academic Advisor",
    type: "Reference",
    year: "2025",
    description:
      "Recommendation highlighting skills and research. Available upon request.",
  },
  {
    title: "Industrial Experience Reference",
    type: "Professional Reference",
    year: "2025",
    description:
      "Industrial experience reference is not yet available and can be provided upon completion of future internships. Available upon request.",
  },
]


export default function ProfileDocuments() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="documents" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Profile Documents</h2>
          <p className="section-subtitle">Official documents, transcripts, and professional recommendations</p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-6 mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DocumentCard {...doc} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
