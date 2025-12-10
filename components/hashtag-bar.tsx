"use client"
import { cn } from "@/lib/utils"

const hashtags = [
  { tag: "all", label: "All" },
  { tag: "love", label: "#love" },
  { tag: "sad", label: "#sad" },
  { tag: "ghazal", label: "#ghazal" },
  { tag: "friendship", label: "#friendship" },
  { tag: "life", label: "#life" },
  { tag: "hope", label: "#hope" },
  { tag: "heartbreak", label: "#heartbreak" },
]

interface HashtagBarProps {
  activeTag: string
  onTagChange: (tag: string) => void
}

export function HashtagBar({ activeTag, onTagChange }: HashtagBarProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {hashtags.map((hashtag) => (
        <button
          key={hashtag.tag}
          onClick={() => onTagChange(hashtag.tag)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300",
            activeTag === hashtag.tag
              ? "bg-[#A88C63] text-[#0B0E15]"
              : "bg-[#12161f] text-[#E4D9C8] hover:bg-[#A88C63]/20 border border-[#A88C63]/30",
          )}
        >
          {hashtag.label}
        </button>
      ))}
    </div>
  )
}
