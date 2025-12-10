"use client"

import { useFadeInView } from "@/hooks/use-fade-in-view"

export function QuoteSection() {
  const { ref: sectionRef, isVisible } = useFadeInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section
      id="quote"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-[#0B0E15] py-24 overflow-hidden"
    >
      {/* Decorative border */}
      <div className="absolute inset-8 border border-[#A88C63]/10 pointer-events-none" />
      <div className="absolute inset-12 border border-[#A88C63]/5 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-[#A88C63] text-6xl mb-8">"</div>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl text-[#E4D9C8] italic leading-relaxed mb-8">
            Dil hi to hai, na sang-o-khisht, dard se bhar na aaye kyun.
          </blockquote>
          <p className="text-[#A88C63] text-xl mb-12">— Mirza Ghalib</p>

          <div
            className={`max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-[#E4D9C8]/70 text-lg leading-relaxed">
              In the spirit of the legendary poet Mirza Ghalib, we honor centuries of poetic heritage. GHALIB brings
              together the timeless beauty of classical poetry with modern technology, allowing you to create, share,
              and preserve the art of Shayari for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
