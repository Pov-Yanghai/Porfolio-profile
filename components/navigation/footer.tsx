"use client"

import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { smoothScrollTo } from "@/lib/smooth-scroll"
import type React from "react"

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    smoothScrollTo(href)
  }

  return (
    <footer className="bg-card border-t">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">POV YANGHAI</h3>
            <p className="text-sm text-muted-foreground">
              Aspiring Database Administrator & Data Analyst passionate about building robust backend systems and
              data-driven solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About Me
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "projects")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:povyanghai98@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                povyanghai98@gmail.com
              </a>
              <a
                href="tel:+85596781889"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +855 96 7817 889
              </a>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://www.linkedin.com/in/pov-yanghai-aa4088399/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Pov-Yanghai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} POV YANGHAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
