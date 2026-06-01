"use client"

import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImagePlaceholderProps {
  label: string
  className?: string
  aspectRatio?: "square" | "video" | "portrait" | "wide"
  size?: "sm" | "md" | "lg"
}

export function ImagePlaceholder({ 
  label, 
  className,
  aspectRatio = "square",
  size = "md"
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[2/1]"
  }

  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  }

  const iconSizes = {
    sm: "h-6 w-6",
    md: "h-10 w-10",
    lg: "h-14 w-14"
  }

  return (
    <div 
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-border bg-muted/50 transition-colors hover:bg-muted/80",
        aspectClasses[aspectRatio],
        className
      )}
    >
      <ImageIcon className={cn("text-muted-foreground/60", iconSizes[size])} />
      <span className={cn("text-center font-medium text-muted-foreground px-4", sizeClasses[size])}>
        {label}
      </span>
    </div>
  )
}
