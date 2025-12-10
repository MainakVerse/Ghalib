"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HashtagBar } from "@/components/hashtag-bar"
import { PoetryCardSkeleton } from "@/components/poetry-card-skeleton"
import { PoetryModal } from "@/components/poetry-modal"
import { Heart } from "lucide-react"

// Mock poetry data
const mockPoetry = [
  {
    id: 1,
    title: "Ishq",
    content: "Mohabbat mein nahi hai fark jeene aur marne ka\nUsi ko dekh kar jeete hain jis kaafir pe dam nikle",
    author: "Ghalib",
    likes: 234,
    tags: ["love", "ghazal"],
    imageQuery: "romantic urdu poetry elegant calligraphy",
  },
  {
    id: 2,
    title: "Tanhai",
    content: "Dil-e-nadaan tujhe hua kya hai\nAakhir is dard ki dawa kya hai",
    author: "Ghalib",
    likes: 189,
    tags: ["sad", "life"],
    imageQuery: "melancholic poetry dark aesthetic",
  },
  {
    id: 3,
    title: "Dosti",
    content: "Hazaaron khwahishein aisi ke har khwahish pe dam nikle\nBahut nikle mere armaan lekin phir bhi kam nikle",
    author: "Ghalib",
    likes: 312,
    tags: ["friendship", "hope"],
    imageQuery: "hopeful poetry sunrise aesthetic",
  },
  {
    id: 4,
    title: "Zindagi",
    content: "Ishq par zor nahin, hai ye wo aatish Ghalib\nKi lagaye na lage aur bujhaye na bane",
    author: "Ghalib",
    likes: 267,
    tags: ["life", "love"],
    imageQuery: "passionate poetry fire aesthetic",
  },
  {
    id: 5,
    title: "Intezaar",
    content: "Roz aankhon tale shaam guzarti thi\nAaj tumhi nahin, zindagi guzarti hai",
    author: "Unknown",
    likes: 145,
    tags: ["sad", "heartbreak"],
    imageQuery: "waiting poetry evening aesthetic",
  },
  {
    id: 6,
    title: "Umeed",
    content: "Qafas udaas hai yaaron, sabaa se kuch to kaho\nKahan se aayi hai, kidhar ko jaati hai",
    author: "Ghalib",
    likes: 198,
    tags: ["hope", "ghazal"],
    imageQuery: "hopeful poetry bird aesthetic",
  },
  {
    id: 7,
    title: "Dard",
    content: "Dard minnat-kash-e-dawa na hua\nMain na achha hua, bura na hua",
    author: "Ghalib",
    likes: 221,
    tags: ["sad", "life"],
    imageQuery: "pain poetry monochrome aesthetic",
  },
  {
    id: 8,
    title: "Pyar",
    content: "Woh aaye ghar mein hamare, khuda ki qudrat hai\nKabhi hum unko, kabhi apne ghar ko dekhte hain",
    author: "Ghalib",
    likes: 276,
    tags: ["love", "ghazal"],
    imageQuery: "love poetry home aesthetic",
  },
  {
    id: 9,
    title: "Safar",
    content: "Seene mein jalan aankhon mein toofan sa kyun hai\nIs shahr mein har shakhs pareshaan sa kyun hai",
    author: "Faiz",
    likes: 334,
    tags: ["life", "hope"],
    imageQuery: "journey poetry road aesthetic",
  },
]

export default function PostsPage() {
  const [activeTag, setActiveTag] = useState("all")
  const [isLoading, setIsLoading] = useState(true)
  const [selectedPoetry, setSelectedPoetry] = useState<(typeof mockPoetry)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredPoetry = activeTag === "all" ? mockPoetry : mockPoetry.filter((p) => p.tags.includes(activeTag))

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [activeTag])

  const handlePoetryClick = (poetry: (typeof mockPoetry)[0]) => {
    setSelectedPoetry(poetry)
    setIsModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-[#0B0E15]">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#A88C63] text-center mb-4">Poetry Collection</h1>
          <p className="text-[#E4D9C8]/70 text-center mb-8 max-w-2xl mx-auto">
            Explore beautiful poetry from our community of poets and writers
          </p>

          {/* Hashtag Filter */}
          <div className="mb-12">
            <HashtagBar activeTag={activeTag} onTagChange={setActiveTag} />
          </div>

          {/* Poetry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {isLoading
              ? Array(8)
                  .fill(0)
                  .map((_, i) => <PoetryCardSkeleton key={i} />)
              : filteredPoetry.map((poetry) => (
                  <div
                    key={poetry.id}
                    className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer border border-transparent hover:border-[#A88C63]/50 transition-all duration-300"
                    onClick={() => handlePoetryClick(poetry)}
                  >
                    <Image
                      src={`/.jpg?height=400&width=300&query=${encodeURIComponent(poetry.imageQuery)}`}
                      alt={poetry.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E15] via-[#0B0E15]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-[#A88C63] font-semibold mb-1">{poetry.title}</h3>
                      <p className="text-[#E4D9C8]/70 text-sm line-clamp-2">{poetry.content.split("\n")[0]}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[#5A3A31] text-xs">{poetry.author}</span>
                        <span className="flex items-center gap-1 text-[#E4D9C8]/50 text-xs">
                          <Heart className="w-3 h-3" />
                          {poetry.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          {!isLoading && filteredPoetry.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#E4D9C8]/50 text-lg">No poetry found for this tag.</p>
            </div>
          )}
        </div>
      </section>

      <PoetryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} poetry={selectedPoetry} />

      <Footer />
    </main>
  )
}
