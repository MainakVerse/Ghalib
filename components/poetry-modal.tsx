"use client"

import { X, Heart, Share2, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface PoetryModalProps {
  isOpen: boolean
  onClose: () => void
  poetry: {
    id: number
    title: string
    content: string
    author: string
    likes: number
    tags: string[]
    imageQuery: string
  } | null
}

export function PoetryModal({ isOpen, onClose, poetry }: PoetryModalProps) {
  if (!isOpen || !poetry) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0E15]/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#12161f] rounded-2xl overflow-hidden border border-[#A88C63]/30"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#0B0E15]/50 text-[#E4D9C8] hover:bg-[#0B0E15] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[3/4] md:aspect-auto">
            <Image
              src={`/.jpg?height=600&width=450&query=${encodeURIComponent(poetry.imageQuery)}`}
              alt={poetry.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#A88C63] mb-4">{poetry.title}</h2>
              <p className="text-[#E4D9C8] text-lg italic leading-relaxed whitespace-pre-line mb-4">{poetry.content}</p>
              <p className="text-[#5A3A31]">— {poetry.author}</p>

              <div className="flex flex-wrap gap-2 mt-6">
                {poetry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs bg-[#A88C63]/10 text-[#A88C63] border border-[#A88C63]/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#A88C63]/20">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="text-[#E4D9C8] hover:text-[#A88C63] hover:bg-[#A88C63]/10">
                  <Heart className="w-5 h-5 mr-2" />
                  {poetry.likes}
                </Button>
                <Button variant="ghost" size="sm" className="text-[#E4D9C8] hover:text-[#A88C63] hover:bg-[#A88C63]/10">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
              <Button className="bg-[#A88C63] text-[#0B0E15] hover:bg-[#5A3A31] hover:text-[#E4D9C8]">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
