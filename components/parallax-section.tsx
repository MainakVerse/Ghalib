"use client"

import { useEffect, useRef, useState } from "react"
import { Scroll, BookOpen, Heart, Smartphone, Sparkles } from "lucide-react"
import { useFadeInView } from "@/hooks/use-fade-in-view"

const stages = [
  {
    icon: Scroll,
    title: "Ancient Oral Poetry",
    description: "Where stories were passed through generations by voice alone",
    year: "Ancient Times",
  },
  {
    icon: BookOpen,
    title: "Classical Written Verses",
    description: "Persian and Urdu influences shaped the art of written poetry",
    year: "Medieval Era",
  },
  {
    icon: Heart,
    title: "Romantic Era & Ghazals",
    description: "The golden age of emotional expression through structured verse",
    year: "18th-19th Century",
  },
  {
    icon: Smartphone,
    title: "Digital Poetry Formats",
    description: "Poetry found new life in digital spaces and social media",
    year: "21st Century",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Expression",
    description: "GHALIB — Where tradition meets innovation",
    year: "Today",
  },
]

export function ParallaxSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { ref: sectionRef, isVisible: sectionVisible } = useFadeInView<HTMLDivElement>({ threshold: 0.1 })

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const container = containerRef.current
      const rect = container.getBoundingClientRect()
      const containerHeight = container.offsetHeight
      const viewportHeight = window.innerHeight

      const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (containerHeight + viewportHeight)))

      const newIndex = Math.min(stages.length - 1, Math.floor(scrollProgress * stages.length))
      setActiveIndex(newIndex)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={(el) => {
        containerRef.current = el
        // @ts-ignore - combining refs
        if (sectionRef) sectionRef.current = el
      }}
      className={`relative bg-[#0B0E15] py-24 transition-all duration-700 ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#A88C63] text-center mb-4">The Evolution of Poetry</h2>
        <p className="text-[#E4D9C8]/70 text-center mb-16 max-w-2xl mx-auto">
          From ancient traditions to modern innovation
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#A88C63]/20" />

          <div className="space-y-24">
            {stages.map((stage, index) => {
              const Icon = stage.icon
              const isActive = index <= activeIndex
              const isCurrent = index === activeIndex

              return (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 transition-all duration-700 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } ${isActive ? "opacity-100" : "opacity-30"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <span className="text-[#5A3A31] text-sm font-medium">{stage.year}</span>
                    <h3
                      className={`text-2xl font-semibold mb-2 transition-colors duration-500 ${
                        isCurrent ? "text-[#A88C63]" : "text-[#E4D9C8]"
                      }`}
                    >
                      {stage.title}
                    </h3>
                    <p className="text-[#E4D9C8]/70">{stage.description}</p>
                  </div>

                  {/* Center icon */}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isCurrent ? "bg-[#A88C63] scale-110" : isActive ? "bg-[#5A3A31]" : "bg-[#1a1f2a]"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 transition-colors duration-500 ${
                        isCurrent ? "text-[#0B0E15]" : "text-[#E4D9C8]"
                      }`}
                    />
                  </div>

                  <div className="flex-1" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
