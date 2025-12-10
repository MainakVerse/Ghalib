"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Feather } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0E15]/90 backdrop-blur-md border-b border-[#A88C63]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <Feather className="h-6 w-6 text-[#A88C63] group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-semibold text-[#A88C63]">GHALIB</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#E4D9C8] hover:text-[#A88C63] transition-colors">
              Home
            </Link>
            <Link href="/generate" className="text-[#E4D9C8] hover:text-[#A88C63] transition-colors">
              Generate
            </Link>
            <Link href="/posts" className="text-[#E4D9C8] hover:text-[#A88C63] transition-colors">
              All Posts
            </Link>
            <Button asChild className="bg-[#A88C63] text-[#0B0E15] hover:bg-[#5A3A31] hover:text-[#E4D9C8]">
              <Link href="/generate">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#E4D9C8] hover:text-[#A88C63]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0E15]/95 backdrop-blur-md border-b border-[#A88C63]/20">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-[#E4D9C8] hover:text-[#A88C63] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/generate"
              className="block text-[#E4D9C8] hover:text-[#A88C63] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Generate
            </Link>
            <Link
              href="/posts"
              className="block text-[#E4D9C8] hover:text-[#A88C63] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              All Posts
            </Link>
            <Button asChild className="w-full bg-[#A88C63] text-[#0B0E15] hover:bg-[#5A3A31] hover:text-[#E4D9C8]">
              <Link href="/generate" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
