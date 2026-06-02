"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import logo from "../img/logo3.jpg"

import {
  Instagram,
  Linkedin,
  Mail,
  Music2,
  ArrowUpRight,
} from "lucide-react"

const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    user: "@felipedantas.of",
    href: "https://www.instagram.com/felipedantas.of?igsh=MWRjdDFwbWhiOWl5MQ%3D%3D&utm_source=qr",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    user: "Felipe Dantas",
    href: "https://www.linkedin.com/in/felipe-dantas",
  },
  {
    icon: Mail,
    name: "Email",
    user: "mkt.felipedantasof@email.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=mkt.felipedantasof@email.com&su=Contato%20pelo%20site",
  },
  {
    icon: Music2,
    name: "TikTok",
    user: "@felipedantas.of",
    href: "https://www.tiktok.com/@felipedantas.of?is_from_webapp=1&sender_device=pc",
  },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50"
    >
      {/* Fundo */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `
            radial-gradient(circle at top left, rgba(255,255,255,0.95), transparent 35%),
            radial-gradient(circle at bottom right, rgba(250,204,21,0.18), transparent 40%),
            radial-gradient(circle at center, rgba(34,197,94,0.08), transparent 50%)
          `,
        }}
      />

      <div className="relative z-10 grid lg:min-h-screen lg:grid-cols-2">
        {/* IMAGEM */}
        <div
          className={`order-first lg:order-last relative flex items-center justify-center overflow-hidden px-6 py-10 transition-all duration-1000 delay-200 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-10 opacity-0"
          }`}
        >
          <div className="absolute h-[350px] w-[350px] rounded-full bg-yellow-300/20 blur-3xl sm:h-[500px] sm:w-[500px] lg:h-[750px] lg:w-[750px]" />

          <Image
            src={logo}
            alt="Logo Felipe Dantas"
            priority
            className="relative w-full max-w-[280px] object-contain drop-shadow-2xl sm:max-w-[420px] lg:max-w-[950px]"
          />
        </div>

        {/* REDES */}
        <div
          className={`flex items-center justify-center px-6 transition-all duration-1000 lg:px-20 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          <div className="w-full max-w-md py-12 lg:py-16">
            <div className="mb-10 text-center lg:text-left">
              <span className="text-sm uppercase tracking-[0.3em] text-green-700/70">
                Redes Oficiais
              </span>

              <h2 className="mt-4 text-4xl font-black leading-none text-green-900 sm:text-5xl">
                Conecte-se
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-neutral-700 sm:text-base">
                Acompanhe conteúdos, propostas e atualizações nas redes sociais.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((item, index) => {
                const Icon = item.icon

                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between overflow-hidden rounded-3xl border border-green-200 bg-white/80 p-4 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400 hover:shadow-2xl sm:p-5"
                  >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-yellow-100/40 to-transparent opacity-0 transition-all duration-500 group-hover:translate-x-full group-hover:opacity-100" />

                    <div className="relative z-10 flex items-center gap-4 sm:gap-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-700 text-white shadow-lg sm:h-14 sm:w-14">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-base font-semibold text-green-900 sm:text-lg">
                          {item.name}
                        </p>

                        <p className="text-xs text-neutral-600 sm:text-sm">
                          {item.user}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className="relative z-10 h-5 w-5 text-yellow-500 transition-colors group-hover:text-green-700" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}