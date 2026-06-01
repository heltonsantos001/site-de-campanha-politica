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
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50"
    >
      {/* textura */}
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

      <div className="relative z-10 grid min-h-screen lg:grid-cols-2">

        {/* ESQUERDA */}
        <div
          className={`flex items-center justify-center px-8 transition-all duration-1000 lg:px-20 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          <div className="w-full max-w-md py-16">

            <div className="mb-10">
              <span className="text-sm uppercase tracking-[0.3em] text-green-700/70">
                Redes Oficiais
              </span>

              <h2 className="mt-4 text-5xl font-black leading-none text-green-900">
                Conecte-se
              </h2>

              <p className="mt-4 leading-relaxed text-neutral-700">
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
                    className="group relative flex items-center justify-between overflow-hidden rounded-[28px] border border-green-200 bg-white/80 p-5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-yellow-400 hover:shadow-2xl"
                  >
                    {/* brilho */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-yellow-100/40 to-transparent opacity-0 transition-all duration-500 group-hover:translate-x-full group-hover:opacity-100" />

                    <div className="relative z-10 flex items-center gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-700 text-white shadow-lg">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-lg font-semibold text-green-900">
                          {item.name}
                        </p>

                        <p className="text-sm text-neutral-600">
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

        {/* DIREITA */}
        <div
          className={`relative flex items-center justify-center overflow-hidden transition-all duration-1000 delay-200 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-10 opacity-0"
          }`}
        >
          {/* glow */}
          <div className="absolute h-[750px] w-[750px] rounded-full bg-yellow-300/20 blur-3xl" />

          <Image
            src={logo}
            alt="Logo Felipe Dantas"
            priority
            className="relative w-[90%] max-w-[950px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}