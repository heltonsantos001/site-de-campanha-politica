"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import dantas from "../img/dantas2.png"
import Image from "next/image"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#propostas", label: "Missão" },
  { href: "#sobre", label: "Redes Sociais" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-green-900/95 backdrop-blur-md shadow-lg"
          : "bg-green-700"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-yellow-400 bg-yellow-400">
            <Image
  priority
  src={dantas}
  alt="Felipe Dantas"
  width={100}
  height={100}
  className="text-lg font-bold text-green-900"
/>
                
             
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white">
                Felipe Dantas
              </span>

              <span className="text-xs uppercase tracking-widest text-yellow-300">
              Pré-candidato Deputado Estadual
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-yellow-300"
              >
                {link.label}
              </a>
            ))}

            <Button className="ml-4 bg-yellow-400 text-green-900 hover:bg-yellow-300">
              <a href="#sobre">Conheça</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-green-700 lg:hidden">
          <div className="space-y-3 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-base font-medium text-white/90 transition-colors hover:text-yellow-300"
              >
                {link.label}
              </a>
            ))}

            <Button className="mt-4 w-full bg-yellow-400 text-green-900 hover:bg-yellow-300">
              Conheça
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}