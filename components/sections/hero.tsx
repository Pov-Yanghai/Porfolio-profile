// "use client"

// import { Button } from "@/components/ui/button"
// import { Github, Linkedin, Download, Mail, FileText } from "lucide-react"
// import Image from "next/image"
// import { motion } from "framer-motion"
// import { smoothScrollTo } from "@/lib/smooth-scroll"

// // Split your name into letters
// const name = "POV YANGHAI".split("")

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex items-center justify-center section-padding pt-32 bg-gradient-to-b from-background to-secondary/30"
//     >
//       <div className="container-custom max-w-6xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-12 items-center">
        
//         {/* Text Content */}
//         <motion.div
//           className="space-y-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Animated Name - letter by letter */}
//           <h1 className="text-5xl md:text-6xl font-bold text-foreground flex gap-1">
//             {name.map((letter, index) => (
//               <motion.span
//                 key={index}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   delay: index * 0.15, // letters appear one by one
//                   type: "spring",
//                   stiffness: 100,
//                   damping: 10,
//                 }}
//               >
//                 {letter}
//               </motion.span>
//             ))}
//           </h1>

//           <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
//             Aspiring Database Administrator / Data Analyst
//           </h2>

//           <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
//             Third-year Computer Science student at CADT specializing in Data Science. Passionate about database management, backend development, and turning complex datasets into actionable insights.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-wrap gap-3">
//             <Button size="lg" className="gap-2" asChild>
//               <a href="/documents/CV_POV_YANGHAI.pdf" download>
//                 <Download className="w-4 h-4" /> Download CV
//               </a>
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="gap-2 bg-transparent"
//               onClick={() => smoothScrollTo("certificates")}
//             >
//               <FileText className="w-4 h-4" /> Certificates
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="gap-2 bg-transparent"
//               onClick={() => smoothScrollTo("contact")}
//             >
//               <Mail className="w-4 h-4" /> Contact
//             </Button>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-4 pt-2">
//             <a href="https://www.linkedin.com/in/pov-yanghai-aa4088399/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
//               <Linkedin className="w-6 h-6" />
//             </a>
//             <a href="https://github.com/Pov-Yanghai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
//               <Github className="w-6 h-6" />
//             </a>
//             <a href="mailto:povyanghai98@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
//               <Mail className="w-6 h-6" />
//             </a>
//           </div>
//         </motion.div>

//         {/* Profile Image */}
//         <motion.div
//           className="flex justify-center lg:justify-end"
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//         >
//           <div className="relative w-100 h-100 md:w-95 md:h-125 rounded-4xl overflow-hidden border-2 border-border shadow-xl">
//             <Image
//               src="/images/profile-last.png"
//               alt="POV YANGHAI - Professional Photo"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, Mail, FileText } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { smoothScrollTo } from "@/lib/smooth-scroll"

const name = "POV YANGHAI".split("")

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 md:pt-28 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container-custom grid lg:grid-cols-[2fr_1fr] gap-12 items-center">

        {/* Text Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="gap-2" asChild>
              <a href="/documents/CV_POV_YANGHAI.pdf" download>
                <Download className="w-4 h-4" /> Download CV
              </a>
            </Button>

            <Button size="lg" variant="outline" className="gap-2" onClick={() => smoothScrollTo("certificates")}>
              <FileText className="w-4 h-4" /> Certificates
            </Button>

            <Button size="lg" variant="outline" className="gap-2" onClick={() => smoothScrollTo("contact")}>
              <Mail className="w-4 h-4" /> Contact
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            <a href="https://www.linkedin.com/in/pov-yanghai-aa4088399/" target="_blank" className="text-muted-foreground hover:text-primary">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Pov-Yanghai" target="_blank" className="text-muted-foreground hover:text-primary">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:povyanghai98@gmail.com" className="text-muted-foreground hover:text-primary">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-96 rounded-3xl overflow-hidden border border-border shadow-xl">
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
