"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, Mail, FileText } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { smoothScrollTo } from "@/lib/smooth-scroll"

const name = "POV YANGHAI".split("")

// ================= DYNAMIC STATUS SETTINGS =================
const statusMap = {
  internship: {
    text: "Open to Internship Opportunities",
    tooltip: "Actively seeking internship roles",
  },
  remote: {
    text: "Available for Remote Work",
    tooltip: "Can work remotely",
  },
  onsite: {
    text: "Available On-site",
    tooltip: "Can work on-site",
  },
}

const colorClasses: Record<string, string> = {
  internship: "bg-green-500",
  remote: "bg-blue-500",
  onsite: "bg-yellow-500",
}

export default function Hero() {
  // Change this value to "remote" or "onsite" to switch badge
  const status = "internship"
  const { text, tooltip } = statusMap[status]

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 md:pt-28 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container-custom grid lg:grid-cols-[2fr_1fr] gap-12 items-center">

        {/* ================= TEXT CONTENT ================= */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Greeting */}
          <motion.p
            className="text-sm md:text-base uppercase tracking-widest text-primary font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Hello, I’m
          </motion.p>

          {/* Animated Name */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground flex flex-wrap items-center gap-1">
            {name.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.12,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          <h2 className="text-lg md:text-2xl text-muted-foreground font-medium">
            Aspiring Database Administrator / Data Analyst
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Third-year Computer Science student at CADT specializing in Data Science.
            Passionate about database management, backend development, and turning
            complex datasets into actionable insights.
          </p>

          {/* ================= PROFESSIONAL STATUS BADGE ================= */}
          <div className="inline-flex items-center gap-2 bg-background/90 backdrop-blur px-3 py-1.5 rounded-full border shadow-sm cursor-default group">
            <motion.span
              className="relative flex h-3 w-3"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              <span className={`relative inline-flex rounded-full h-3 w-3 ${colorClasses[status]}`}></span>
            </motion.span>
            <span className="text-sm font-medium text-foreground">{text}</span>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
              <div className="text-xs bg-foreground text-background px-3 py-1 rounded-md shadow-md whitespace-nowrap">
                {tooltip}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" className="gap-2" asChild>
              <a href="/documents/CV_POV_YANGHAI.pdf" download>
                <Download className="w-4 h-4" /> Download CV
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => smoothScrollTo("certificates")}
            >
              <FileText className="w-4 h-4" /> Certificates
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => smoothScrollTo("contact")}
            >
              <Mail className="w-4 h-4" /> Contact
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/pov-yanghai-aa4088399/"
              target="_blank"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Pov-Yanghai"
              target="_blank"
              className="text-muted-foreground hover:text-primary"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:povyanghai98@gmail.com"
              className="text-muted-foreground hover:text-primary"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* ================= PROFILE IMAGE ================= */}
        <motion.div
          className="flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-100 rounded-3xl overflow-hidden border border-border shadow-xl">
            <Image
              src="/images/profile-last.png"
              alt="POV YANGHAI"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
