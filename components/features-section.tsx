"use client"

import { useEffect, useRef, useState } from "react"
import { Palette, Languages, Sparkles, Heart, Cloud, Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Palette,
    title: "Create & Design Poetry",
    description: "Craft beautiful poetry cards with customizable fonts, colors, and backgrounds.",
  },
  {
    icon: Languages,
    title: "Script Conversion",
    description: "Seamlessly convert between Roman, Urdu, Hindi, and other scripts.",
  },
  {
    icon: Sparkles,
    title: "AI Enhancement",
    description: "Get intelligent suggestions for themes, rhymes, and emotional depth.",
  },
  {
    icon: Heart,
    title: "Social Feed",
    description: "Like, share, and explore poetry from creators around the world.",
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "Save your poetry images securely in the cloud for easy access.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Canvas",
    description: "Create stunning poetry on any device with our responsive editor.",
  },
]

export function FeaturesSection() {
  const [cardVisibility, setCardVisibility] = useState<boolean[]>(new Array(features.length).fill(false))
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
      { threshold: 0.2 },
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#0B0E15] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#A88C63] text-center mb-4">Features</h2>
        <p className="text-[#E4D9C8]/70 text-center mb-16 max-w-2xl mx-auto">
          Everything you need to create, share, and discover beautiful poetry
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isVisible = cardVisibility[index]

            return (
              <Card
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                data-index={index}
                className={`bg-[#12161f] border-[#A88C63]/20 hover:border-[#A88C63]/50 transition-all duration-500 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#A88C63]/10 flex items-center justify-center mb-4 group-hover:bg-[#A88C63]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#A88C63]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#E4D9C8] mb-2">{feature.title}</h3>
                  <p className="text-[#E4D9C8]/60">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
