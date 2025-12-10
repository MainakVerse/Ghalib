"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChatInterface } from "@/components/chat-interface"
import { ShayariDisplay } from "@/components/shayari-display"

export default function GeneratePage() {
  const [generatedShayari, setGeneratedShayari] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  return (
    <main className="min-h-screen bg-[#0B0E15] flex flex-col">
      <Navbar />

      <section className="flex-1 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#A88C63] mb-2">Generate Shayari</h1>
            <p className="text-[#E4D9C8]/70">Converse with AI to create beautiful poetry</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-280px)] min-h-[500px]">
            {/* Chat Interface */}
            <div className="h-full">
              <ChatInterface onShayariGenerated={setGeneratedShayari} setIsGenerating={setIsGenerating} />
            </div>

            {/* Shayari Display */}
            <div className="h-full">
              <ShayariDisplay content={generatedShayari} isLoading={isGenerating} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
