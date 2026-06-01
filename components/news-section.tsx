"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { ImagePlaceholder } from "@/components/image-placeholder"

const news = [
  {
    category: "[Categoria 1]",
    date: "[Data 1]",
    title: "[TÍTULO DA NOTÍCIA 1]",
    excerpt: "[RESUMO DA NOTÍCIA 1. DESCREVA BREVEMENTE O CONTEÚDO DA MATÉRIA.]",
  },
  {
    category: "[Categoria 2]",
    date: "[Data 2]",
    title: "[TÍTULO DA NOTÍCIA 2]",
    excerpt: "[RESUMO DA NOTÍCIA 2. DESCREVA BREVEMENTE O CONTEÚDO DA MATÉRIA.]",
  },
  {
    category: "[Categoria 3]",
    date: "[Data 3]",
    title: "[TÍTULO DA NOTÍCIA 3]",
    excerpt: "[RESUMO DA NOTÍCIA 3. DESCREVA BREVEMENTE O CONTEÚDO DA MATÉRIA.]",
  },
]

export function NewsSection() {
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
      id="noticias"
      className="py-24 lg:py-32 bg-secondary"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-2xl mb-6 md:mb-0">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              [Subtítulo Notícias]
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              [TÍTULO DA SEÇÃO
              <span className="text-accent"> NOTÍCIAS]</span>
            </h2>
          </div>
          <Button variant="outline" className="w-fit group border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            [Ver Todas]
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card
              key={index}
              className={`group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-500 cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <ImagePlaceholder
                  label={`Imagem Notícia ${index + 1}`}
                  aspectRatio="video"
                  size="md"
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  {item.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
