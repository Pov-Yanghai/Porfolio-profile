"use client"

import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

const images = [
  "/more-info/first-award4.jpg",
  "/more-info/capstone-project.jpg",
  "/more-info/group-session.jpg",
  "/more-info/next-gen-photo.jpg",
  "/more-info/presentation.jpg"
]

// duplicate for infinite loop
const scrollingImages = [...images, ...images]

export default function ActivityGallery() {
  const controls = useAnimation()

  useEffect(() => {
    startAnimation()
  }, [])

  const startAnimation = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      },
    })
  }

  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="max-w-[1400px] mx-auto text-center px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-foreground">
          GALLERY
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-muted-foreground text-base">
          Check our gallery from recent events
        </p>

        {/* Accent line */}
        <div className="w-20 h-1 bg-red-500 mx-auto mt-6 mb-12" />

        {/* Marquee */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => controls.stop()}
          onMouseLeave={startAnimation}
        >
          <motion.div
            className="flex w-max"
            animate={controls}
          >
            {scrollingImages.map((src, index) => (
              <div
                key={index}
                className="mx-5 shrink-0"
              >
                <Image
                  src={src}
                  alt={`Activity ${index + 1}`}
                  width={400}
                  height={240}
                  className="
                    w-[400px] h-[240px]
                    object-cover rounded-lg
                    transition-transform duration-400
                    hover:scale-105
                    md:w-[400px] md:h-[240px]
                    max-md:w-[320px] max-md:h-[160px]
                  "
                  priority={index < 2}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
