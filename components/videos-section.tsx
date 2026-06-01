"use client"

import { useEffect, useRef, useState } from "react"
import { Play } from "lucide-react"
import { ImagePlaceholder } from "@/components/image-placeholder"

const videos = [
  {
    title: "[TÍTULO DO VÍDEO 1]",
    duration: "[00:00]",
    views: "[XX]K",
    description: "[Descrição breve do vídeo 1]",
  },
  {
    title: "[TÍTULO DO VÍDEO 2]",
    duration: "[00:00]",
    views: "[XX]K",
    description: "[Descrição breve do vídeo 2]",
  },
  {
    title: "[TÍTULO DO VÍDEO 3]",
    duration: "[00:00]",
    views: "[XX]K",
    description: "[Descrição breve do vídeo 3]",
  },
]

export function VideosSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeVideo, setActiveVideo] = useState(0)
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
      id="videos"
      className="py-24 lg:py-32 bg-primary text-primary-foreground"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
            [Subtítulo Vídeos]
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            [TÍTULO DA SEÇÃO
            <span className="text-accent"> VÍDEOS]</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            [DESCRIÇÃO DA SEÇÃO DE VÍDEOS. APRESENTE O CONTEÚDO QUE SERÁ EXIBIDO.]
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Video */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer">
              <ImagePlaceholder
                label={`Thumbnail Vídeo ${activeVideo + 1}`}
                aspectRatio="video"
                size="lg"
                className="w-full h-full bg-primary-foreground/10"
              />
              <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-accent-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent">
                <h3 className="text-xl font-bold mb-2">
                  {videos[activeVideo].title}
                </h3>
                <p className="text-primary-foreground/70">
                  {videos[activeVideo].description}
                </p>
              </div>
            </div>
          </div>

          {/* Video List */}
          <div
            className={`space-y-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => setActiveVideo(index)}
                className={`flex gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                  activeVideo === index
                    ? "bg-accent/20 border border-accent/30"
                    : "hover:bg-primary-foreground/5"
                }`}
              >
                <div className="relative w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <ImagePlaceholder
                    label={`Vídeo ${index + 1}`}
                    aspectRatio="video"
                    size="sm"
                    className="w-full h-full bg-primary-foreground/10"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/30">
                    <Play className="h-6 w-6 text-primary-foreground" fill="currentColor" />
                  </div>
                  <span className="absolute bottom-1 right-1 bg-primary/80 text-primary-foreground text-xs px-1.5 py-0.5 rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold mb-1 truncate">{video.title}</h4>
                  <p className="text-sm text-primary-foreground/60 mb-2 line-clamp-1">
                    {video.description}
                  </p>
                  <span className="text-xs text-primary-foreground/50">
                    {video.views} visualizações
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
