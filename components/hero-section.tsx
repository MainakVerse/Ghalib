"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react"

const phrases = [
  "Where words become heartbeats…",
  "Write. Feel. Share.",
  "Let emotions speak.",
  "Poetry in every breath.",
  "Express the inexpressible.",
]

export function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const phrase = phrases[currentPhrase]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < phrase.length) {
            setDisplayText(phrase.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentPhrase((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentPhrase])

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }
        @keyframes shimmer {
          0% {
            opacity: 0.1;
            transform: translateX(-100%);
          }
          50% {
            opacity: 0.3;
          }
          100% {
            opacity: 0.1;
            transform: translateX(100%);
          }
        }
        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }
        @keyframes title {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-shimmer {
          animation: shimmer 15s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        .animate-title {
          animation: title 1s ease-out;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0B0E15] via-[#0F1219] to-[#0B0E15]">
        {/* Enhanced decorative elements with animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A88C63]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5A3A31]/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A88C63]/5 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Animated floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#A88C63]/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Improved floating decorative lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-[#A88C63]/20 to-transparent animate-shimmer"
              style={{
                top: `${15 + i * 14}%`,
                left: "-20%",
                right: "-20%",
                transform: `rotate(${-6 + i * 2}deg)`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Decorative top accent */}
          <div className="flex items-center justify-center gap-2 mb-8 opacity-70">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#A88C63]" />
            <Sparkles className="h-4 w-4 text-[#A88C63]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#A88C63]" />
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF7A] via-[#A88C63] to-[#8B7355] mb-8 tracking-tight drop-shadow-[0_0_30px_rgba(168,140,99,0.3)] animate-title">
            GHALIB
          </h1>

          {/* Subtitle with better spacing and styling */}
          <div className="h-20 flex items-center justify-center mb-12">
            <p className="text-xl sm:text-2xl md:text-3xl text-[#E4D9C8]/90 italic font-light tracking-wide">
              {displayText}
              <span className="inline-block w-0.5 h-6 sm:h-7 md:h-8 bg-[#A88C63] ml-1 animate-blink" />
            </p>
          </div>


          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#A88C63] to-[#8B7355] text-[#0B0E15] hover:from-[#8B7355] hover:to-[#5A3A31] hover:text-[#E4D9C8] text-lg px-10 py-7 group shadow-xl shadow-[#A88C63]/20 hover:shadow-2xl hover:shadow-[#A88C63]/30 transition-all duration-300 hover:scale-105 font-semibold"
            >
              <Link href="/generate">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-[#A88C63]/50 text-[#A88C63] hover:bg-[#A88C63]/10 hover:border-[#A88C63] text-lg px-10 py-7 bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105 font-semibold"
            >
              <a href="#quote">Explore Poetry</a>
            </Button>
          </div>

          <a href="#quote"
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#A88C63] animate-bounce hover:text-[#D4AF7A] transition-colors group"
            aria-label="Scroll to learn more"
          >
            <span className="text-xs uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-opacity">
              Scroll
            </span>
            <ChevronDown className="h-6 w-6" />
          </a>
        </div>
      </section>
    </>
  )
}