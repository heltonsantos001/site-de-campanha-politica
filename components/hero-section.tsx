"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import dantas from "../img/dantas3.jpg"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50"
    >
      <style jsx>{`
  .devtools-indicator {
    display: none;
  }
`}</style>
      {/* FUNDO */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.9), transparent 40%),
            radial-gradient(circle at 80% 30%, rgba(255,255,180,0.35), transparent 35%),
            radial-gradient(circle at 50% 80%, rgba(34,197,94,0.12), transparent 45%)
          `,
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">

          {/* FOTO */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute inset-0 scale-95 rounded-[32px] bg-green-900/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-green-200 shadow-2xl">
                <Image
                  src={dantas}
                  alt="Felipe Dantas"
                  width={700}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* CONTEÚDO */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <span className="mb-6 inline-block rounded-full border border-yellow-300 bg-yellow-100 px-4 py-2 text-sm text-green-900">
              FUTURO • COMPROMISSO • RENOVAÇÃO
            </span>

            <h1 className="text-5xl font-black leading-none tracking-tight text-green-900 sm:text-6xl lg:text-7xl">
              Felipe <span className="text-yellow-500">Dantas</span>
            </h1>

            <div className="my-8 h-1 w-24 rounded-full bg-yellow-400" />

            <p className="max-w-2xl text-lg leading-relaxed text-neutral-700 sm:text-xl">
              Felipe Dantas, 34 anos, é advogado, especialista em Administração
              Pública, Licitações e Contratos Administrativos, além de
              pós-graduado em Gestão Pública. Morador de Camaragibe, conhece de
              perto os desafios enfrentados pela população e acredita que a
              política deve ser feita com responsabilidade, diálogo e compromisso
              com as pessoas.

              Pai, filho e esposo dedicado, Felipe carrega consigo valores como
              respeito, honestidade, cuidado com a família e amor pelo próximo.
              Sua trajetória é marcada pela busca por conhecimento, preparação e
              vontade de contribuir para uma sociedade mais justa, inclusiva e
              com mais oportunidades para todos.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-14 rounded-full bg-green-700 px-8 text-base text-white hover:bg-green-800"
              >
                <a href="#sobre" className="flex items-center">
                  Conheça sobre
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-yellow-400 bg-yellow-100 px-8 text-base text-green-900 hover:bg-yellow-200"
              >
                <a href="#sobre">
                  Saiba mais
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}