"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Heart, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#000F24]/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <Heart className="w-8 h-8 text-[#3E8400] group-hover:text-[#006A3A] transition-colors" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3E8400] to-[#006A3A] group-hover:from-[#006A3A] group-hover:to-[#3E8400] transition-all duration-300">
            Saúde na Mão
          </span>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="#services" className="relative overflow-hidden group">
            <span className="relative z-10 transition-colors group-hover:text-[#3E8400]">
              Serviços
            </span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#3E8400] transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link href="#contact" className="relative overflow-hidden group">
            <span className="relative z-10 transition-colors group-hover:text-[#3E8400]">
              Contato
            </span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#3E8400] transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="https://saashealer.vercel.app"
            className="inline-block bg-gradient-to-r from-[#3E8400] to-[#006A3A] text-white px-4 py-2 rounded-full text-lg font-semibold hover:from-[#006A3A] hover:to-[#3E8400] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Testar demo
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#000F24]/90 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="relative overflow-hidden group"
            >
              <span className="relative z-10 transition-colors group-hover:text-[#3E8400]">
                Serviços
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#3E8400] transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="relative overflow-hidden group"
            >
              <span className="relative z-10 transition-colors group-hover:text-[#3E8400]">
                Contato
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#3E8400] transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="https://saashealer.vercel.app"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block bg-gradient-to-r from-[#3E8400] to-[#006A3A] text-white px-4 py-2 rounded-full text-lg font-semibold hover:from-[#006A3A] hover:to-[#3E8400] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Testar demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
