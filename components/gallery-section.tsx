"use client"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"
import { ImagePlaceholder } from "@/components/image-placeholder"

const galleryImages = [
  { label: "Imagem do Evento 1", category: "[Categoria 1]" },
  { label: "Imagem do Evento 2", category: "[Categoria 2]" },
  { label: "Imagem do Evento 3", category: "[Categoria 3]" },
  { label: "Imagem do Evento 4", category: "[Categoria 4]" },
  { label: "Imagem da Campanha", category: "[Categoria 5]" },
  { label: "Adicionar Foto", category: "[Categoria 6]" },
]

export function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
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
      id="galeria"
      className="py-24 lg:py-32 bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            [Subtítulo Galeria]
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            [TÍTULO DA SEÇÃO
            <span className="text-accent"> GALERIA]</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            [DESCRIÇÃO DA GALERIA DE FOTOS. APRESENTE O CONTEXTO DAS IMAGENS QUE SERÃO EXIBIDAS.]
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedIndex(index)}
            >
              <ImagePlaceholder
                label={image.label}
                aspectRatio={index === 0 ? "square" : "video"}
                size={index === 0 ? "lg" : "md"}
                className={`w-full transition-transform duration-500 group-hover:scale-105 ${
                  index === 0 ? "min-h-[400px] md:min-h-[500px]" : "min-h-[200px]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs uppercase tracking-widest text-accent font-medium">
                  {image.category}
                </span>
                <p className="text-primary-foreground font-medium mt-1">
                  {image.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
            onClick={() => setSelectedIndex(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-4xl w-full">
            <ImagePlaceholder
              label={galleryImages[selectedIndex].label}
              aspectRatio="video"
              size="lg"
              className="min-h-[400px] bg-primary-foreground/10"
            />
          </div>
        </div>
      )}
    </section>
  )
}
