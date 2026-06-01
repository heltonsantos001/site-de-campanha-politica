"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  GraduationCap,
  Heart,
  Shield,
  Leaf,
  Users,
  Building,
} from "lucide-react"

const proposals = [
  {
    icon: GraduationCap,
    title: "[PROPOSTA 1]",
    description: "[DESCRIÇÃO DA PROPOSTA 1. DETALHE OS PRINCIPAIS PONTOS E OBJETIVOS DESTA PROPOSTA.]",
    category: "[Categoria 1]",
  },
  {
    icon: Heart,
    title: "[PROPOSTA 2]",
    description: "[DESCRIÇÃO DA PROPOSTA 2. DETALHE OS PRINCIPAIS PONTOS E OBJETIVOS DESTA PROPOSTA.]",
    category: "[Categoria 2]",
  },
  {
    icon: Shield,
    title: "[PROPOSTA 3]",
    description: "[DESCRIÇÃO DA PROPOSTA 3. DETALHE OS PRINCIPAIS PONTOS E OBJETIVOS DESTA PROPOSTA.]",
    category: "[Categoria 3]",
  },
  {
    icon: Leaf,
    title: "[PROPOSTA 4]",
    description: "[DESCRIÇÃO DA PROPOSTA 4. DETALHE OS PRINCIPAIS PONTOS E OBJETIVOS DESTA PROPOSTA.]",
    category: "[Categoria 4]",
  },
  {
    icon: Users,
    title: "[PROPOSTA 5]",
    description: "[DESCRIÇÃO DA PROPOSTA 5. DETALHE OS PRINCIPAIS PONTOS E OBJETIVOS DESTA PROPOSTA.]",
    category: "[Categoria 5]",
  },
  {
    icon: Building,
    title: "[PROPOSTA 6]",
    description: "[DESCRIÇÃO DA PROPOSTA 6. DETALHE OS PRINCIPAIS PONTOS E OBJETIVOS DESTA PROPOSTA.]",
    category: "[Categoria 6]",
  },
]

export function ProposalsSection() {
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
      id="propostas"
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
            [Subtítulo Propostas]
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            [TÍTULO DA SEÇÃO
            <span className="text-accent"> PROPOSTAS]</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            [DESCRIÇÃO GERAL DAS PROPOSTAS. APRESENTE O CONTEXTO E A VISÃO GERAL DO PLANO DE GOVERNO.]
          </p>
        </div>

        {/* Proposals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proposals.map((proposal, index) => (
            <Card
              key={index}
              className={`group bg-card border-border hover:border-accent/50 hover:shadow-lg transition-all duration-500 cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-accent font-medium">
                    {proposal.category}
                  </span>
                </div>
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <proposal.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {proposal.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {proposal.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
