import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import About from "@/components/About"
import Contact from "@/components/Contact"
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Contact />
      <footer className="bg-primary text-primary-foreground py-8 text-center">
        <p>&copy; 2023 FuturoSaaS. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}

