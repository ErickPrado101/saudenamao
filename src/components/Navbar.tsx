"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Heart className="w-8 h-8 text-green-600" />
          <span className="text-2xl font-bold text-gray-900">
            Saúde na Mão
          </span>
        </Link>
        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href="#services"
            className="text-gray-900 hover:underline transition-colors"
          >
            Serviços
          </Link>
          <Link
            href="#contact"
            className="text-gray-900 hover:underline transition-colors"
          >
            Contato
          </Link>
          <Link
            href="https://saashealer.vercel.app"
            className="inline-block bg-gradient-to-r from-[#3E8400] to-[#006A3A] text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-[#006A3A] hover:to-[#3E8400] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Testar demo
          </Link>
        </div>
        {/* Botão do Menu Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-900 focus:outline-none">
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>
      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-900 hover:underline transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-900 hover:underline transition-colors"
            >
              Contato
            </Link>
            <Link
              href="https://saashealer.vercel.app"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block border border-gray-300 text-gray-900 px-4 py-2 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-sm"
            >
              Testar demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
