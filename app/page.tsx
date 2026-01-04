import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Research from "@/components/sections/research"
import Education from "@/components/sections/education"
import Certificates from "@/components/sections/certificates"
import ProfileDocuments from "@/components/sections/profile-documents"
import References from "@/components/sections/references"
import Contact from "@/components/sections/contact"
import ActivityGallery from "@/components/sections/activitygallery"
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Research />
      <Education />
      <Certificates />
      <ProfileDocuments />
      <References />
      <ActivityGallery />
      <Contact />
    </main>
  )
}
