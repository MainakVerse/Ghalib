"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const poetryCards = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  img: `/poetry/${i + 1}.png`, // <— Load from public folder
}))

export function GlimpseSection() {
  const [cardVisibility, setCardVisibility] = useState<boolean[]>(new Array(poetryCards.length).fill(false))
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          setCardVisibility((prev) => {
            const updated = [...prev]
            updated[index] = entry.isIntersecting
            return updated
          })
        })
      },
      { threshold: 0.1 }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#0B0E15] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#A88C63] text-center mb-4">
          A Glimpse of GHALIB
        </h2>
        <p className="text-[#E4D9C8]/70 text-center mb-16 max-w-2xl mx-auto">
          Beautiful poetry cards created by our community
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {poetryCards.map((card, index) => {
            const isVisible = cardVisibility[index]
            const isHovered = hoveredCard === index

            const offsetClass = index % 3 === 1 ? "md:mt-12" : index % 3 === 2 ? "md:mt-6" : ""

            return (
              <div
                key={card.id}
                ref={(el) => { cardsRef.current[index] = el }}
                data-index={index}
                className={`relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ${offsetClass} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Image
                  src={card.img}
                  alt={`Poetry card ${card.id}`}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    isHovered ? "scale-110" : "scale-100"
                  }`}
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#0B0E15] via-transparent to-transparent transition-opacity duration-300 ${
                    isHovered ? "opacity-80" : "opacity-40"
                  }`}
                />
                <div
                  className={`absolute inset-0 border-2 rounded-lg transition-colors duration-300 ${
                    isHovered ? "border-[#A88C63]" : "border-transparent"
                  }`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}