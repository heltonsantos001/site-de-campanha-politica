"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
} from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "[LINK INSTAGRAM]",
    followers: "[XXX]K",
    bgColor: "bg-gradient-to-br from-pink-500 to-purple-500",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "[LINK FACEBOOK]",
    followers: "[XXX]K",
    bgColor: "bg-blue-600",
  },
  {
    name: "TikTok",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8"
      >
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
    url: "[LINK TIKTOK]",
    followers: "[XXX]K",
    bgColor: "bg-black",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "[LINK YOUTUBE]",
    followers: "[XXX]K",
    bgColor: "bg-red-600",
  },
  {
    name: "X / Twitter",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    url: "[LINK X/TWITTER]",
    followers: "[XXX]K",
    bgColor: "bg-gray-900",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "[LINK WHATSAPP]",
    followers: "Canal",
    bgColor: "bg-green-500",
  },
]

export function SocialSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="redes"
      className="py-24 lg:py-32 bg-secondary"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            [Subtítulo Redes]
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            [TÍTULO DA SEÇÃO
            <span className="text-accent"> REDES SOCIAIS]</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            [DESCRIÇÃO DA SEÇÃO. CONVIDE OS VISITANTES A SEGUIR NAS REDES SOCIAIS.]
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl bg-card border border-border ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 ${social.bgColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative z-10">
                  <div className={`w-16 h-16 mx-auto rounded-full ${social.bgColor} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-white transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">
                    {social.followers} seguidores
                  </p>
                </div>
              </a>
            )
          })}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-muted-foreground mb-4">
            [TEXTO DE CHAMADA PARA AÇÃO]
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            [BOTÃO PRINCIPAL]
          </Button>
        </div>
      </div>
    </section>
  )
}
