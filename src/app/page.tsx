import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import About from "@/components/About"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 relative">
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <Features />
        <About />
        <Contact />
      </div>
    </main>
  )
}

