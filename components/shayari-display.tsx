"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Download, Palette } from "lucide-react"

interface ShayariDisplayProps {
  content: string
  isLoading: boolean
}

export function ShayariDisplay({ content, isLoading }: ShayariDisplayProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-[#A88C63]" />
        <h2 className="text-xl font-semibold text-[#A88C63]">Arz-e-Mohtaram</h2>
      </div>

      <Card className="flex-1 bg-[#0B0E15] border-[#A88C63]/30 relative overflow-hidden">
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#A88C63]/50" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#A88C63]/50" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#A88C63]/50" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#A88C63]/50" />

        <CardContent className="p-8 h-full flex items-center justify-center">
          {isLoading ? (
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 border-2 border-[#A88C63] border-t-transparent rounded-full animate-spin" />
              <p className="text-[#E4D9C8]/50 italic">Weaving words with soul...</p>
            </div>
          ) : content ? (
            <div className="text-center">
              <p className="text-[#E4D9C8] text-lg md:text-xl italic leading-relaxed whitespace-pre-line">{content}</p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-[#E4D9C8]/40 italic">Your poetry will appear here...</p>
              <p className="text-[#E4D9C8]/20 text-sm mt-2">Start a conversation to generate beautiful Shayari</p>
            </div>
          )}
        </CardContent>
      </Card>

      {content && !isLoading && (
        <div className="flex items-center justify-center gap-4 mt-4">
          <Button variant="outline" className="border-[#A88C63] text-[#A88C63] hover:bg-[#A88C63]/10 bg-transparent">
            <Palette className="w-4 h-4 mr-2" />
            Beautify
          </Button>
          <Button className="bg-[#A88C63] text-[#0B0E15] hover:bg-[#5A3A31] hover:text-[#E4D9C8]">
            <Download className="w-4 h-4 mr-2" />
            Download Poetry Card
          </Button>
        </div>
      )}
    </div>
  )
}
